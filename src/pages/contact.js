import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ContentWrapper } from '../components/styles/shared'

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me" keywords={[`contact`, `web design`, `website`]} />
      <ContentWrapper>
        <h1>Contact Me</h1>
        <address>
          <a href="mailto:me@kalm42.com">me@kalm42.com</a>
          <br />
          <a href="tel:+208-357-9649">(208)357-9649</a>
          <br />
          2184 Channing Way # 417
          <br />
          Idaho Falls, ID 83404
        </address>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="text" name="name" placeholder="Your name" />
          <input type="text" name="email" placeholder="" />
          <input type="text" name="phoneNumber" placeholder="Phone Number" />
          <textarea name="message" id="" cols="30" rows="10" />
          <input type="submit" value="Send" />
        </form>
      </ContentWrapper>
    </Layout>
  )
}

export default contact
