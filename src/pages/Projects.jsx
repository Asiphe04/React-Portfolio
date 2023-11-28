import React, { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("about-me");
  return (
    <div id='Projects'>
       <h1 className='text-left ml-12'>PROJECTS</h1>
       <div className="radio-inputs">
            <label className="radio">
              <input
                type="radio"
                name="radio"
                checked={activeTab === "about-me"}
                onChange={() => setActiveTab("about-me")}
              />
              <span className="name">Vue</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                checked={activeTab === "contact-info"}
                onChange={() => setActiveTab("contact-info")}
              />
              <span className="name ">Javascript</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                checked={activeTab === "contact-info"}
                onChange={() => setActiveTab("contact-info")}
              />
              <span className="name ">React</span>
            </label>
          </div>
          <div className="javascript flex">
          <div className="lg:col-span-6 m-2">
            <img src="https://i.postimg.cc/Gtg3vp27/capstone.png" alt="" className='project-image'/>
          </div>
          <div className="lg:col-span-6 proj-sec-div">
            <p className='project-desc'>Hi, I am Lorem Ipsum, I design lorem ipsums for people to use everyday. start your day off well with a fresh lorem ipsum dolor sit amet .Hi, I am Lorem Ipsum, I design lorem ipsums for people to use everyday. start your day off well with a fresh lorem ipsum dolor sit amet </p>
            <button className='btn-projects'>Github</button>
      <button className='btn-contact'>Live Demo</button>
          </div>
          </div>
          <div className="javascript flex">
          <div className="lg:col-span-6">
            <img src="https://i.postimg.cc/x8vhTBjS/Screenshot-2023-10-19-131154.png" alt="" className='project-image'/>
          
          </div>
          <div className="lg:col-span-6">
            <p className='project-desc'>Hi, I am Lorem Ipsum, I design lorem ipsums for people to use everyday. start your day off well with a fresh lorem ipsum dolor sit amet .Hi, I am Lorem Ipsum, I design lorem ipsums for people to use everyday. start your day off well with a fresh lorem ipsum dolor sit amet </p>
            <button className='btn-projects'>Github</button>
      <button className='btn-contact'>Live Demo</button>
          </div>
          </div>
          <div className="javascript flex">
          <div className="lg:col-span-6">
            <img src="https://i.postimg.cc/Gtg3vp27/capstone.png" alt="" className='project-image'/>
          </div>
          <div className="lg:col-span-6">
            <p className='project-desc'>Hi, I am Lorem Ipsum, I design lorem ipsums for people to use everyday. start your day off well with a fresh lorem ipsum dolor sit amet .Hi, I am Lorem Ipsum, I design lorem ipsums for people to use everyday. start your day off well with a fresh lorem ipsum dolor sit amet </p>
            <button className='btn-projects'>Github</button>
      <button className='btn-contact'>Live Demo</button>
          </div>
          </div>
         
    </div>
  )
}

export default Projects
