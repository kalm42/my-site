import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Label, Input, SubmitButton, DarkAccent, Textarea } from '../shared/styledComponents'

const ContentWrapper = styled.main`
  max-width: 700px;
  margin: 1.45em auto;
  @media screen and (max-width: 900px) {
    padding: 0 calc(5vw);
  }
`

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
        <DarkAccent>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <Label htmlFor="name">
              Your Name
              <Input type="text" name="name" id="name" placeholder="Your name" />
            </Label>
            <Label htmlFor="email">
              Your email address
              <Input type="text" name="email" id="email" placeholder="john@gmail.com" />
            </Label>
            <Label htmlFor="phoneNumber">
              Your phone number
              <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
            </Label>
            <Label htmlFor="message">
              Your message
              <Textarea name="message" cols="30" rows="10" id="message" placeholder="Type your message here." />
            </Label>
            <SubmitButton type="submit" value="Send" />
          </form>
        </DarkAccent>
      </ContentWrapper>
    </Layout>
  )
}

export default contact
