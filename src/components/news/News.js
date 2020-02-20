import React from 'react'
import { Box, ResponsiveContext, Tabs, Tab, Select } from 'grommet'

import { SizeMe } from 'react-sizeme'
import { Page, EmbeddedPost } from 'react-facebook'

import { useLocation, useLocale } from '../../lib'

import intl from '../../intl'

const Filters = ({ pages, page, isSmall }) => {
  const locale = useLocale()
  const { location, navigate } = useLocation()
  return (
    <Box fill='horizontal' align='center' justify='center' direction='row'>
      <Box pad='small' fill={isSmall ? 'horizontal' : null}>
        <Select
          placeholder={intl.map_select_category[locale]}
          plain={false}
          options={pages.map(p => p.title[locale])}
          value={page}
          onChange={({ option }) => navigate(`${location.pathname}?page=${option.replace(' ', '+')}`)}
        />
      </Box>
    </Box>
  )
}

const FacebookPagePlugin = ({ width, height, page }) => (
  <Page
    href={`https://www.facebook.com/${page}`}
    tabs='timeline'
    adaptContainerWidth={false}
    // adaptContainerWidth
    smallHeader
    hideCover
    width={width}
    height={height}
  />
)

const FacebookPost = ({ width, url }) => (
  <Box width={width} background='white'><EmbeddedPost href={url} width={width} /></Box>
)
const FacebookPage = ({ size, align, page }) => {
  return (
    <Box height={{ min: '100vh' }} flex fill align={align} justify='start'>
      {size.width && size.height ? <FacebookPagePlugin page={page} width={size.width} height={size.height} /> : null}
    </Box>
  )
}

const NewsGrid = ({ isSmall }) => {
  const posts = ['1395321110645867', '1391436441034334', '1386876858156959']
  return (
    <Box flex fill align='center' justify='center'>
      {posts.map(postId => (
        <Box key={postId} justify='center' align='center' fill='horizontal'>
          <FacebookPost width='500px' url={`https://www.facebook.com/sri.dham.mayapur/posts/${postId}`} />
        </Box>
      ))}
    </Box>
  )
}

const pages = [
  { title: { en: 'Information Department', ru: 'Отдел Информации' }, slug: { en: 'mayapur.live', ru: 'sri.dham.mayapur' } },
  { title: { en: 'Vedic Planetarium', ru: 'Ведический Планетарий' }, slug: { en: 'tovp.mayapur', ru: 'tovp.mayapur' } },
  { title: { en: 'Zero Waste', ru: 'Ноль Отходов' }, slug: { en: 'ZeroWasteMayapur', ru: 'ZeroWasteMayapur' } },
  { title: { en: 'Goshala', ru: 'Гошала' }, slug: { en: 'Srimayapurgoshalaoffical', ru: 'Srimayapurgoshalaoffical' } },
  { title: { en: 'Bhaktivedanta Academy', ru: 'Академия Бхактиведанты' }, slug: { en: 'ba.mayapur', ru: 'ba.mayapur' } }
]

const News = () => {
  const screen = React.useContext(ResponsiveContext)
  const { location } = useLocation()
  const locale = useLocale()
  const queryParams = new URLSearchParams(location.search)
  const isSmall = screen === 'small'
  const defaultPageByLang = pages[0]
  const pageTitle = queryParams.get('page') || defaultPageByLang[locale]
  console.log('page title', pageTitle)
  const page = pageTitle ? pages.filter(p => p.title[locale] === pageTitle)[0] : defaultPageByLang
  return (
    <Box fill flex>
      <Filters isSmall={isSmall} pages={pages} page={page.title[locale]} />
      <Box fill flex>
        <SizeMe monitorHeight>
          {({ size }) => {
            return (
              <FacebookPage page={page.slug[locale]} size={size} align='center' />
            )
          }}
        </SizeMe>
      </Box>
    </Box>
  )
}

export default News
