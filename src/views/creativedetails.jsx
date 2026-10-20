import react from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import face from '../assets/profile.png'


function CreativeD() {

const { id } = useParams();
  
const queryClient = useQueryClient();
  
const theData = queryClient.getQueryData(['creatives'])

const him = theData?.find((item) => item.id.toString() === id);

  
  return (
    <>
    <h1>Creatives details</h1>
<div>
  <img src={face} alt="profile" id="Ppic" width="180px" height="180px"/>
<h1>{him.full_name}</h1>
<p>{him.location}</p>
<p>{him.brand_name}</p>
{him.creative_skills.split(',').map(tu => <p className="skills">{tu}</p>)}
<br />
<h3 id="showW">Bio</h3>
<div id="Cbio">
<p><span id="know">About</span> -- {him.creative_journey_story}</p><br/>
<p><span id="know">Goal</span> -- {him.goals}</p><br/>
<p><span id="know">Job interest</span> -- {him.job_interests}</p><br/>
</div>

<h3 id="showW">Contact info</h3>
<div id="Ccontact">
<p><span id="know">Email</span> -- {him.email}</p>
<p><span id="know">Phone number</span> -- {him.phone_number}</p>
<p><span id="know">WhatsApp number</span> -- {him.whatsapp_number}</p>
<p><span id="know">Instagram</span> -- {him.instagram_handle}</p>
<p><span id="know">Tiktok</span> -- {him.tiktok_handle}</p>
  <p><span id="know">Facebook</span> -- {him.facebook_handle}</p>
</div>

<h3 id="showW">Other informations</h3>
<div id="Cbio">
  <p><span id="know">Price</span> -- {him.pricing}</p>
  <p><span id="know">Portfolio</span> -- <a href={him.portfolio_url} target="_blank">check out</a></p>
  <p><span id="know">Communication</span> -- {him.preferred_Comminication}</p>
  <p><span id="know">Private</span> -- {him.personal_info}</p>
  <p><span id="know">Additional notes</span> -- {him.additional_notes}</p>
</div>
</div>
    </>
  );
}

export default CreativeD;