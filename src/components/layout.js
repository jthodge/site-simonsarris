import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
        <div
          style={{
            margin: `auto`,
            backgroundColor: 'gray',
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />


          <div
            style={{
              display: 'flex'
            }}
          >
            <ul
              style={{
                listStyleType: 'none',
                overflow: 'hidden',
              }}
            >
              <li><Link to="/photo">photo</Link></li>
              <li><Link to="/writing">writing</Link></li>
              {/* <li><Link to="/about">about</Link></li> */ }
            </ul>
          </div>

          <main>{children}</main>
          {/* Footer? */}
        </div>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
