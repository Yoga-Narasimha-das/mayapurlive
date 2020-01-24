import React from 'react'
import { Box } from 'grommet'

import Footer from './Footer'
import Header from './Header'
// import Chat from './Chat'

export default ({ children, showFooter = true, showChat = true }) => {
  return (
    <Box flex style={{ minHeight: '100vh' }}>
      <Box style={{ zIndex: 1, position: 'sticky', top: 0 }} fill='horizontal'><Header /></Box>
      <Box as='main' flex>
        {children}
      </Box>
      {showFooter && <Footer />}
      {/* {showChat && <Chat />} */}
    </Box>
  )
}
