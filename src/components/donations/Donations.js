import React from 'react'
import { Box, Text, Grid, Button, Heading, Paragraph } from 'grommet'
import { Facebook, Send, Mail, Github } from 'grommet-icons'
import Link from '../Link'

import  { Helmet } from 'react-helmet'

import intl from '../../intl'

import { useLocale } from '../../lib'

import avatar from '../Team/default.jpg'

const SocialAccounts = ({ facebook, telegram, github, email }) => {
  return (
    <Box direction='row' gap='xsmall'>
      {facebook && <Button href={`https://m.me/${facebook}`} plain><Facebook color='control' size='small' /></Button>}
      {telegram && <Button href={`https://t.me/${telegram}`} plain><Send color='control' size='small' /></Button>}
      {github && <Button href={`https://github.com/${github}`} plain><Github color='control' size='small' /></Button>}
      {email && <Button href={`mailto:${email}`} plain><Mail color='control' size='small' /></Button>}
    </Box>
  )
}

const TeamMember = ({ name, description, facebook, telegram, github, email, avatar }) => {
  return (
    <Box align='center' justify='center' style={{ maxHeight: '150px' }}>
      <Box round='xlarge' height='xsmall' width='xsmall' background={avatar ? { image: `url(${avatar})` } : 'dark-1'} />
      <Box direction='row' gap='xsmall'><Text size='small'>{name}</Text><SocialAccounts facebook={facebook} telegram={telegram} github={github} email={email} /></Box>
    </Box>
  )
}

export default ({ team }) => {
  const locale = useLocale()
  const goldMembers = {
    en: [
      { name: 'Join with $108+ monthly support plan', avatar }
    ],
    ru: [
      { name: 'Присоединиться, жертвуя $108+ ежемесячно', avatar }
    ]
  }
  const silverMembers = {
    en: [
      { name: 'Join with $64+ monthly support plan', avatar }
    ],
    ru: [
      { name: 'Присоединиться, жертвуя $64+ ежемесячно', avatar }
    ]
  }
  const bronzeMembers = {
    en: [
      { name: 'Join with $32+ monthly support plan', avatar }
    ],
    ru: [
      { name: 'Присоединиться, жертвуя $32+ ежемесячно', avatar }
    ]
  }
  return (
    <Box fill pad='small' align='center'>
      <Helmet>
        <script src='https://gumroad.com/js/gumroad.js' />
      </Helmet>
      <Heading level={2}>{intl.donations_support_mayapur_live[locale]}</Heading>
      <Box width={{ max: 'large' }}><Paragraph fill>{intl.donations_description[locale]}</Paragraph></Box>
      <Box direction='row' gap='small'>
        <Button href='https://gumroad.com/l/support-mayapur-live' primary label={intl.donations_supporter_button[locale]} />
        <Button secondary href='https://gumroad.com/l/mayapur-live-donation' label={intl.donations_one_time_button[locale]} />
      </Box>
      <Heading level={3}>{intl.donations_gold_supporters[locale]}</Heading>
      <Grid fill rows='1fr' columns={{ size: 'small', count: 'fit' }}>
        {goldMembers[locale].map(member => (
          <TeamMember key={member.name} {...member} />
        ))}
      </Grid>
      <Heading level={3}>{intl.donations_silver_supporters[locale]}</Heading>
      <Grid fill rows='1fr' columns={{ size: 'small', count: 'fit' }}>
        {silverMembers[locale].map(member => (
          <TeamMember key={member.name} {...member} />
        ))}
      </Grid>
      <Heading level={3}>{intl.donations_bronze_supporters[locale]}</Heading>
      <Grid fill rows='1fr' columns={{ size: 'small', count: 'fit' }}>
        {bronzeMembers[locale].map(member => (
          <TeamMember key={member.name} {...member} />
        ))}
      </Grid>
    </Box>
  )
}
