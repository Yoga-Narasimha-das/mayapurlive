import React from 'react'

import { FacebookProvider } from 'react-facebook'
import { createGlobalStyle } from 'styled-components'
import { Grommet } from 'grommet'
import { dark } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

// import { StateProvider, store } from './src/lib/store'
import { useLocale } from './src/lib'
import { PageContextProvider } from './src/lib/PageContext'

import Chat from './src/components/Chat'

const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    box-shadow: none;
  }
  .pigeon-map-overlay {
    z-index: 1000;
  }
  .header-autolink {
    fill: #FFCA58;
  }
`

const customTheme = deepMerge(dark, {
  global: {
    colors: {
      brand: 'control'
    },
    active: {
      background: {
        color: { dark: 'control' }
      }
    }
  },
  tab: {
    color: 'control',
    active: {
      color: 'text'
    },
    border: null
  }
})

const Wrapper = ({ children }) => {
  // const { state: { playlist } } = React.useContext(store)
  const locale = useLocale()
  const facebookAppId = '610493882762259' // FIXME: remove hardcode
  return (
    <FacebookProvider chatSupport wait appId={facebookAppId} language={`${locale}_${locale.toUpperCase()}`}>
      {children}
    </FacebookProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    // <StateProvider>
    <Wrapper>{element}</Wrapper>
    // </StateProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <Grommet full theme={customTheme}>
      <GlobalStyle />
      <PageContextProvider pageContext={props.pageContext}>
        {element}
      </PageContextProvider>
      <Chat />
    </Grommet>
  )
}
