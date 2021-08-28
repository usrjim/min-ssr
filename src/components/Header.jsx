import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
  <>
    <header>
      <div>
        Header Component
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/bookmarks">Bookmarks</Link></li>
      </ul>
    </header>
  </>
)
