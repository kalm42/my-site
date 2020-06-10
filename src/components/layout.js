import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import ErrorBoundary from './ErrorBoundary'
import CalendlyComponent from './Calendly'
import 'normalize.css'
import '../shared/styles.scss'

const Footer = styled.footer``

const Wrapper = styled.div`
  max-width: 500px;
  width: 80vw;
  margin: 0 auto;
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
          <CalendlyComponent />
          {children}
          <Footer>
            <div>
              <h5>Contact Me</h5>
              <address>
                <a href="mailto:me@kalm42.com">me@kalm42.com</a>
                <br />
                <a href="tel:+208-357-9649">(208)357-9649</a>
                <br />
                2763 E Brooklyn St
                <br />
                Idaho Falls, ID 83401
              </address>
              <p>© {new Date().getFullYear()} kalm42, Inc.</p>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms and Conditions</Link>
                </li>
              </ul>
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
