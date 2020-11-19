import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  white-space: no;
`
const Ul = styled.ul`
  padding: 0 20px 0 25px;
`

const Link = styled.a`
  color: #eee;
  word-break: break-all;
`

export default React.memo(({ tableString }) => {
  const hashSection = window.location.href.lastIndexOf(window.location.hash)
  const prefixUrl = window.location.href.slice(0, hashSection)
  const url = prefixUrl + '#' + tableString

  return (
    <Container>
      <h2>How to use it</h2>
      <Ul>
        <li>Audio - by default muted</li>
        <li>run/stop button - resets timer on stop</li>
        <li>
          you can save your schedule as link - all information are stored in URL
        </li>
        <li>
          current share link:{' '}
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </Link>
        </li>
      </Ul>
    </Container>
  )
})
