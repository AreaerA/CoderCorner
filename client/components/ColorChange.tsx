// Prompt
// Build a game called Color Codes that displays a random color code HEX and asks the user to select which color it is. It should display 3 colored boxes, and the user should be able to click on one of them to select their answer.

// You should aim to match the styling and functionality of the solution preview below as closely as possible:


// If the user selects the correct color, it should display a message saying "Correct!" and if they select the wrong color, it should display a message saying "Incorrect!". After each selection display a button to play again with the text "Play Again".

// When the user clicks the play again button, it should generate a new color code and new colored boxes, and they should be able to start the game again.

// To add styles, you can use the inline style property

// <div style={{ background: "#000000" }}>...</div>
// Criteria
// 1. The colored boxes should be displayed below the color code, and should be 100px by 100px in size.

// 2. The user should be able to click on one of the colored boxes to select their answer, ending the game.

// 3. If the user selects the correct color, it should display a message saying Correct! and a button to play again.

// 4. If the user selects the wrong color, it should display a message saying "Incorrect!" and a button to play again.

// 5. When the user clicks the play again button Play Again, it should generate a new color code and new colored boxes.

// 6. The container for the colored boxes should have a data-testid of color-container.

// 7. The colored boxes should have a data-testid of correct-color if it is the correct color, and incorrect-color if it is not the correct color.

// Note: Without the data-testid properties, your tests will fail.
import React, { useState, useEffect } from "react";

export default function ColorChange() {

  const [answer, setAnswer] = useState<string>(''); 
  const [colorArray, setColorArray] = useState<string[]>([]);
  const [restart, setRestart] = useState<boolean>(false);
  
useEffect(() => {

  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  return array
  }
  const newColorArray : string[] = [];
  for (let i = 0; i < 3; i++) {
      newColorArray.push(random_hex_color_code())
  }
  setColorArray(newColorArray);
  setAnswer(newColorArray[2])
  shuffleArray(colorArray); 
  setRestart(false);
}, [setColorArray, setAnswer, restart]);

const answerTest = (key) => {
  return key === answer ?  true : false; 
}

  const style : CSS.Properties= {
    display: 'flex',
    flex- flow: 'row-wrap',
    color: `${el}`,
    height: "10rem",
    width: "10rem",
    border: '1px',
    border - style: "solid",
    }
    return (
  <div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Color Codes</h1>
        <h1>State: Answer-{answer}</h1>
        <h1>State: Color Array-{colorArray}</h1>
        <h1>State: Restart-{`${restart}`}</h1>
      {/* Randomly generate the HEX below. */}
      {/* <h2>#FFFFFF</h2> */}
      <h2>What color is this?</h2>
        <div data-testid='color-container'>
          {colorArray.map(el => {
            return (
              <div 
                key={`${el}`} 
                onClick= {() => answerTest(`${el}`)} 
                data-testid={ (el === answer) ? "correct-color" : "incorrect-color" } 
                style={}
              ></div>
          )
        })}
        </div>
      <div className="resultOfClick">
        { (answer) ? <h3>Correct!</h3> : <h3>Boooooo</h3>}
      </div>
      <button className="restart" onClick={() => setRestart(true)}> Restart </button>
    </div >
  </div>
    )
  }
  {/*
    <div data-testid="color-container">
      <div data-testid="incorrect-color"></div>
      <div data-testid="correct-color"></div>
    </div>
  */}