import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook,BsGithub, BsGlobe, BsGoogle, BsInstagram, BsLinkedin, BsTelegram, BsTiktok, BsTwitter, } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className=' w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white" >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg text-white">
                CTVET
              </span>
              Inventory
            </Link>
          </div>
            <div className=" grid grid-cols-3 gap-8 mt-4 sm:grid=cols-3 sm:gap-6">
                <div>
                <Footer.Title title='About' />
                <Footer.LinkGroup col>
                  <Footer.Link
                   href='https://www.100jsprojects.com' target='_blank'  rel='noopener noreferrer'
                   >
                     1000 Js Project
                  </Footer.Link>
                  <Footer.Link
                   href='/about' target='_blank'  rel='noopener noreferrer'
                   >
                     CTVET Inventory
                  </Footer.Link>
                </Footer.LinkGroup>
                </div>              
                <div>
                <Footer.Title title='Follow us' />
                <Footer.LinkGroup col>
                  <Footer.Link
                   href='https//github/dankukennedy.com' target='_blank'  rel='noopener noreferrer'
                   >
                    GitHub
                  </Footer.Link>
                  <Footer.Link
                   href='#'
                   >
                    Discott
                  </Footer.Link>
                </Footer.LinkGroup>
                </div>              
                <div>
                <Footer.Title title='Follow us' />
                <Footer.LinkGroup col>
                  <Footer.Link
                   href='https//github/dankukennedy.com' target='_blank'  rel='noopener noreferrer'
                   >
                    GitHub
                  </Footer.Link>
                  <Footer.Link
                   href='#'
                   >
                    Discott
                  </Footer.Link>
                </Footer.LinkGroup>
                </div>              
                              
            </div>
        </div>
        
        <Footer.Divider />
         <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright  href='#' by="CTVET" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
               <Footer.Icon  href='#' icon={BsFacebook} />
               <Footer.Icon  href='#' icon={BsInstagram} />
               <Footer.Icon  href='#' icon={BsTwitter} />
               <Footer.Icon  href='#' icon={BsGithub} />
               <Footer.Icon  href='#' icon={BsTiktok} />
               <Footer.Icon  href='#' icon={BsLinkedin} />
               <Footer.Icon  href='#' icon={BsGoogle} />
               <Footer.Icon  href='#' icon={BsGlobe} />
               <Footer.Icon  href='#' icon={BsTelegram} />
             </div>
         </div>
      </div>
    </Footer>
  );
}
