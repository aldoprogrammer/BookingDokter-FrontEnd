import React from 'react'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill} from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const socialLinks = [
  {
    path:'youtube.com',
    icon: <AiFillYoutube className='group-hover:display-white w-4 h-5'/>
  },
  {
    path:'https://github.com/aldoprogrammer',
    icon: <AiFillGithub className='group-hover:display-white w-4 h-5'/>
  },
  {
    path:'youtube.com',
    icon: <AiFillYoutube className='group-hover:display-white w-4 h-5'/>
  },
  {
    path:'https://www.linkedin.com/in/aldo-lata-soba-841233172/',
    icon: <RiLinkedinFill className='group-hover:display-white w-4 h-5'/>
  },
]

const quickLinks01 = [
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'/',
    display: 'About'
  },
  {
    path:'/services',
    display: 'Services'
  },
  {
    path:'/',
    display: 'Blog'
  },
]

const quickLinks02 = [
  {
    path:'/find-a-doctor',
    display: 'Find a Doctor'
  },
  {
    path:'/',
    display: 'Request an Appointment'
  },
  {
    path:'/',
    display: 'Location'
  },
  {
    path:'/',
    display: 'Get an Opinion'
  },
]

const quickLinks03 = [
  {
    path:'/',
    display: 'Donate'
  },
  {
    path:'/contact',
    display: 'Contact Us'
  },
  
]

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container px-10">
        <div className="flex justify-between flex-col
        md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className='text-base leading-7 font-normal
            text-textColor mt-4'>
              Copyright {year} developed by Aldo L.S.
            </p>

            <div className="flex">
              {socialLinks.map((link, index) => {
                return (
                  <Link
                    to={link.path}
                    key={index}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-9 h-9 border border-solid
                    border-[#181a1e] rounded-full justify-center group
                    hover:bg-irisBlueColor hover:border-none 
                    flex items-center"
                  >
                    {link.icon}
                  </Link>
                )
              })}
            </div>
          </div>
          
          <div>
              <h2 className='text-xl leading-[30px] font-normal
              mb-6 text-headingColor'>
                Quick Links
              </h2>

              <ul>
                {quickLinks01.map((item, index) => (
                  <li key={index} className='mb-4'>
                    <Link
                      to={item.path}
                      className='text-base leading-7 font-normal
                      text-textColor'
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

          <div>
              <h2 className='text-xl leading-[30px] font-normal
              mb-6 text-headingColor'>
                I Want To:
              </h2>

              <ul>
                {quickLinks02.map((item, index) => (
                  <li key={index} className='mb-4'>
                    <Link
                      to={item.path}
                      className='text-base leading-7 font-normal
                      text-textColor'
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

          <div>
              <h2 className='text-xl leading-[30px] font-normal
              mb-6 text-headingColor'>
                Support
              </h2>

              <ul>
                {quickLinks03.map((item, index) => (
                  <li key={index} className='mb-4'>
                    <Link
                      to={item.path}
                      className='text-base leading-7 font-normal
                      text-textColor'
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer