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

export default function ColorChange() {

    return (
          <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Color Codes</h1>
      {/* Randomly generate the HEX below. */}
      <h2>#FFFFFF</h2>
      <h2>What color is this?</h2>
      {/*
        <div data-testid="color-container">
          <div data-testid="incorrect-color"></div>
          <div data-testid="correct-color"></div>
        </div>
      */}
    </div>  
    )
}