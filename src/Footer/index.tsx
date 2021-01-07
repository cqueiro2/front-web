import React from 'react';

import './styles.css'

import {ReactComponent as YoutubeIcon } from './Youtube.svg'
import {ReactComponent as LinkIcon } from './Linkedin.svg'
import {ReactComponent as IstagramIcon } from './Instagram.svg'




const  Footer = () => {
    return(        
        <footer className="main-footer">        
           App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
           <div className="footer-icons">
               <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
               <YoutubeIcon/>
               </a>
               <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                 <LinkIcon/>
               </a>
               <a href="https://www.instagram.com/devsuperior.ig/?hl=en" target="_new">
                 <IstagramIcon/>
               </a>
           </div>
        </footer>
    )
}

export default Footer