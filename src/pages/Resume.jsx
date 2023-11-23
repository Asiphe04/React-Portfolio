import React, { useState } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");
  return (
    <div id='Resume' className='container lg:flex'>
      <div className="lg:w-1/2" id='skills-div'>
      <h2 className='text-left my-skills-heading'>MY SKILLS</h2>
      <div className='skills-container flex '>
      
      <img src="https://i.postimg.cc/x1wQnKDT/My-SQL-Logo-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/x1wQnKDT/My-SQL-Logo-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/x1wQnKDT/My-SQL-Logo-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/x1wQnKDT/My-SQL-Logo-removebg-preview.png" alt=""  className='skill'/>
      </div>
      <div className="skills-container flex">
      <img src="https://i.postimg.cc/x1wQnKDT/My-SQL-Logo-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/x1wQnKDT/My-SQL-Logo-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/x1wQnKDT/My-SQL-Logo-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/x1wQnKDT/My-SQL-Logo-removebg-preview.png" alt=""  className='skill'/>
      </div>
      <h2 className='text-left my-skills-heading'>PROF. SKILLS</h2>
      </div>
      <div className='mt-12'>
      <div className="radio-inputs">
     
        <img src='https://i.postimg.cc/Hsr921rR/Avatar-Archer.webp' alt='Troop' className='troop' id='Archer'/>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                checked={activeTab === "experience"}
                onChange={() => setActiveTab("experience")}
              />
              <span className="name">Experience</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                checked={activeTab === "education"}
                onChange={() => setActiveTab("education")}
              />
              <span className="name ">Education</span>
            </label>
          </div>
          <div className={activeTab === "experience" ? 'about-me-details' : 'education'}>
            {activeTab === "experience" && (
              <div>
                <hr className="custom-line"></hr>
                <svg className='dot' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="10" fill="#FF004F"/>
</svg>
<hr className="horizontal-line"></hr>
              <p className='role-description text-start text-end'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut minus, veniam quis dolores excepturi. Iusto nemo atque dolor enim soluta ducimus tenetur aspernatur nostrum voluptates? Consequatur officia non ratione.
              </p>
              <div className='circle'>
                <h3>LC Studio </h3>
                <h5>OCT 2023 - PRESENT</h5>
              </div>
             
              </div>
            )}
            {activeTab === "education" && (
              <div className='education-container'>
                  <div>
                  <hr className="custom-line"></hr>
                  <svg className='dot' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#FF004F"/>
  </svg>
  <hr className="horizontal-line"></hr>
                <p className='role-description text-start text-end'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut minus, veniam quis dolores excepturi. Iusto nemo atque dolor enim soluta ducimus tenetur aspernatur nostrum voluptates? Consequatur officia non ratione.
                </p>
                <div className='circle'>
                  <h3>LC Academy </h3>
                  <h5>APR 2023 - SEP 2023</h5>
                </div>
               
                </div>
                <div className='sec-education'>
                  <hr className="custom-line"></hr>
                  <svg className='dot' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#FF004F"/>
  </svg>
  <hr className="horizontal-line"></hr>
                <p className='role-description text-start text-end'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut minus, veniam quis dolores excepturi. Iusto nemo atque dolor enim soluta ducimus tenetur aspernatur nostrum voluptates? Consequatur officia non ratione.
                </p>
                <div className='circle'>
                  <h3>LC Academy </h3>
                  <h5>APR 2023 - SEP 2023</h5>
                </div>
               
                </div>
               
                </div>
            )}
          </div>
      </div>
  
    
      <img src='https://i.postimg.cc/90QFjCS4/Avatar-Wizard.webp' alt='Troop' className='troop' id='wizard-resume'/>
                
    </div>
  )
}

export default Resume
