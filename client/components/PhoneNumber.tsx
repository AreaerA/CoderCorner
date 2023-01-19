// Phone Number Input
//! Prompt
// In this exercise, you're tasked with building a custom input component to receive and properly format phone numbers.
// Generally, you would use a library like react-phone-number-input to handle this for you. However, in this exercise, you'll build the component from scratch.

// For example, given the following user input:
// 1234567890

// The input component value should format the value to:
// (123) 456-7890

// It should also pass the underlying value of the input to the onChange prop which is passed into it as a string in E.164 format as seen below:
// +11234567890

// E.164 is an international standard for phone numbers.

// In this case, we only care about US phone numbers so you can just prepend +1 to the number.

// Criteria
// The input should only accept numbers and format the input as the user types.
// The input should have a placeholder value of (123) 456-7890
// The format should be (XXX) XXX-XXXX
// The passed in onChange handler should be called with the value of the input as the user types.
// The value passed to the onChange handler should be in E.164 format (e.g. +15555555555)

// Refer to the test cases in PhoneNumberInput.test.tsx to answer any remaining functionality questions you may have.

//!Walkthrough
// Handling Change Events
// Formatting as the User Types

// In order to handle the user typing, we can hook into the onChange event React provides to us for any given input element.

// Whenever the user types, we want to do two things -

// Format the user input and set the value of the underlying input tag to this formatted value.

// Call the onChange prop that is passed into the PhoneNumberInput component with the E.164 formatted string.

// State Management
// We can use the useState hook to keep track of the formatted value. We can then use the onChange event to update the formatted value.

// We can then use the useEffect hook to call the onChange prop whenever the formatted value changes.

// By using the useEffect hook we can ensure that the onChange prop is only called when the formatted value changes.

// This is important because we don't want to call the onChange prop when the user types a character that doesn't change the formatted value.

// For example, if the user types a character that is not a digit, we don't want to call the onChange prop.

// toDigits Functionality
// We created the toDigits function to remove all non-digit characters from the user input.

// The toDigits function uses a regular expression to match all non-digit characters and then replaces them with an empty string.

//!Solution
import React, { useState, ChangeEvent, useEffect } from "react";

const DIGIT_REGEX = /\D/g;
const toDigits = (value: string) => value.replace(DIGIT_REGEX, "");

export default function PhoneNumberInput({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  const [formattedValue, setFormattedValue] = useState("");

  let formatValue = (event: ChangeEvent<HTMLInputElement>) => {
    let curr = toDigits(event.target.value);
    if (curr.length > 10) curr = curr.slice(0, 10);
    if (curr.length > 6) curr = `${curr.slice(0, 6)}-${curr.slice(6)}`;
    if (curr.length > 3) curr = `(${curr.slice(0, 3)}) ${curr.slice(3)}`;
    setFormattedValue(curr);
  };

  useEffect(() => {
    if (formattedValue.length > 0) {
      onChange(`+1${toDigits(formattedValue)}`);
    } else {
      onChange("");
    }
  }, [formattedValue]);

  return (
    <input
      type="text"
      value={formattedValue}
      onChange={formatValue}
      placeholder="(123) 456-7890"
    />
  );
}

//!Attempt
// import React, { useState, ChangeEvent, useEffect } from "react";
// import { updateDecorator } from "typescript";

// export default function PhoneNumber({onChange,}: { onChange: (value: string) => void;}) {
  
//     const [number, updateNumber] = useState(''); 
//     const [searchFieldString, setSearchField] = useState('')
// //variable assigned to correct data output; 

// //useEffect
//   useEffect(() => {
//     function helperOne (number) {
//       var result = '+1'; 
//       for(let i = 0; i < number.length; i++){
//           let num = Number(number[i]);
//         if (Number.isNaN(num) !== true) result += String(num); 
//       }
//       return result; 
//     }
//     onChange  = (event) => {
//       const searchFieldString = event.target.value.toLocaleLowerCase();
//       updateNumber(helperOne(number))
//       setSearchField(searchFieldString);
//     }
//       onChange(helperOne(number))
//   // return helperOne(input); 
// }, [number, searchFieldString])
// //+112323234
// //(123) 345-6789

// let formattedNumber = (event: ChangeEvent<HTMLInputElement>) => {
    
//     updateNumber
// }

// //*helper function 
//   //iterate over number
//     //conditional checking if the element at index is a number
//       //if truthy add to and reassign variable
//       //return out;
// // (function helperOne (number) {
// //   var result = '+1'; 
// //   for(let i = 0; i < number.length; i++){
// //       let num = Number(number[i]);
// //     if (Number.isNaN(num) !== true) result += String(num); 
// //   }
// //   return result; 
// // }());

    
// //helper function 
// //return out visually represented number for display


// return( 
//   <div>
//     <input
//     type="text"
//     value={number}
//     onChange={}
//     placeholder="(123) 456-7890"
//     />
//   </div>
//     )
// };


