// Phone Number Input
// Prompt
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

import React from "react";

export default function PhoneNumber({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  return <input />;
}