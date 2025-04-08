import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Kaizen</title>
        <meta property="og:title" content="Page - Kaizen" />
      </Helmet>
    </div>
  )
}

export default Page
