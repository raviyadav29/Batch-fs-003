import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='container'>
      <div id="title">
        <h1>Geekster</h1>
      </div>
      <div id="menu">
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Course</a>
        <a href=''>Hire Talent</a>
      </div>
    </div>
  )
}

export default Header