import React from 'react'
import Setting from '../designsystem/Setting'
import SignIn from '../widgets/SignIn'

export default function PrefAccount() {
  return (
    <Setting
      title='Аккаунт'
      description='Войдите, чтобы сохранить свои настройки на разных устройствах. Некоторые настройки требуют входа в систему, поскольку используют ваши сохраненные данные.'
    >
      <SignIn />
    </Setting>
  )
}
