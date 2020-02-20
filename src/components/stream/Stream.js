import React from 'react'
import { Box, ResponsiveContext, Select } from 'grommet'

import ResponsiveIframe from '../ResponsiveIframe'

import { useLocation, useLocale } from '../../lib'

import intl from '../../intl'

const Filters = ({ channels, channel, isSmall }) => {
  const locale = useLocale()
  const { location, navigate } = useLocation()
  return (
    <Box fill='horizontal' align='center' justify='center' direction='row'>
      <Box pad='small' fill={isSmall ? 'horizontal' : null}>
        <Select
          placeholder={intl.map_select_category[locale]}
          plain={false}
          options={channels.map(p => p.title[locale])}
          value={channel}
          onChange={({ option }) => navigate(`${location.pathname}?channel=${option.replace(/ /g, '+')}`)}
        />
      </Box>
    </Box>
  )
}

const channels = [
  { title: { en: 'Radha Madhava Temple', ru: 'Храм Радха Мадхавы' }, slug: { en: 'MayapurTV/MayapurTVHD', ru: 'MayapurTV/MayapurTVHD' } },
  { title: { en: 'Shravana Utsav 2020', ru: 'Шравана Утсав 2020' }, slug: { en: 'MayapurTV/Sravana_Utsav_2020', ru: 'MayapurTV/Sravana_Utsav_2020' } }
]

export default ({ events }) => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  const { location } = useLocation()
  const locale = useLocale()
  const queryParams = new URLSearchParams(location.search)
  const defaultChannelByLang = channels[0]
  const channelTitle = queryParams.get('channel') || defaultChannelByLang[locale]
  console.log('page title', channelTitle)
  const channel = channelTitle ? channels.filter(c => c.title[locale] === channelTitle)[0] : defaultChannelByLang
  const src = `https://www.mayapur.tv/iframe/playerplus/index.php?stream=${channel.slug[locale]}`
  return (
    <Box flex>
      <Filters isSmall={isSmall} channels={channels} channel={channel.title[locale]} />
      <Box flex align='center' justify='center'>
        <Box width={isSmall ? '100%' : '89%'}><ResponsiveIframe src={src} /></Box>
      </Box>
    </Box>
  )
}
