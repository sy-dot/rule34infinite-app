import React, { useCallback } from 'react'
import usePreference from '../../hooks/usePreference'
import Setting from '../designsystem/Setting'
import Toggle from '../designsystem/Toggle'

export default function PrefPreloadVideos() {
  const [preloadVideos, setPreloadVideos] = usePreference('preloadVideos')
  const togglePreloadVideos = useCallback(() => setPreloadVideos(!preloadVideos), [preloadVideos, setPreloadVideos])

  return (
    <Setting
      title='Предзагрузка анимаций'
      description='Начните загружать видео и gif-файлы сразу, а не после нажатия кнопки play. Это улучшит качество просмотра, но будет потреблять много данных. Используйте только при наличии WIFI.'
    >
      <Toggle value={preloadVideos} onToggle={togglePreloadVideos} />
    </Setting>
  )
}
