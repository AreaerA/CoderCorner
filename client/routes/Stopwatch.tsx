import React, { useState, useEffect, useRef } from 'react'

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(250559999)
  const watch = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    if (isRunning) {
      watch.current = setInterval(() => {
        setTime((s) => s + 1)
      }, 10) // 10ms is minimum update interval supported by javascript
    } else clearInterval(watch.current)
  }, [isRunning, watch])

  const handleToggle = () => setIsRunning((s) => !s)

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
    clearInterval(watch.current)
  }

  const formatTimeString = (input: number) => {
    const MINUTE_TO_SECONDS = 60
    const HOUR_TO_SECONDS = 60 * 60
    const DAY_TO_SECONDS = 24 * 60 * 60

    const totalSeconds = Math.floor(input / 100)
    const subseconds = input % 100

    const seconds = totalSeconds % MINUTE_TO_SECONDS
    const minutes = Math.floor(
      (totalSeconds % HOUR_TO_SECONDS) / MINUTE_TO_SECONDS
    )
    const hours = Math.floor((totalSeconds % DAY_TO_SECONDS) / HOUR_TO_SECONDS)
    const days = Math.floor(totalSeconds / DAY_TO_SECONDS)

    return `
        ${String(days).padStart(2, '0')}d
      : ${String(hours).padStart(2, '0')}h
      : ${String(minutes).padStart(2, '0')}m
      : ${String(seconds).padStart(2, '0')}s
      : ${String(subseconds).padStart(2, '0')}0ms
      `
  }

  return (
    <>
      <div className="time">{formatTimeString(time)}</div>
      <div className="controls">
        <button
          children={!isRunning ? 'Start' : 'Stop'}
          onMouseDown={handleToggle}
        />
        <button children="Reset" onClick={handleReset} />
      </div>
    </>
  )
}
