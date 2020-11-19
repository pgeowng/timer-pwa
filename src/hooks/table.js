import { useState, useEffect, useCallback, useReducer } from 'react'

const tryParse = (str) => {
  let tokens = str.split(',')

  if (tokens[tokens.length - 1] === '') {
    tokens = tokens.slice(0, -1)
  }

  const result = []

  for (let i = 0; i < tokens.length; i++) {
    const num = parseFloat(tokens[i])
    if (!(isFinite(num) && num >= 0)) {
      return [`${i} item, expected finite >= 0 float, got ${tokens[i]}`]
    }

    let name = ''

    if (++i < tokens.length) {
      try {
        name = decodeURIComponent(tokens[i])
      } catch (e) {
        return [`${i} item, decodeURIComponent error ${e}, got ${tokens[i]}`]
      }
    }

    result.push({
      duration: num,
      name: name,
    })
  }

  return [null, result]
}

const stringify = (table) => {
  let str = ''
  for (let i = 0; i < table.length; i++) {
    str += table[i].duration + ',' + table[i].name + ','
  }

  if (str.slice(-2) === ',,') str = str.slice(0, -1)
  return str
}

const reducer = (state, action) => {
  let { idx, field, value, to } = action
  switch (action.type) {
    case 'add':
      return [...state, { name: 'new action', duration: 60 }]

    case 'remove':
      // let { idx } = action
      if (state.length === 1) return state
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case 'edit':
      // let { idx, field, value } = action
      if (field === 'duration') {
        if (value === '') value = 0
        value = parseInt(value)
        if (isNaN(value)) return state
        if (value < 0) return state
      }
      return [
        ...state.slice(0, idx),
        { ...state[idx], [field]: value },
        ...state.slice(idx + 1),
      ]

    case 'move':
      const min = Math.min(idx, to)
      const max = Math.max(idx, to)
      // console.log('move', min, max)
      if (min === max) return state
      const result = state.slice()
      result[idx] = state[to]
      result[to] = state[idx]
      return result

    case 'set':
      return value

    default:
      return state
  }
}

const useTable = (defaultTable) => {
  const [error, setError] = useState(null)
  const [table, setTable] = useReducer(reducer, defaultTable)
  const [tableString, setLink] = useState(() => stringify(defaultTable))

  const loadHash = useCallback(() => {
    let hash = window.location.hash
    if (hash[0] === '#') hash = hash.slice(1)
    if (hash.length === 0) return

    const [err, result] = tryParse(hash)
    if (err) return setError(err)

    setError(null)
    setTable({ type: 'set', value: result })
    setLink(stringify(result))
  }, [])

  // listen for changes but not change
  useEffect(() => {
    if (window.location.hash.length > 2) {
      loadHash()
    }
    window.addEventListener('hashchange', () => {
      loadHash()
    })
  }, [loadHash])

  useEffect(() => {
    setLink(stringify(table))
  }, [table])

  return { table, setTable, error, tableString }
}

export default useTable
