import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Createposts from './pages/Createposts'
import Feed from './pages/Feed'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<Createposts/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
