import React from 'react'
import Home from './views/home'
import Booking from './views/booking'
import Search from './views/search'
import Creatives from './views/creatives'
import Becoming from './views/becoming'
import About from './views/about'
import Contact from './views/contact'
import Notfound from './views/notfound'
import SearchPage from './layouts/searchlayout'
import CreativeD from './views/creativedetails'
import verse from './assets/CreativeV.jpg'
import tik from './assets/tiktok.png'
import ig from './assets/instagram.png'
import twit from './assets/twitter.png'
import faceB from './assets/facebook.png'
import wht from './assets/whatsApp.png'
import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function Header() {
  return (
    <>
    <div id="center">
      <img src={verse} alt="logo" width="100%" height="20%"/>
        <input name="search" type="text" placeholder="Search creatives..." id="searchbox"/><button>Search</button>
          <div className="navs">
         <NavLink to="/">HOME</NavLink>
          <NavLink to="/search">SEARCH</NavLink>
          <NavLink to="/booking">BOOKING</NavLink>
        <NavLink to="/creatives">CREATIVES</NavLink>
         <NavLink to="/becoming">BE A CREATIVE</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
          </div>     
    </div>
    </>
    )
}


function Footer() {
  return (
  <>
  <div id="footD">
<h1 id="logo">CreatorVerse</h1>
<div className="part1"><p id="footDTT">footer</p>
<section id="about">CreatorVerse is a creative ecosystem built to connect creatives, clients, opportunities, and collaboration in one
place.</section>
<section id="link">
<p><u>LINKS</u></p>
<p>Privacy policy</p>
<p>Terms of service</p>
<p>Be a creative</p>
<p>Search</p>
<p>Contact us</p>
</section>
  </div>    
  <div className="part2">
<div className="socialI">
  <a href="https://chat.whatsapp.com/Cb4VCGJtSnhL17vKOIXQHD" target="_blank"><img src={wht} alt="whatsapp"/></a>
  <a href="" target="_blank"><img src={faceB} alt="facebook"/></a>
  <a href="https://www.tiktok.com/@creatorverse54?_r=1&_t=ZS-99Z4VDK8ImC" target="_blank"><img src={tik} alt="tiktok"/></a>
  <a href="https://x.com/CreatorVerseNG" target="_blank"><img src={twit} alt="twitter"/></a>
  <a href="https://www.instagram.com/creator.verseng?stkn=Nnd5M2poamd3MmN1" target="_blank"><img src={ig} alt="instagram"/></a>
</div>
  </div>
  </div>   
  </>  
    )
}

const queryClient = new QueryClient();


function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/FirstReact/">
      <Header />
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/search" element={<SearchPage />}>
     <Route index element={<Search />}/>
    <Route path="/search/:id" element={<CreativeD />}/>
     </Route>
     <Route path="/booking" element={<Booking />}/>
     <Route path="/creatives" element={<Creatives />}/>
     <Route path="/becoming" element={<Becoming />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/contact" element={<Contact />}/>
     <Route path="*" element={<Notfound />}/>
     </Routes>
     <Footer />
     </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
