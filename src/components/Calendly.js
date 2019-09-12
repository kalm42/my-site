// Thanks to this blog
// https://cleverbeagle.com/blog/articles/tutorial-how-to-load-third-party-scripts-dynamically-in-javascript
import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'

const loadCalendly = callback => {
  const exists = document.getElementById('calendly')

  if (!exists) {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.id = 'calendly'
    document.body.appendChild(script)

    script.onload = () => {
      if (callback) callback()
    }
  }

  if (exists && callback) callback()
}

const CalendlyComponent = () => {
  const [calendlyIsLoaded, setCalendlyIsLoaded] = useState(false)

  useEffect(() => {
    loadCalendly(() => {
      setCalendlyIsLoaded(true)
      // eslint-disable-next-line no-undef
      Calendly.initBadgeWidget({
        url: 'https://calendly.com/kylemelton',
        text: 'Schedule time with me',
        color: '#00a2ff',
        textColor: '#ffffff',
        branding: true,
      })
    })
  }, {})
  return (
    <Helmet>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
    </Helmet>
  )
}

export default CalendlyComponent
