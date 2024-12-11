import React from 'react'
import './home-page.css'
import { ServiceList } from '../libs/data'
import Footer from '../components/footer'
import AboutList from '../components/about-list'
import { Button, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <div>
        <header>
        <div class="header-article">
          <h1>CRAFTING EXCELLENCE IN</h1>
          <b>PRINTING, PACKAGING, & BEYOND</b>
          <p>Altrapac Sdn. Bhd. was founded by Mr. Wong Choon Fooi & Partner in April 1994 and it has grown from its humble beginning since then. Altrapac is located in Butterworth, Penang with over 30 years of experience. 
          </p>
        </div>
        <div class="header-picture">
          <img class="header-picture-1" src="/banner-shape.png" alt="banner" />
          <img class="header-picture-2" src="/home-banner-2.png" alt="banner 2"/>
        </div>
      </header>
    
      <div class="about-container">
      <section class="about-section">
        <div class="about-title"><h1>REDEFINING PRINT AND PACKAGING EXCELLENCE.</h1></div>
        <div class="about-desc">
          <p>Throughout history, we have a wide range of customers who have big names in Food & Beverages, Electronics, Pharmaceutical, Medical, Household, Beautycare & others industry.</p>
          <Button variant='outlined'>Read Me</Button>
        </div>
        <div class="about-bottom">
          <div class="about-listing">
            <AboutList/>
          </div>
          <div class="picture-float-panel">
            <div class="about-picture">
              <img src="/about.png" alt="about" />
            </div>
            <div class="float-panel">
              <div class="float-panel-left">
                <span>30</span><div>Year Of Experience.</div>
              </div>
              <div class="vl"></div>
              <div class="float-panel-right">
                <span>1246</span><div>Satisfaction Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section class="service-section">
        <div class="serive-grid-layout">
          <div class="service-item">
            <h2>OUR SERVICE</h2>
            <p>Altrapac Sdn. Bhd. specializes in producing a variety of self-adhesive labels, stickers, flexible packaging, and machinery. Throughout our history, we have served a diverse array of prestigious clients across multiple industries, including Food & Beverages, Electronics, Pharmaceuticals, Medical, Household, and Beauty Care.</p>
            <Button variant='outlined'>Read More</Button>
          </div>
          {ServiceList.map((item, index) => (
            <div key={index} class="service-item">
              <div class="service-item-image">
                <img src={'/' + item.photo} alt="item picture"/>
              </div>
              <div class="service-item-content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section class="contact-section">
        <div class="contact-section-left">
          <h1>CONTACT US FOR<br/>MORE INFORMATION</h1>
          <p>Thank you for support and interest in ALTRAPAC. We will get back to you as soon as we can, and have a nice day!</p>
        </div>
        <div class="contact-section-right">
          <Typography variant='h1' sx={{ fontWeight: 700}}>Get In</Typography>
          <div class="contact-row">
            <Button variant='contained' >Read Me</Button>&emsp;
            <Typography variant='h3' sx={{ fontWeight: 700}}>Touch</Typography>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
