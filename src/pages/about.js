import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import About from '../components/about/AboutPage'
import PageSEO from '../components/seo'

import intl from '../intl'

const AboutPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title={intl.support_project_title[locale]} lang={locale} />
      <About />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
