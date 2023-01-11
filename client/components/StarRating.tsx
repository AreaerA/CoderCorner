import "../stylesheets/StarRating.css";
import { useEffect, useState } from "react";

const StarRating = (props) => {
    const [star, setStar] = useState([]); 
    // {
    //     1: true;
    //     2: false;
    //     3: false;
    // }
    // i ? five-pointed-star:after : five-pointed-star:before

const starArr = []; 
useEffect(() => {
    for (let i = 0; i < 5; i++) {
        starArr.push(
            <div className={name} key={i+1} onClick={(e) => handleClick(e, i)} ></div>
        )
        console.log(starArr);
    }
    setStar(starArr);
}, []); 

useEffect(() => {
    
},[]);

let name = 'five-pointed-star'; 
function handleClick(e, i) {
    e.preventDefault();
    name = "five-pointed-star";
}

    return(
        <div>
            <h1>Star Ratings</h1>
            <div className='Star-Container'>
                {/* <div className="five-pointed-star:before" key = {1}></div>
                <div className="five-pointed-star:before" key = {2}></div>
                <div className="five-pointed-star:before" key = {3}></div>
                <div className="five-pointed-star:before" key = {4}></div>
                <div className="five-pointed-star:before" key = {5}></div> */}
                {/* {starArr.map(star => (
                     <div className="five-pointed-star" key={star+1} onClick={(e) => handleClick(e, i)}></div>
                )
                )} */}
                {}
            </div>
        </div >
    )
}

export default StarRating;