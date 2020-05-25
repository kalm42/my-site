import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import 'normalize.css'
import '../shared/styles.scss'
import Header from './header'
import ErrorBoundary from './ErrorBoundary'
import CalendlyComponent from './Calendly'

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

const Wrapper = styled.div``

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
                2184 Channing Way # 417
                <br />
                Idaho Falls, ID 83404
              </address>
              <p>© {new Date().getFullYear()} Kyle Melton</p>
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
