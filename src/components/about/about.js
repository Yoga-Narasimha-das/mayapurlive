import React from 'react'
import { Box, Markdown } from 'grommet'
import { useLocale } from '../../lib'

const ru = `
  ### О Mayapur Live

  **Mayapur Live** создается совместными усилиями:

  - [Руссккого департамента информации и коммуникации Маяпура](http://mayapuronline.ru)

  - студии разработки [108.systems](https://108.systems)

  - [пожертвованиями преданных со всего мира](/ru/donations)
`
const en = `
  ### About Mayapur Live

  **Mayapur Live** is created due to combined efforts of

  - [Mayapur Russian Department of Information & Communication](http://mayapuronline.ru)

  - development studio [108.systems](https://108.systems)

  - [kind contributions of devotees worldwide](/en/donations)

`

const content = { en, ru }

export default ({ team }) => {
  const locale = useLocale()
  return (
    <Box fill flex justify='center' align='center' pad='small'>
      <Markdown>{content[locale]}</Markdown>
    </Box>
  )
}
