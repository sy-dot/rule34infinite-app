import React from 'react'
import styled from 'styled-components'
import {
  supportsAspectRatio,
  supportsFlexGap,
  supportsFullscreen,
  supportsGap,
  supportsLocalStorage,
  supportsNetworkInformationAPI,
  supportsObjectFit,
} from '../../data/browserUtils'
import { defaultSpacing } from '../../styled/mixins/gap'
import { flexColumnWithGap } from '../../styled/mixins/layout'
import { borderRadius } from '../../styled/mixins/theming'
import StatusImage from '../designsystem/StatusImage'
import { SmallTitle, Faded } from '../designsystem/Text'

const Wrapper = styled.div`
  ${flexColumnWithGap}
`

const FeatureList = styled.div`
  ${flexColumnWithGap}
  ${defaultSpacing}
  ${borderRadius}
  background: ${(props) => props.theme.colors.backgroundColor};
`

export default function FeatureDetection() {
  return (
    <Wrapper>
      <SmallTitle>Функции</SmallTitle>
      <Faded>Эта информация очень важна при исследовании проблем с версткой и браузером.</Faded>
      <FeatureList>
        <Faded>
          <StatusImage value={supportsGap} /> Поддержка grid-gap
        </Faded>
        <Faded>
          <StatusImage value={supportsFlexGap} /> Поддержка flex-gap
        </Faded>
        <Faded>
          <StatusImage value={supportsAspectRatio} /> Поддержка aspect-ratio
        </Faded>
        <Faded>
          <StatusImage value={supportsObjectFit} /> Поддержка object-fit
        </Faded>
        <Faded>
          <StatusImage value={supportsFullscreen} /> Поддержка fullscreen
        </Faded>
        <Faded>
          <StatusImage value={supportsNetworkInformationAPI} /> Поддержка advanced network info
        </Faded>
        <Faded>
          <StatusImage value={supportsLocalStorage} /> Поддержка localStorage
        </Faded>
      </FeatureList>
    </Wrapper>
  )
}
