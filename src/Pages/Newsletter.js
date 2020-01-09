import React from 'react'
import NewsletterWrap from '../Containers/NewsletterWrap';
import Navbar from '../Components/Navbar';

const Newsletter = () => {
  return (
    <div>
      <Navbar type='newsletter' />
      <NewsletterWrap />
    </div>
  )
}

export default Newsletter
