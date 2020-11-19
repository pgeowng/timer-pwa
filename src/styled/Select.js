import styled from 'styled-components'

export default styled.select`
  background-color: #000;
  margin: 3px;
  border: 1px solid #eee;
  color: #eee;
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
