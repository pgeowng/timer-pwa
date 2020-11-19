import { useState, useCallback, useEffect } from 'react'

const urls = ['audio/time-is-now.mp3', 'audio/point-blank.mp3']

export const useAudio = () => {
  // const [loading, setLoading] = useState(true)
  const [audioEl, setAudioEl] = useState([])
  const [working, setWorking] = useState(false)
  const [error, setError] = useState(null)
  const size = audioEl.length

  // console.log('audio', working)

  useEffect(() => {
    setAudioEl(urls.map((e) => new Audio(e)))
  }, [])

  const switchAudio = useCallback(() => {
    setWorking((working) => {
      if (working) setError(null)
      return !working
    })
  }, [])

  const playAudio = useCallback(
    async (idx) => {
      if (working && size > 0) {
        idx = (size + idx) % audioEl.length

        if (audioEl[idx].readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          if (audioEl[idx] == null) {
            setError(`audioEl[${idx}] is null`)
            return
          }
          audioEl[idx].currentTime = 0
          try {
            await audioEl[idx].play()
          } catch (e) {
            setError(`audioEl[${idx}] : ${e}`)
          }
        }
      }
    },
    [audioEl, size, working]
  )

  return { audio: working, switchAudio, playAudio, audioError: error }
}
