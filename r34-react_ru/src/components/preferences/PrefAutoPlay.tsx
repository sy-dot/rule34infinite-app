import React, { useCallback } from 'react'
import usePreference from '../../hooks/usePreference'
import Setting from '../designsystem/Setting'
import Toggle from '../designsystem/Toggle'

export default function PrefAutoPlay() {
  const [autoPlay, setAutoPlay] = usePreference('autoPlay')
  const toggleAutoPlay = useCallback(() => setAutoPlay(!autoPlay), [autoPlay, setAutoPlay])

  return (
    <Setting
      title='Автовоспроизведение'
      description='Видео запускается автоматически, как только становится видимым. При этом будет использоваться больше данных.'
    >
      <Toggle value={autoPlay} onToggle={toggleAutoPlay} />
    </Setting>
  )
}
