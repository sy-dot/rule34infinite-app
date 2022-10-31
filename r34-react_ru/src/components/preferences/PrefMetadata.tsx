import React, { useCallback } from 'react'
import usePreference from '../../hooks/usePreference'
import Setting from '../designsystem/Setting'
import Toggle from '../designsystem/Toggle'

export default function PrefMetadata() {
  const [showMetadata, setShowMetadata] = usePreference('showMetadata')
  const toggleShowMetadata = useCallback(() => setShowMetadata(!showMetadata), [showMetadata, setShowMetadata])

  return (
    <Setting
      title='Показать метаданные поста'
      description="Посты отображают больше данных в своих деталях. В основном для целей разработки, но, возможно, кому-то это будет полезно."
    >
      <Toggle value={showMetadata} onToggle={toggleShowMetadata} />
    </Setting>
  )
}
