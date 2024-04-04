import React from 'react'
import { YMInitializer } from 'react-yandex-metrika'
import ReactGA from 'react-ga'


declare global {
  interface Window {
    GA_INITIALIZED: any
  }
}
/* eslint-disable no-console */
const Analytics: React.FC = () => {  
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      console.info('GA init')
      ReactGA.initialize('UA-140999737-1')
      window.GA_INITIALIZED = true
    }
    console.info(`Logging pageview for ${window.location.pathname}`)
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  })

  return (
  <YMInitializer
    accounts={[ 53836567 ]}
    options={{
      webvisor: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
    }}
  />
  )
}

export default Analytics
