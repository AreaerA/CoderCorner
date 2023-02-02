import "../stylesheets/calendar.css";
import React, { useEffect, useState } from "react";

const calendar = {
  1: "JAN",
  2: "FEB",
  3: "MAR",
  4: "APR",
  5: "MAY",
  6: "JUN",
  7: "JUL",
  8: "AUG",
  9: "SEP",
  10: "OCT",
  11: "NOV",
  12: "DEC"
};


export default function CalendarSelector() {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2023);

  // let year = 2023;

  const decrement = () => setYear(year - 1);
  const increment = () => setYear(year + 1);

  const array = [];
  for (let month in calendar) {
    array.push(calendar[month]);
  }

  function monthSelector(e) {
    let newMonth = e.target.innerText;

    for (let key in calendar) {
      if (calendar[key] === newMonth) {
        setMonth(key);
      }
    }
  }

  return (
    <div className="App">
      <h1>Calendar Selector</h1>
      <input
        className="input-date"
        id="monthInput"
        placeholder="MM"
        type="number"
        min="1"
        max="12"
      />
      <input
        className="input-date"
        id="yearInput"
        placeholder="YYYY"
        type="string"
      />
      {/* <h2>Inputted Date is{input methods}</h2> */}
      <div className="calendar">
        <div className="year-control-div">
          <div className="left-arrow" onClick={(e) => decrement()}>
            {"<"}
          </div>
          <div className="year-selector"> {year} </div>
          <div className="right-arrow" onClick={() => increment()}>
            {">"}
          </div>
        </div>
        <div className="month-selector">
          {array.map((el, i) => {
            return (
              <p className="month" onClick={(e) => monthSelector(e)} key={i}>
                {el}
              </p>
            );
          })}
        </div>
      </div>
      {/* <h2>Picked Date is{input methods}</h2> */}
      <p>
        Input date is {month} / {year}
      </p>
    </div>
  );
}
