import React from 'react'

 const  Footer = () => {
    const year=new Date();
  return (
    <div>Footer &copy;{year.getFullYear}</div>
  )
}
export default Footer
