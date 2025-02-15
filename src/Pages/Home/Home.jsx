import {useState} from 'react'
import PropTypes from 'prop-types' 
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed' 

const Home = ({ sidebar }) => {

  const [category,setCategory] = useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className= {`container ${sidebar?"":'large-container'}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

// ✅ Define PropTypes to validate props
Home.propTypes = {
  sidebar: PropTypes.bool.isRequired,  // Ensure 'sidebar' is a boolean and required
}

export default Home
