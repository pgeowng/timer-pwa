import React, { useCallback } from 'react'
import styled from 'styled-components'

import Button from '../styled/Button'
import Select from '../styled/Select'
import Input from '../styled/Input'

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  &:nth-child(even) {
    background: #222;
  }

  & {
    padding: 5px;
    box-sizing: border-box;

    ${(props) => props.current && 'background-color: #666 !important'}
  }

  @media (max-width: 600px) {
    & {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 10px;
    }

    & > input {
      order: -1;
      width: 100%;
      flex-basis: 100%;
      flex-grow: 1;
    }

    & > .item {
      flex-grow: 1;
      flex-basis: 0;
    }
  }
`

const InputArea = React.memo(
  ({ changeTable, children, gotoAction, currentAction }) => {
    const add = useCallback(() => changeTable({ type: 'add' }), [changeTable])

    const remove = useCallback(
      (idx) => () => changeTable({ type: 'remove', idx }),
      [changeTable]
    )

    const edit = useCallback(
      (idx) => (event) =>
        changeTable({
          type: 'edit',
          idx,
          field: event.target.name,
          value: event.target.value,
        }),
      [changeTable]
    )

    const changeIndex = useCallback(
      (idx) => (event) =>
        changeTable({ type: 'move', idx, to: parseInt(event.target.value) }),
      [changeTable]
    )

    return (
      <Ul>
        <Li>
          <Button onClick={add}>add action</Button>
        </Li>
        {children.map((e, i) => (
          <Li key={i} current={currentAction === i}>
            <Button className="item" onClick={remove(i)}>
              -
            </Button>
            <Select className="item" value={i} onChange={changeIndex(i)}>
              {children.map((_, idx) => (
                <option key={idx} value={idx}>
                  {idx + 1}
                </option>
              ))}
            </Select>
            <Input
              type="number"
              name="duration"
              onInput={edit(i)}
              value={e.duration}
            />
            <Input type="text" name="name" onInput={edit(i)} value={e.name} />
            <Button className="item" onClick={() => gotoAction(i)}>
              goto
            </Button>
          </Li>
        ))}
      </Ul>
    )
  }
)

export default InputArea
