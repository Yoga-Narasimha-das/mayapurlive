import { createNowBeginHandler } from 'netlify-cms-oauth-provider-node'

const baseUrl = process.env.GATSBY_ORIGIN.startsWith('http') ? process.env.GATSBY_ORIGIN : `https://${process.env.GATSBY_ORIGIN}`
// export default createNowBeginHandler({}, { useEnv: true })
export default createNowBeginHandler({
  completeUrl: `${baseUrl}/api/complete`,
  oauthClientID: process.env.GATSBY_GITHUB_OAUTH_CLIENT_ID,
  oauthClientSecret: process.env.GATSBY_GITHUB_OAUTH_CLIENT_SECRET,
  oauthProvider: process.env.GATSBY_OAUTH_PROVIDER,
  origin: baseUrl
})
