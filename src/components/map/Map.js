import React from 'react'
import { Box, ResponsiveContext, Select } from 'grommet'
import Posts from '../posts/Posts'
import Map from './MapContainer'
// import Map from './MapContainerRefactoring'

import { useLocation, useLocale } from '../../lib'

import intl from '../../intl'

const Filters = ({ categories, category, isSmall }) => {
  const locale = useLocale()
  const { location, navigate } = useLocation()
  return (
    <Box fill='horizontal' align='center' justify='center' direction='row'>
      <Box pad='small' fill={isSmall ? 'horizontal' : null}>
        <Select
          placeholder={intl.map_select_category[locale]}
          plain={false}
          options={categories.map(category => category.title)}
          value={category}
          onChange={({ option }) => navigate(`${location.pathname}?category=${option.replace(' ', '+')}`)}
        />
      </Box>
    </Box>
  )
}

export default ({ posts, categories }) => {
  const screen = React.useContext(ResponsiveContext)
  const { location } = useLocation()
  const locale = useLocale()
  const queryParams = new URLSearchParams(location.search)
  const isSmall = screen === 'small'
  const allPlaces = posts.filter(post => post.location)
  const defaultCategoryByLang = { en: 'ISKCON Mayapur', ru: 'ИСККОН Маяпур' }
  const categoryTitle = queryParams.get('category') || defaultCategoryByLang[locale]
  const places = categoryTitle ? allPlaces.filter(place => place.category.title === categoryTitle) : allPlaces
  return (
    <Box flex>
      <Filters isSmall={isSmall} categories={categories} category={categoryTitle} />
      <Box flex direction='row'>
        {!isSmall && <Box overflow='scroll' height={{ max: '100vh' }} pad={{ top: 'xsmall' }}><Posts posts={places} /></Box>}
        <Box flex background='brand'><Map places={places} /></Box>
      </Box>
    </Box>
  )
}
