import React from 'react'
import '../App.css'
// import GitHubIcon from '@mui/icons-material/GitHub';

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
        <footer className='code'>
          <span> You can get the code here - <a href="https://github.com/Heisen47/todoList" target='_blank' rel='noreferrer'>GitHub</a></span>
        </footer>
    </div>
  )
}

export default Footer