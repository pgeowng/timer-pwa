import React from 'react'
import styled from 'styled-components'

const MainInfo = styled.h1`
  font-family: monospace;
  margin: 0;
`

const StyledActionStatus = styled.div`
  margin: 20px 0;
`

const SecondHeader = styled.h2`
  margin: 20px 0 0 0;
  font-size: 1.2rem;
`

const SecondText = styled.div``

const ActionStatus = React.memo(
  ({ currentAction, currentDuration, nextAction, nextDuration, restTime }) => (
    <StyledActionStatus>
      <MainInfo>rest time: {(restTime / 1000).toFixed(0)}s</MainInfo>
      <MainInfo>
        {currentDuration}s - {currentAction}
      </MainInfo>
      <SecondHeader>next</SecondHeader>
      <SecondText>
        {nextDuration}s - {nextAction}
      </SecondText>
    </StyledActionStatus>
  )
)

export default ActionStatus
