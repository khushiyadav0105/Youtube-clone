import React from 'react'
import PropTypes from 'prop-types'  // Import PropTypes
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed' 

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className= {`container ${sidebar?"":'large-container'}`}>
        <Feed/>
      </div>
    </>
  )
}

// ✅ Define PropTypes to validate props
Home.propTypes = {
  sidebar: PropTypes.bool.isRequired,  // Ensure 'sidebar' is a boolean and required
}

export default Home
