import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useAudio } from './hooks/audio'
import { useTimer } from './hooks/timer'
import useTable from './hooks/table'

import styled from 'styled-components'

import Header from './components/Header'
import ActionStatus from './components/ActionStatus'
import ErrorMessage from './components/ErrorMessage'
import InputArea from './components/InputArea'
import HelpMessage from './components/HelpMessage'

// const useTable = (value) => {
//   const [state, dispatch] = useReducer(reducer, { table: value })

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'timing'
//       default:
//         console.log('hello')
//     }
//   }
// }

const StyledApp = styled.div`
  background: #000;
  color: #eee;
  padding: 8px;
  display: flex;
  flex-direction: column;
`

const defaultTable = [
  { name: 'switching to anki', duration: 5 },
  { name: 'anki', duration: 300 },
  { name: 'switching to anime', duration: 5 },
  { name: 'anime', duration: 300 },
]

// let t = null
// const textareaString = tableToString(defaultTable)

const App = () => {
  const [prevTime, currentTime] = useTimer()
  const { audio, switchAudio, playAudio } = useAudio()
  // console.log(currentTime, prevTime)
  // const diff = currentTime - prevTime

  const { table, setTable, error, tableString } = useTable(defaultTable)

  // if (!Object.is(t, table)) {
  //   console.log('table has changed', t, table)
  // }
  // t = table

  const [position, setPosition] = useState(0)
  const [running, setRunning] = useState(false)
  const [restTime, setRestTime] = useState(table[0].duration * 1000)

  const [savedAction, setSavedAction] = useState({})

  const nextPosition = (position + 1) % table.length
  // const [oldTime, setOldTime] = useState(0)
  useEffect(() => {
    if (running) {
      setRestTime((restTime) => {
        // if (running) {
        const diff = restTime - (currentTime - prevTime)
        if (diff > 0) return diff
        else {
          playAudio(nextPosition)
          setPosition(nextPosition)
          setSavedAction({ ...table[nextPosition] })
          return table[nextPosition].duration * 1000 + diff
        }
        // }
      })
    }
  }, [playAudio, position, table, running, currentTime, prevTime, nextPosition])

  useEffect(() => {
    if (!running) {
      const newPosition = position < table.length ? position : 0
      setSavedAction({ ...table[newPosition] })
      setRestTime(table[newPosition].duration * 1000)
      setPosition(newPosition)
    }
  }, [table, running, position])

  const onRunning = useMemo(() => {
    return () => {
      setRunning((running) => {
        if (!running) playAudio(position)
        return !running
      })
    }
  }, [position, playAudio])

  const onReset = useCallback(() => {
    setRunning(false)
    setPosition(0)
    setRestTime(table[0].duration * 1000)
  }, [table])

  const gotoAction = useCallback(
    (i) => {
      setRunning(false)
      setSavedAction({ ...table[i] })
      setRestTime(table[i].duration * 1000)
      setPosition(i)
    },
    [table]
  )

  return (
    <StyledApp>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <HelpMessage tableString={tableString} />
      <Header
        onRunning={onRunning}
        running={running}
        onReset={onReset}
        audio={audio}
        onAudio={switchAudio}
        // {...{ onRunning, running, onReset, audio, onAudio: switchAudio }}
      />
      <ActionStatus
        restTime={restTime}
        currentAction={savedAction.name}
        currentDuration={savedAction.duration}
        nextAction={table[nextPosition].name}
        nextDuration={table[nextPosition].duration}
      />
      <InputArea
        changeTable={setTable}
        gotoAction={gotoAction}
        currentAction={position}
      >
        {table}
      </InputArea>
    </StyledApp>
  )
}

export default App
