import React from 'react'
import { Box, ResponsiveContext, Tabs, Tab, Grid } from 'grommet'
import { useLocale } from '../../lib'

const NewsGrid = ({ posts = [], category }) => {
  posts = [
    { id: 1, title: 'PHP Developer', category: 'jobs' },
    { id: 2, title: 'Room for rent, 1000 rs/day', category: 'rent' }
  ]
  return (
    <Box pad='small'>
      <Grid>
        {posts.filter(p => category ? p.category === category : true).map(post => (
          <Box key={post.id} height={{ min: 'xxsmall', max: 'xxsmall' }} border={{ side: 'bottom' }}>
            <Box fill justify='center'>{post.title}</Box>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

const News = () => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  const locale = useLocale()
  return (
    <Box fill flex>
      {/* <Tabs flex>
        <Tab title={locale === 'en' ? 'Feed' : 'Лента'}>
          <NewsGrid isSmall={isSmall} />
        </Tab>
        <Tab title={locale === 'en' ? 'Rent' : 'Аренда'}>
          <NewsGrid isSmall={isSmall} category='rent' />
        </Tab>
        <Tab title={locale === 'en' ? 'Jobs' : 'Работа'}>
          <NewsGrid isSmall={isSmall} category='jobs' />
        </Tab>
      </Tabs> */}
      <iframe src='http://localhost:3000/embed' style={{ height: '100%', width: '100%', flex: '1 1 auto' }} frameBorder='0' />
    </Box>
  )
}

export default News
