import React from 'react'
import { Link } from 'docz'
import logo from './logo.svg';

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="JSON Forms" />
    </Link>
  )
}