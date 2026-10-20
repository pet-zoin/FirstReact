import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sort from '../assets/filter.png';
import db from '../Implies/firebase.js';
import { useQuery } from '@tanstack/react-query';
import { getDocs, collection } from 'firebase/firestore';



function Search() {
  const [values, setValues] = useState({});
  const [rate, setRate] = useState("");
  const [range, setRange] = useState({
    startRange: 10, closeRange: 70
  });
  const [creatorN, setCreatorN] = useState("");


  const getGoods = async () => {
  const goodsCol = collection(db,'Games');
  const goodsSnapshot = await getDocs(goodsCol);
  const goodsList = await goodsSnapshot.docs.map(doc => (
   {id: doc.id, ...doc.data()}));
    alert("it's done!");
    return Array.from(goodsList);
}

const { data: people, isLoading } = useQuery({
  queryKey: ['creatives'],
  queryFn: getGoods,
  staleTime: 1000 * 60 * 5,
});

  
  const updateStats = (e) => {
    const nam = e.target;
    let mainV = nam.type === "checkbox" ? nam.checked : nam.value;
    const name = nam.name;   
    
    setValues(each => ({...each, [name]: mainV}))
  }
  
  const updateRadio = (e) => {
    setRate(e.target.value)
  }
  
  
  const updateRange = (e) => {
    const name = e.target.name;
    let mainV = e.target.value;
    let closing = Number(range.closeRange);
    let starting = Number(range.startRange);

    if (name == "startRange") {
    if (mainV >= closing) {
    setRange(prevv => ({...prevv, [name] : prevv.startRange}));
    } else {
      setRange(prevv => ({...prevv, [name] : mainV}));
    }
  } else {
    if (mainV <= starting) {
    setRange(prevv => ({...prevv, [name] : prevv.closeRange}));
    } else {
      setRange(prevv => ({...prevv, [name] : mainV}));
    }
  } 

  }

  const putName = (e) => {
    setCreatorN(e.target.value);
  }

  const whatToSearch = (e) => {
    alert(e.targe.name);
  }
  
  return (
    <>
<div id="stickTop">
  <input type="text" onChange={putName} name="searchItem" className="searchBox" value={creatorN} placeholder="Search by City or State..."/>
<div id="searchIntro">
<h1 className="headFilter">Filter</h1>
    <div className="filterDropdown">
    <h2>Creatives</h2>
    <section className="checkCart">
  <label for="photographer"><input type="checkbox" name="photographer" checked={values.photographer} onChange={updateStats}/>Photographer</label>
  <label for="graphicsDesigner"><input type="checkbox" name="graphicsDesigner" checked={values.graphicsDesigner} onChange={updateStats}/>Graphics Designer</label>
  <label for="videoEditor"><input type="checkbox" name="videoEditor" checked={values.videoEditor} onChange={updateStats}/>Video Editor</label> 
  <label for="copyWriter"><input type="checkbox" name="copyWriter" checked={values.copyWriter} onChange={updateStats}/>Copy Writer</label> 
  <label for="contentCreator"><input type="checkbox" name="contentCreator" checked={values.contentCreator} onChange={updateStats}/>Content Creator</label>
  <label for="socialMediaManager"><input type="checkbox" name="socialMediaManager" checked={values.socialMediaManager} onChange={updateStats}/>Social Media Manager</label>
  <label for="motionGraphics"><input type="checkbox" name="motionGraphics" checked={values.motionGraphics} onChange={updateStats}/>Motion Graphics</label>
  </section>
  <br />
  <h2>Rating</h2>
  <section className="ckeckCart">
  <label for="2stars"><input type="radio" name="starRating" value="2stars" checked={rate === '2stars'} onChange={updateRadio}/>2stars</label>
  <label for="3stars and above"><input type="radio" name="starRating" value="3stars and above" checked={rate === '3stars and above'} onChange={updateRadio}/>3stars and above</label>
  <label for="5stars"><input type="radio" name="starRating" value="5stars" checked={rate === '5stars'} onChange={updateRadio}/>5stars</label>
  </section>
  <br />
  <h2>Price range</h2>
  <label for="startingPrice">Starting price<input type="range" value={range.startRange} name="startRange" onChange={updateRange}/></label>
  <label for="closingPrice"><input type="range" value={range.closeRange} name="closeRange" onChange={updateRange}/>Closing price</label>
  
  
   <h1>{values.photographer ? "true" : "false"}</h1>
   <h1>{rate}</h1>
   <h1>{range.startRange}</h1>
   <h1>{range.closeRange}</h1>
    <h1>{creatorN}</h1>
    </div>
      </div>
</div><br/>
<div id="collect">
  {!people ? <h2 id="loadM">Loading creatives...</h2> : people.filter(re => re.location.toLowerCase().indexOf(creatorN) != -1).map(guy => <Link to={`/search/${guy.id}`} className="eachCreative" key={guy.id}><div><section id="info">
  <label for="name">Name:</label> {guy.full_name} <br/>
  <label for="location">Location:</label> {guy.location} <br/>
  <label for="skills">Skills:</label> {guy.creative_skills}
  </section>
  </div></Link>)}
</div>
    </>
    );
}

export default Search;