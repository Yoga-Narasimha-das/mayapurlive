import React from 'react'

export const PageContext = React.createContext({})

export const PageContextProvider = ({ pageContext, children }) => {
  return <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
}

export const usePageContext = () => React.useContext(PageContext)
