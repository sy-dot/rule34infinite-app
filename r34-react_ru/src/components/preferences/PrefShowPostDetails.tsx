import React, { useCallback } from 'react'
import usePreference from '../../hooks/usePreference'
import Setting from '../designsystem/Setting'
import Toggle from '../designsystem/Toggle'

export default function PrefShowPostDetails() {
  const [showPostDetails, setShowPostDetails] = usePreference('showPostDetails')
  const toggleShowPostDetails = useCallback(
    () => setShowPostDetails(!showPostDetails),
    [showPostDetails, setShowPostDetails]
  )

  return (
    <Setting
      title='Показать детали поста'
      description='Если включено, при нажатии на сообщение отображаются дополнительные сведения о нем. К ним относятся теги, рейтинг, лайки, артист и тд.'
    >
      <Toggle value={showPostDetails} onToggle={toggleShowPostDetails} />
    </Setting>
  )
}
