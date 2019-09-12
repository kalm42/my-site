import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import 'normalize.css'

import '../shared/styles.scss'
import Header from './header'
import ErrorBoundary from './ErrorBoundary'
import { Input, Label, SubmitButton, DarkAccent } from '../shared/styledComponents'

const Footer = styled.footer`
  padding: 1rem;
  background: var(--primary);
  margin-top: 1.45rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-gap: 20px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  a {
    color: #000;
  }
`

const Wrapper = styled.div`
  min-height: calc(100vh);
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Layout = ({ children }) => (
  <ErrorBoundary>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Helmet>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
              <script
                src="https://assets.calendly.com/assets/external/widget.js"
                type="text/javascript"></script>
              <script type="text/javascript">
                Calendly.initBadgeWidget({ 
                  url: 'https://calendly.com/kylemelton', 
                  text: 'Schedule time with me', 
                  color: '#00a2ff', 
                  textColor: '#ffffff', 
                  branding: true 
                })
              </script>
            </link>
          </Helmet>
          {children}
          <Footer>
            <div>
              <h5>Contact Me</h5>
              <address>
                <a href="mailto:me@kalm42.com">me@kalm42.com</a>
                <br />
                <a href="tel:+208-357-9649">(208)357-9649</a>
                <br />
                2184 Channing Way # 417
                <br />
                Idaho Falls, ID 83404
              </address>
              <p>© {new Date().getFullYear()} kalm42, Inc.</p>
            </div>
            <div>
              <h5>Customer Service</h5>
              <ul>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            <DarkAccent>
              <h5>Subscribe to my email list</h5>
              <form
                name="subscribe"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <Label htmlFor="emailNetlify">
                  Email Address
                  <Input type="text" name="email" id="emailNetlify" placeholder="Your email" />
                </Label>
                <SubmitButton type="submit" value="Subscribe" />
              </form>
            </DarkAccent>
          </Footer>
        </Wrapper>
      )}
    />
  </ErrorBoundary>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
