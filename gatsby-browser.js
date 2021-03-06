export { wrapRootElement, wrapPageElement } from './gatsby-utils'

/* global window, document */
const scrollTo = (id) => () => {
  const el = document.getElementById(id)
  if (el) {
    return el.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
  return false
}

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash && hash.startsWith('#')) {
    hash = decodeURIComponent(hash.split('#')[1])
    console.log('hash', hash)
    window.setTimeout(scrollTo(hash), 10)
  }
}
