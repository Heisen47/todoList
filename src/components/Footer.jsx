import React from 'react'
import '../App.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDay = day.toString().padStart(2 , '0');
    const formattedMonth = month.toString().padStart(2,'0')

  return (
    <div className='FooterContainer'>
        <footer className="footer"> 
            Last updated on : {`${formattedDay}:${formattedMonth}:${year}`}   
        </footer>
    </div>
  )
}

export default Footer