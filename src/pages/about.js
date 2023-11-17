import './about.css'

function About(){
    return (
        <>      
     <div className='container' id='about'>
     <h2>LEARN MORE ABOUT ME</h2>
<div className='d-flex'>
<div className='img-container'>
    
    <img src='https://i.postimg.cc/h465q5qj/image-removebg-preview.png' alt='Asiphe Ndimlana' className='about-img'/>
    </div>
    <div className='info'>
    <p >Hi, I am Lorem Ipsum, I design lorem ipsums for people to use everyday. start your day off well with a fresh lorem ipsum dolor sit amet </p>
    <div class="radio-inputs">
  <label class="radio">
    <input type="radio" name="radio"
    //  checked=""
     v-model="activeTab"
      value="about-me"/>
    <span class="name">About Me</span>
  </label>
  
  <label class="radio">
    <input type="radio" name="radio" v-model="activeTab" value="contact-info"/>
    <span class="name ">Contact info</span>
  </label>
      
</div>
<div className='about-me-details'>
<div className='arrow-info'>
<img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
<p>Full Name:</p>
<p>Asiphe Ndimlana</p>
</div>

<div className='arrow-info'>
<img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
<p>DOB:</p>
<p>03/09/2004</p>
</div>
<div className='arrow-info'>
<img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
<p>Languages:</p>
<p>Xhosa ANd English</p>
</div>
<div className='arrow-info'>
<img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
<p>Gender:</p>
<p>Male</p>
</div>
</div>
<div className='contact-info'>
<div className='arrow-info'>
<img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
<p>Cell No:</p>
<p>0781149972</p>
</div>
<div className='arrow-info'>
<img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
<p>Email:</p>
<p>ASIPHENDIMLANA40@GMAIL.COM</p>
</div >
<div className='arrow-info'>
<img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
<p>LinkedIn:</p>
<p>https://www.linkedin.com/in/asiphe-ndimlana-045184157/</p>
</div>
<div className='arrow-info'>
<img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
<p>Availability:</p>
<p>Any time</p>
</div>
</div>


    </div>
    
</div>
   

     </div>
     
        </>
    )
}

export default About;