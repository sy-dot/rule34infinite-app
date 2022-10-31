import React from 'react'
import usePreference from '../../hooks/usePreference'
import Setting from '../designsystem/Setting'
import { SmallNumberInput } from '../designsystem/SmallInput'

export default function PrefTagSuggestions() {
  const [tagSuggestionsCount, setTagSuggestionsCount] = usePreference('tagSuggestionsCount')

  return (
    <Setting
      title='Количество предложений по тегу'
      description='Управляет количеством тегов, отображаемых при поиске. Увеличьте этот параметр при поиске непопулярных тегов.'
    >
      <SmallNumberInput value={tagSuggestionsCount} onSubmit={setTagSuggestionsCount} min={3} max={200} step={1} />
    </Setting>
  )
}
