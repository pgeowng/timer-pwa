import styled from 'styled-components'

export default styled.input`
  background-color: #000;
  margin: 3px;
  color: #eee;
  border: 1px solid #eee;
  font-size: 2rem;
  box-sizing: border-box;
  padding: 5px;

  &:focus {
    outline: 3px solid #eee;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`
