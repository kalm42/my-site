// Thanks to this blog
// https://cleverbeagle.com/blog/articles/tutorial-how-to-load-third-party-scripts-dynamically-in-javascript
import React, { Component, useState, useEffect } from 'react'

const loadCalendly = callback => {
  const exists = document.getElementById('calendly')

  if (!exists) {
    const link = document.createElement('link')
    link.src = 'https://assets.calendly.com/assets/external/widget.css'
    document.body.appendChild(link)

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

const Calendly = () => {
  const [calendlyIsLoaded, setCalendlyIsLoaded] = useState(false)

  useEffect(() => {
    loadCalendly(() => {
      setCalendlyIsLoaded(true)
      Calendly.initBadgeWidget({
        url: 'https://calendly.com/kylemelton',
        text: 'Schedule time with me',
        color: '#00a2ff',
        textColor: '#ffffff',
        branding: true,
      })
    })
  })
  return null
}

export default Calendly
