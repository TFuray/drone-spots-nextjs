'use client'

import { Navbar } from 'flowbite-react'

export default function DefaultNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <h1 className='prose'>Drone Map</h1>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href='/'>
          <p>Home</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
