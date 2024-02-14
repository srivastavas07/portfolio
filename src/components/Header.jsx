/* eslint-disable */
import React, { useState } from 'react';
import { UilGithub, UilFileDownload, UilLink, UilInstagramAlt, UilLinkedin, UilEllipsisH, UilTimes } from '@iconscout/react-unicons';

function Header() {
  const [toggle, setToggle] = useState(true);
  const ulStyle = {
    margin: '5px 0 30px 0',
    background: 'transparent',
    padding: '8px 10px 8px 10px'
  };
  return (
    <header className='flex justify-center items-center text w-full fixed top-0 py-1 left-0 bg-primary z-10'>
      <div className='flex items-center justify-between xl:w-[70%] lg:w-[85%] md:w-[85%] sm:w-[80%] w-[87%]'>
        <div className='text relative'><span className='font-bold owner'>
          <h4 className='p-0 m-0'>Kunal</h4>
          <h4 className='p-0 m-0'>Chandra.</h4><h6 className='trademark'>TM</h6></span>
        </div>

        <div className={`lg:flex hidden items-center`}>
          <nav className='site-sections mr-5'>
            <ul className='flex justify-normal items-center'>
              <Links text="Home" links="home" />
              <Links text="About" links="about" />
              <Links text="Skills" links="skills" />
              <Links text="Projects" links="works" />

            </ul>
          </nav>

          <div className='social-links flex items-center m-2'>
            <a className="links-padding" title = "GitHUB" href='https://github.com/srivastavas07'><UilGithub className="icons" /></a>
            <a className="links-padding" title = "Instagram" href='https://www.instagram.com/chandra07ks/'><UilInstagramAlt className="icons" /></a>
            <a className="links-padding" title = "LinkedIn" href='https://www.linkedin.com/in/chandra07ks/'><UilLinkedin className="icons" /></a>
            <a className="links-padding" title = "Resume" href='https://flowcv.com/resume/w5oguu2nbe'><UilFileDownload className="icons" /></a>

          </div>
        </div>
        <button className='connect-button hero-btn px-3 lg:block hidden py-2'><a href="mailto:srivastavasks156@gmail.com"><span>Let's Connect!</span></a></button>
        {/* <button className='day-night-toggle'><UilMoon size="20px"/></button> */}
        {/* Dark Mode button but i want the site to be in dark mode only so not implementing this functionality */}
        <div className='z-20 lg:hidden sm:block'>
        <button className='py-3 bg-transparent outline-none text-white' onClick={() => { setToggle(!toggle) }}>{toggle ? <UilEllipsisH /> : <UilTimes />}</button>
      </div>
      </div>


      {/* for mobile screen navigation links with different design */}

      <div
      className={` lg:hidden flex-col items-center justify-start absolute top-0 p-10 right-[50%] translate-x-[50%] w-[100vw] bg-primary ${toggle? "hidden":"visible"}`}>
        <nav className='site-sections mr-5'>
          <ul className='flex-col justify-between items-center'>
            <Links style={ulStyle} text="Home" links="home" />
            <Links style={ulStyle} text="About" links="about" />
            <Links style={ulStyle} text="Skills" links="skills" />
            <Links style={ulStyle} text="Projects" links="works" />

          </ul>
        </nav>

        <div className='social-links flex items-center mt-10'>
            <a className="links-padding" title = "GitHUB" href='https://github.com/srivastavas07'><UilGithub className="icons" /></a>
            <a className="links-padding" title = "Instagram" href='https://www.instagram.com/chandra07ks/'><UilInstagramAlt className="icons" /></a>
            <a className="links-padding" title = "LinkedIn" href='https://www.linkedin.com/in/chandra07ks/'><UilLinkedin className="icons" /></a>
            <a className="links-padding" title = "Resume" href='https://flowcv.com/resume/w5oguu2nbe'><UilFileDownload className="icons" /></a>
        </div>
        <button className='connect-button hero-btn px-4 min-h-[40px] mt-10'><a href="mailto:srivastavasks156@gmail.com"><span>Let's Connect!</span></a></button>
      </div>


    </header>
  )
}
function Links(props) {
  return (
    <li className="text flex mx-1 items-center relative nav-links p-2" style={props.style}>
      <a className="mr-2 cursor-pointer" href={`#${props.links}`}>{props.text}</a><UilLink size="14" color="white" className="p-0 m-0" />
      <span className="gradient-underline"></span>
    </li>
  );
}
export default Header