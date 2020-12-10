import { createNowCompleteHandler } from 'netlify-cms-oauth-provider-node'

// export default createNowCompleteHandler({}, { useEnv: true })
export default createNowCompleteHandler({
  completeUrl: `${process.env.GATSBY_ORIGIN}/api/complete`,
  oauthClientID: process.env.GATSBY_GITHUB_OAUTH_CLIENT_ID,
  oauthClientSecret: process.env.GATSBY_GITHUB_OAUTH_CLIENT_SECRET,
  oauthProvider: process.env.GATSBY_OAUTH_PROVIDER,
  origin: process.env.GATSBY_ORIGIN
})
