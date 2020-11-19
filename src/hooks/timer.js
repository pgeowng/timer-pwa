import { useEffect, useState, useCallback, useReducer } from 'react'

const defaultTime = [Date.now(), Date.now()]

export const useTimer = () => {
  const [time, setTime] = useState(defaultTime)

  // console.log(time[1] - time[0])

  useEffect(() => {
    // const timer = setTime(() => {
    //   setTime((time) => [...time, Date.now()].slice(-2))
    // }, 150)
    // return () => clearTimeout(timer)
    // console.log('setup timer effect')
    const interval = setInterval(() => {
      setTime((time) => [...time, Date.now()].slice(-2))
    }, 500)
  }, [])

  return time
}
