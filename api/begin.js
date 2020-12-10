import { createNowBeginHandler } from 'netlify-cms-oauth-provider-node'

// export default createNowBeginHandler({}, { useEnv: true })
export default createNowBeginHandler({
  completeUrl: `${process.env.GATSBY_ORIGIN}/api/complete`,
  oauthClientID: process.env.GATSBY_GITHUB_OAUTH_CLIENT_ID,
  oauthClientSecret: process.env.GATSBY_GITHUB_OAUTH_CLIENT_SECRET,
  oauthProvider: process.env.GATSBY_OAUTH_PROVIDER,
  origin: process.env.GATSBY_ORIGIN
})
