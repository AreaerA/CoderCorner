import React, { useState, useEffect, useCallback, useReducer } from "react";
import "./styles.css";

/*
  Instructions:
    Implement the `useFetch` function. 
*/

function useFetch(url) {
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          data: action.payload
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload
        };
      default:
        throw new Error();
    }
  };

  const [{ isLoading, isError, error, data }, dispatch] = useReducer(
    fetchReducer,
    {
      isLoading: false,
      isError: false,
      error: null,
      data: {}
    }
  );

  const fetchData = useCallback(async () => {
    dispatch({ type: "FETCH_INIT" });
    try {
      const response = await fetch(url);
      dispatch({ type: "FETCH_SUCCESS", payload: await response.json() });
    } catch (e) {
      dispatch({ type: "FETCH_FAILURE", payload: JSON.stringify(e) });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, isError, error, data };
}

export default function App() {
  const postIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const [index, setIndex] = useState(0);

  const { isLoading, isError, error, data: post } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
  );

  const incrementIndex = () => {
    setIndex((i) => (i === postIds.length - 1 ? i : i + 1));
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return (
      <>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </>
    );
  }

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {error && <p>{error}</p>}
      {index === postIds.length - 1 ? (
        <p>No more posts exists....</p>
      ) : (
        <button onClick={incrementIndex}>Next Post</button>
      )}
    </div>
  );
}
