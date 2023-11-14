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
<img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
    </div>
</div>
   

     </div>
     
        </>
    )
}

export default About;