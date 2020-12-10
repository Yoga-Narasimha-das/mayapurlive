// import React from 'react'
import CMS from 'netlify-cms-app'

// import Post from '../components/posts/Post'

const isDev = process.env.NODE_ENV === 'development'
const siteUrl = window.location.origin
const githubBackend = {
  name: 'github',
  repo: 'mayapur-live/mayapurlive',
  branch: 'master',
  base_url: siteUrl,
  auth_endpoint: 'api/begin'
}
const backend = isDev
  ? {
    name: 'git-gateway'
  } : githubBackend

CMS.init({
  config: {
    site_url: siteUrl,
    logo_url: `${siteUrl}/icons/icon-144x144.png`,
    local_backend: isDev,
    publish_mode: isDev ? 'simple' : 'editorial_workflow',
    // backend: githubBackend
    backend
  }
})

CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    // return entry.get('data').set('title', 'new title')
    console.log('CMS.preSave', entry.toJS())
    return entry.get('data')
  }
})
console.log('HELLO FROM CMS.JS', process.env.GATSBY_GITHUB_OAUTH_CLIENT_ID, process.env.GATSBY_TEST_ENV)
// const postPreview = ({ entry }) => {
//     const post = entry.get('data').toJS()
//     console.log('post', post)
//     return <Post post={post} />
// }

// CMS.registerPreviewTemplate('posts', postPreview)
