import React from 'react'
import { Box, Anchor, Text, ResponsiveContext, Button } from 'grommet'
import { Facebook, Instagram, Mail, Favorite, Github } from 'grommet-icons'

import Link from './Link'
import { useLocale } from '../lib'
import intl from '../intl'

const pageByLang = {
  en: 'mayapur.live',
  ru: 'sri.dham.mayapur'
}

const socialAccounts = lang => ({ // FIXME: remove hardcode
  email: 'haribol@mayapur.live',
  facebook: `https://facebook.com/${pageByLang[lang]}`,
  instagram: 'https://instagram.com/sri_dham_mayapur',
  github: 'https://github.com/mayapur-live/mayapurlive'
})

const Footer = () => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  const size = isSmall ? 'small' : 'medium'
  const locale = useLocale()
  const { email, facebook, instagram, github } = socialAccounts(locale)
  return (
    <Box as='footer' fill='horizontal' direction={isSmall ? 'column' : 'row'} align='center' justify='center' background='black' pad='small' gap='small'>
      <Box fill='horizontal' direction='row' align='center' justify='center' background='black'>
        <Box align='center' justify='center' basis='1/4'>
          <Anchor href={`mailto:${email}`} target='_blank'><Box align='center' justify='center'><Mail color='control' /></Box></Anchor>
        </Box>
        <Box align='center' justify='center' basis='1/4'>
          <Anchor href={facebook} rel='noopener' target='_blank'><Box align='center' justify='center'><Facebook color='control' /></Box></Anchor>
        </Box>
        <Box align='center' justify='center' basis='1/4'>
          <Anchor href={instagram} rel='noopener' target='_blank'><Box align='center' justify='center'><Instagram color='control' /></Box></Anchor>
        </Box>
        <Box align='center' justify='center' basis='1/4'>
          <Anchor href={github} rel='noopener' target='_blank'><Box align='center' justify='center'><Github color='control' /></Box></Anchor>
        </Box>
      </Box>
      <Box fill='horizontal' direction='row' gap='xsmall' align='center' justify='center'>
        <Text size={size}>Mayapur Live © 2019-2020</Text>
      </Box>
      <Box fill='horizontal' align='center' justify='between' direction='row' gap='small'>
        <Text size={size}><Link to='/team'>{intl.footer_project_team[locale]}</Link></Text>
        {/* <Text size={size}><Favorite size='small' color='status-error' /> <Link to='/donations'>{intl.footer_donate[locale]}</Link></Text> */}
        {/* <Text size={size}><Link to='/donations'>{intl.footer_donate[locale]}</Link></Text> */}
        <Button primary icon={<Favorite size='small' />} href={`/${locale}/donations`} label={intl.footer_donate[locale]} color='status-error' />
        {/* <Button primary icon={<Box animation='pulse'><Favorite size='small' /></Box>} href={`/${locale}/donations`} color='status-error'/> */}
        <Text size={size}>{intl.footer_developed_by[locale]} <Anchor href='https://108.systems' rel='noopener' target='_blank'>108.systems</Anchor></Text>
      </Box>
    </Box>
  )
}

export default Footer
