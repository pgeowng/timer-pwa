import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #d83c3499;

  border: 2px solid #fff4;
  padding: 10px 5px;
  font-size: 1.1rem;
`

const ErrorMessage = ({ children }) => {
  return <Container>{children}</Container>
}

export default ErrorMessage
