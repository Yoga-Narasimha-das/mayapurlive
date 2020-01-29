import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Donations from '../components/donations/Donations'
import PageSEO from '../components/seo'

import intl from '../intl'

const TeamPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title={intl.footer_donate[locale]} lang={locale} />
      <Helmet>
        <script src='https://gumroad.com/js/gumroad.js' />
      </Helmet>
      <Donations />
    </Layout>
  )
}

export default TeamPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
