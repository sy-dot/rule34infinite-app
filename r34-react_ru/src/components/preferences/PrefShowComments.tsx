import React, { useCallback } from 'react'
import usePreference from '../../hooks/usePreference'
import Setting from '../designsystem/Setting'
import Toggle from '../designsystem/Toggle'

export default function PrefShowComments() {
  const [showComments, setShowComments] = usePreference('showComments')
  const toggleShowComments = useCallback(() => setShowComments(!showComments), [showComments, setShowComments])

  return (
    <Setting
      title='Показать комментарии'
      description="Если у поста есть комментарии, они будут отображаться в деталях. Для того чтобы эта настройка работала, необходимо, чтобы была включена опция 'Показать детали поста'."
    >
      <Toggle value={showComments} onToggle={toggleShowComments} />
    </Setting>
  )
}
