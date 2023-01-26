import React from "react"

type StarProps = {
  index: number
  isActive: boolean
  isSaved: boolean
  onMouseDown: (index: number) => void
  onMouseEnter: (index: number) => void
  onMouseLeave: () => void
}

export const Star = ({
  index,
  isActive,
  isSaved,
  onMouseDown,
  onMouseEnter,
  onMouseLeave
}: StarProps) => (
  <button
    className="star"
    onMouseDown={() => onMouseDown(index)}
    onMouseEnter={() => onMouseEnter(index)}
    onMouseLeave={() => onMouseLeave()}
  >
    {isSaved || isActive ? "⭐️" : "☆"}
  </button>
)
