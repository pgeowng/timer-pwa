import React from 'react'

import styled from 'styled-components'
import Button from '../styled/Button'

const ButtonRow = styled.nav`
  display: flex;
  align-items: baseline;
  & > * {
    flex-basis: 150px;
  }

  @media (max-width: 600px) {
    & > * {
      font-size: 1em;
      flex-grow: 1;
      flex-basis: 0;
    }
  }
`

const Header = React.memo(({ running, onRunning, onReset, audio, onAudio }) => (
  <header>
    <h1>
      Timeboxing timer <span>- {running ? 'running' : 'stopped'}</span>
    </h1>
    <ButtonRow>
      <Button onClick={onRunning}>{running ? 'stop' : 'run'}</Button>
      <Button onClick={onReset}>reset timer</Button>
      <Button onClick={onAudio}>
        {audio ? 'audio playing' : 'audio muted'}
      </Button>
    </ButtonRow>
  </header>
))
export default Header
