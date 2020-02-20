import React from 'react'
import { Box } from 'grommet'
import { Tag } from 'grommet-icons'

import Link from '../Link'

export default ({ tags }) => {
  return (
    <Box fill='horizontal' align='center' justify='center' direction='row' gap='small' wrap overflow={{ horizontal: 'scroll' }}>
      <Link to='/tags'><Box pad='small' align='center' justify='center' fill><Tag color='control' /></Box></Link>
      {tags.map(tag => (
        <Link key={tag.value} to={tag.path}>
          <Box fill align='center' justify='center'>
            {tag.value}
          </Box>
        </Link>
      ))}
    </Box>
  )
}
