import React, { useState } from 'react'
import snap from '../assets/camera-operator.png'
import motion  from '../assets/motion-sensor.png'
import photo from '../assets/photographer.png'
import Vedit from '../assets/video-editor.png'
import write from '../assets/concept.png'
import photoE from '../assets/illustration.png'
import contentC from '../assets/content.png'
import management from '../assets/social-media.png'
import lens from '../assets/Lens.jpg'
import face from '../assets/profile.png'
import first from '../assets/firstB.jpeg'

function Category() {

  var okay = {
  width: "30%", height:"30%"
  };
  
  return (
  <>
  <h1>Whatever you need to create, find the right creative for it.</h1>
<h2>From capturing moments to building brands, creating content, designing visuals, and telling stories, CreatorVerse connects you with creative professionals who can bring your ideas to life.</h2> 
<div className="cart">
<div>
<img src={management} style={okay}/>
<p>Social media management</p>
</div>
<div>
<img src={contentC} style={okay}/>
<p>Content creation</p>
</div>
<div>
<img src={photoE} style={okay}/>
<p>Graphic design</p>
</div>
<div>
<img src={write} style={okay}/>
<p>Copywriting</p>
</div>
<div>
<img src={Vedit} style={okay}/>
<p>Video edition</p>
</div>
<div>
<img src={photo} style={okay}/>
<p>Photography</p>
</div>
<div>
<img src={snap} style={okay}/>
<p>Videography</p>
</div>
<div>
<img src={motion} style={okay}/>
<p>Motion graphics</p>
</div>
</div>
</>
)
}

function Home() {
  const [count, setCount] = useState(0);
  
  let talent = [{skill: "Photography", pos: 0},{skill: "Videography", pos:1},{skill: "Video edition", pos:2},{skill: "Content creation", pos:3},{skill: "Copywriting", pos:4},{skill: "Motion graphics", pos:5},{skill:"Social media management", pos:6},{skill: "Graphic design", pos:7}];
  
  var shows = [{img: lens},{img: management}];
  
  var profileS = [{img: face, name: "Leon Lange", skill:"Web Developer", location: "Port harcourt", price: "$150",rating :"♡♡♡♡"}];
  
  let goal = {
    color:"black"
  }
  
  let pro = {
  backgroundImage:`url(${face})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center"
  }
  
  let backG = {
  backgroundImage:`url(${first})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center"
  }
  
//alert(JSON.stringify(people));
  
  return (
    <>
    <h1> Welcome to creatorVerse!</h1>
   <h2>Where Vision Meets Talent: Build Your Career or Hire the Best with Creative Arts.</h2>
   <br />
   <div id="intro">
  <section className="sectionA">
    <h3>Creatives</h3>
    <p>Behind every striking photo, video, painted canvas, or crafted design lies countless hours of passion and unseen dedication. Your creativity, like countless other art forms, has real value. Let’s turn your dedication into a sustainable career.</p>
    </section>
  <section className="sectionB">
  <h3>Clients</h3>
  <p>Achieving your vision means effortlessly finding top-tier talent that breathes life into your ideas. It’s about seamless collaboration and bringing your creative projects to reality with complete confidence and ease.</p>
</section>
</div>
<br/><br/>
<Category />
<br /><br /><br />
<div className="show">
<div className="category">
{talent.map((one, rpg) => 
one.pos == count ? <p className="categoryhover" key={rpg} style={goal} onClick={() => setCount(one.pos)}>{one.skill}</p> : <p onClick={() => setCount(one.pos)} key={rpg}>{one.skill}</p>
)}
</div>
<div className="idea">
<img src={shows[count].img}/>
</div>
</div>
<br /><br /><br />
<h1>Featured Creatives</h1>
<h2>Handpicked talent, proven expertise. Explore profiles of verified creatives ready to collaborate on your team.</h2>
<br />
<div className="proo">
<div style={pro} className="featuredCD">
</div>
<div className="Finfo">
<h3>Name -- {profileS[count].name}</h3>
<section>
<p>Skill -- {profileS[count].skill}</p>
<p>Location -- {profileS[count].location}</p>
<p>Rating -- {profileS[count].rating}</p>
<p>Price -- {profileS[count].price}</p>
</section>
</div>
</div>
<br /><br /><br />
<h1>How it works</h1>
<h2>Connecting your vision with the right talent shouldn't be complicated. Here is how you can find, hire, and collaborate with skilled professionals in just a few simple steps.</h2>
<br />
<div className="howC">
<div className="hKid">
  <h1>1<span className="hTip">●</span></h1>
<section>Users sign up and choose their role as either a creative or a client to create their specific account.
</section>
</div>
<div className="hKid">
<h1>2<span className="hTip">●</span></h1>
<section>Creatives build their profiles, showcasing their skills, portfolios, and location to become visible in search results.
​</section>
</div>
<div className="hKid">
<h1>3<span className="hTip">●</span></h1>
<section>Clients search the platform for the specific creative they need, filtering by factors like price, ratings, or location.</section>
</div>
<div className="hKid">
  <h1>4 <span className="hTip">●</span></h1>
<section>Clients connect directly with their chosen creative to discuss project details and set appointments.</section>
</div>
</div>
<br/><br/><br />
<h1>Customer reviews</h1>
<h2>​Don't just take our word for it. Explore honest feedback from clients who found the exact expertise they needed to execute their vision.</h2>
<br />
<div className="customersF" style={backG}>
<div className="feedBo">
<section><img src={face} alt="Profile photo"/><h5>mark williams - painter</h5><h6>*****</h6></section>
<p>Absolute dream client to work with! He provided a clear vision for the video project, communicated prompt, helpful feedback throughout, and made the whole creative process seamless. Highly recommend!</p>
<small>25 march</small>
</div>
<div className="feedBo">
<section><img src={face} alt="Profile photo"/><h5>mark williams - painter</h5><h6>*****</h6></section>
<p>Absolute dream client to work with! He provided a clear vision for the video project, communicated prompt, helpful feedback throughout, and made the whole creative process seamless. Highly recommend!</p>
<small>25 march</small>
</div>
<div className="feedBo">
<section><img src={face} alt="Profile photo"/><h5>mark williams - painter</h5><h6>*****</h6></section>
<p>Absolute dream client to work with! He provided a clear vision for the video project, communicated prompt, helpful feedback throughout, and made the whole creative process seamless. Highly recommend!</p>
<small>25 march</small>
</div>
<div className="feedBo">
<section><img src={face} alt="Profile photo"/><h5>mark williams - painter</h5><h6>*****</h6></section>
<p>Absolute dream client to work with! He provided a clear vision for the video project, communicated prompt, helpful feedback throughout, and made the whole creative process seamless. Highly recommend!</p>
<small>25 march</small>
</div>
</div>
<br /><br /><br />
<h1>Which is it?</h1>
<div className="decide">
<button id="hire">Book</button><span>OR</span><button id="be">Become</button>
</div>
<br /><br /><br />
    </>
    );
}

export default Home;