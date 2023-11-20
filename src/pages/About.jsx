
import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState("about-me");

  return (
    <div id='About'>
    

      <div className='about-sec-div'>
        <div className='left-about-div'>
          <h2>LEARN MORE ABOUT ME</h2>
       
          <div className="radio-inputs">
            <label className="radio">
              <input
                type="radio"
                name="radio"
                checked={activeTab === "about-me"}
                onChange={() => setActiveTab("about-me")}
              />
              <span className="name">About Me</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                checked={activeTab === "contact-info"}
                onChange={() => setActiveTab("contact-info")}
              />
              <span className="name ">Contact info</span>
            </label>
          </div>
          <div className={activeTab === "about-me" ? 'about-me-details' : 'contact-info'}>
            {activeTab === "about-me" && (
              <div>
                <div className='arrow-info'>
                  <img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
                  <p className='details'>Full Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                  <p className='details'>Asiphe Ndimlana</p>
                </div>
                <div className='arrow-info'>
                  <img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
                  <p className='details'>DOB:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                  <p className='details'>03/09/2004</p>
                </div>
                <div className='arrow-info'>
                  <img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
                  <p className='details'>Languages: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                  <p className='details'>Xhosa ANd English</p>
                </div>
                <div className='arrow-info'>
                  <img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
                  <p className='details'>Gender: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                  <p className='details'>Male</p>
                </div>
              </div>
            )}
            {activeTab === "contact-info" && (
              <div>
                <div className='arrow-info'>
                  <img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
                  <p className='details'>Cell No: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                  <p className='details'>0781149972</p>
                </div>
                <div className='arrow-info'>
                  <img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
                  <p className='details'>Email: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                  <p className='details'>ASIPHENDIMLANA40@GMAIL.COM</p>
                </div>
                <div className='arrow-info'>
                  <img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
                  <p className='details'>LinkedIn: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                  <p className='details'>https://www.linkedin.com/in/asiphe-ndimlana-045184157/</p>
                </div>
                <div className='arrow-info'>
                  <img src='https://i.postimg.cc/85zGRd2r/Arrow-6.png' className='arrow-img' alt='Arrow'/>
                  <p className='details'>Availability: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                  <p className='details'>Any time</p>
                </div>
              </div>
            )}
      
          <img src='https://i.postimg.cc/CL2J7BCN/Avatar-Valkyrie.webp' alt='Valkyrie' className='troop' id='Valkyrie'/>
          <img src='https://i.postimg.cc/jjLmYt1h/Avatar-Bomber.webp' alt='Valkyrie' className='troop' id='Bomber'/>
               <img src="https://i.postimg.cc/gjzG2cgw/Earthquake-Spell-info.webp" alt="" className='troop' id='Earthquake-spell' />
          </div>
         
        </div>
        <div className='right-about-div'>
          <p className='about-me-paragraph text-start'>
            I am a developer hailing from Cape Town. My journey in coding began in 2019, during my Grade 10 year. Initially in High School, I dabbled in Delphi 7 before pivoting to focus on HTML, CSS, JavaScript, and many more.
            I have a passion for learning and am always eager to explore new technologies and stay up-to-date with industry trends.I hold a full-stack certificate from Life Choices Academy and have gained proficiency in various programming languages and frameworks, including JavaScript, Python, Vue.js Nuxt and many more.
            <br />
            <br />
            In my professional interactions, I adopt a formal tone of voice and always strive for clean and efficient code. When I'm not busy coding, I enjoy working on my numerous <a href="#Projects" className='link-to-projects'>projects</a>. I take pride in my open-source contributions, which you can explore on my GitHub profile. Feel free to <a href="#Contact" className='link-to-contact'>reach out</a> if you want to talk about work or just geek out in general. I'm always open to collaborating on exciting new projects and sharing knowledge with fellow tech enthusiasts.
          </p>
      
        
        </div>
      </div>
    </div>
  );
};

export default About;
