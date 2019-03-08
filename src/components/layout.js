import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import ErrorBoundary from './ErrorBoundary'
import './global.css'

const Footer = styled.footer`
  padding: 1rem;
  background: #fff41e;
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
            <div>
              <h5>Subscribe to my email list</h5>
              <form
                name="subscribe"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <input type="text" name="email" placeholder="Your email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
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
