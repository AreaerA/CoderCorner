import { useState } from "react"
import { WIDGET_SIZE } from "../App"
import { Star } from "../components/Star"

export default function StarWidget() {
  const [numActiveStars, setNumActiveStars] = useState(0)
  const [numSavedStars, setNumSavedStars] = useState(0)
  const [isHover, setIsHover] = useState(false)

  const handleClick = (index: number) => {
    if (numActiveStars === numSavedStars && numSavedStars > 0) {
      setIsHover(false)
      setNumSavedStars(0)
      setNumActiveStars(0)
    } else {
      setNumSavedStars(index)
    }
  }

  const handleEnter = (index: number) => {
    setIsHover(true)
    setNumActiveStars(index)
  }

  const handleLeave = () => {
    setIsHover(false)
    setNumActiveStars(0)
  }

  return (
    <div className="widget">
      {new Array(WIDGET_SIZE).fill(null).map((_, i) => (
        <Star
          key={Math.random() * 1000}
          index={i + 1}
          isActive={i < numActiveStars}
          isSaved={!isHover && i < numSavedStars}
          onMouseDown={handleClick}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        />
      ))}
    </div>
  )
}
