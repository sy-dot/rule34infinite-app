import styled, { useTheme } from 'styled-components'
import { getVersionString } from '../../data/utils'
import useFirebaseAuthState from '../../hooks/useFirebaseAuthState'
import { usePageTitle } from '../../hooks/usePageTitle'
import { CodeBranchIcon } from '../../icons/FontAwesomeIcons'
import { flexRowWithGap } from '../../styled/mixins/layout'
import { DefaultPageColumn } from '../designsystem/DefaultPageColumn'
import { FlexColumn } from '../designsystem/FlexColumn'
import { HorizontalLine } from '../designsystem/Lines'
import { Faded } from '../designsystem/Text'
import TitledSurface from '../designsystem/TitledSurface'
import Header from '../features/Header'
import PrefAccount from '../preferences/PrefAccount'
import PrefAutoPlay from '../preferences/PrefAutoPlay'
// import PrefAutoscrollDelay from '../preferences/PrefAutoscrollDelay'
import PrefBackends from '../preferences/PrefBackends'
import PrefHideSeenPosts from '../preferences/PrefHideSeenPosts'
import PrefLoadOriginals from '../preferences/PrefLoadOriginals'
import PrefMetadata from '../preferences/PrefMetadata'
import PrefPreloadVideos from '../preferences/PrefPreloadVideos'
import PrefShowComments from '../preferences/PrefShowComments'
import PrefShowPostDetails from '../preferences/PrefShowPostDetails'
import PrefSupertags from '../preferences/PrefSupertags'
import PrefTagSuggestions from '../preferences/PrefTagSuggestions'
import PrefTheme from '../preferences/PrefTheme'
import FeatureDetection from '../widgets/FeatureDetection'
import ResetButton from '../widgets/ResetButton'
import ResetResultsButton from '../widgets/ResetResultsButton'
import ResetSeenPostsButton from '../widgets/ResetSeenPostsButton'

const VersionWrapper = styled.div`
  ${flexRowWithGap}
  flex-grow: 1;
  justify-content: center;
  min-height: 50px;
`

export default function Preferences() {
  const theme = useTheme()
  const versionString = getVersionString()
  const [isSignedIn] = useFirebaseAuthState()

  usePageTitle('Rule34 Infinite - Preferences')

  return (
    <FlexColumn>
      <Header />
      <DefaultPageColumn>
        <TitledSurface title='General'>
          <PrefPreloadVideos />
          <PrefLoadOriginals />
          <PrefTagSuggestions />
          <PrefShowPostDetails />
          <PrefShowComments />
        </TitledSurface>

        <TitledSurface title='Account'>
          <PrefAccount />
          <PrefTheme />
          {isSignedIn && (
            <>
              <PrefSupertags />
              <PrefHideSeenPosts />
            </>
          )}
        </TitledSurface>

        <TitledSurface title='Experimental'>
          <Faded>
            These features that are still under active development. They might change a lot in the future. Please report
            any bugs you find so I can fix them :)
          </Faded>
          <HorizontalLine />
          <PrefAutoPlay />
          {/* <PrefAutoscrollDelay /> */}
        </TitledSurface>
        <TitledSurface title='Developer'>
          <PrefMetadata />
          <PrefBackends />
          <FeatureDetection />
          <ResetResultsButton />
          <ResetSeenPostsButton />
          <ResetButton />
        </TitledSurface>

        <VersionWrapper>
          <CodeBranchIcon color={theme.colors.subduedText} />
          <Faded>{versionString}</Faded>
        </VersionWrapper>
      </DefaultPageColumn>
    </FlexColumn>
  )
}
