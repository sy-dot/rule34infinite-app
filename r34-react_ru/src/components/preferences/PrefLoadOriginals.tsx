import React, { useCallback } from 'react'
import usePreference from '../../hooks/usePreference'
import Setting from '../designsystem/Setting'
import Toggle from '../designsystem/Toggle'

export default function PrefLoadOriginals() {
  const [originals, setOriginals] = usePreference('originals')
  const toggleOriginals = useCallback(() => setOriginals(!originals), [originals, setOriginals])
  return (
    <Setting
      title='Загружать исходные размеры'
      description='Отображайте изображения и видео в исходном разрешении. Это потребует больше данных, но обеспечит более приятный экспириенс.'
    >
      <Toggle value={originals} onToggle={toggleOriginals} />
    </Setting>
  )
}
