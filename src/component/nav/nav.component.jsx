import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Popup } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import './nav.style.scss';

const Nav = () => (

  <nav className='nav'>
    <Link className='link' to='/b2buy'>
      <Popup
        trigger={<Button secondary>B2Buy</Button>}
        position="top right"
      >
        B2Buy.com was designed to cater to commercial buyers and sellers, with sales transactions starting in four figures and averaging between $15,000 and $20,000. It offered a new online payment service (FundsFlo) developed with American Express Co. that provided an online escrow service to protect buyers and sellers.
      </Popup>
    </Link>
    <Link className='link' to='/fedbid'>
      <Popup
        trigger={<Button secondary>FedBid</Button>}
        position="top center"
      >
        FedBid is an online marketplace for government agencies, schools and other public institutions to find deals through a reverse auction platform.
      </Popup>
    </Link>
    <Link className='link' to='/vao'>
      <Popup
        trigger={<Button secondary>VAO</Button>}
        position="top center"
      >
        Virtual Acquisition Office™ (VAO) is a total workforce development solution, providing a common platform to facilitate expanded knowledge and productivity.
      </Popup>
    </Link>
  </nav>

)

export default Nav;