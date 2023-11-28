import React, { useState } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");
  return (
    <div id='Resume' className='container lg:flex'>
      <div className="lg:w-1/2" id='skills-div'>
      <h2 className='text-left my-skills-heading'>MY SKILLS</h2>
     
      <div className='skills-container flex justify-between'>
      <img src="https://i.postimg.cc/85hxZHPZ/bootstrap-removebg-preview.png" alt=""  className='skill'/>

      <img src="https://i.postimg.cc/QNvWQJK2/node-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/FKkMLmt5/js1.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/c4YtXtQr/python-removebg-preview.png" alt=""  className='skill'/>
      </div>
      <div className="skills-container flex justify-between">
      <img src="https://i.postimg.cc/50cZ5G1H/vue1-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/3NYVVvkY/cs-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/XqLmbY5F/html-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/W1yRzzHw/delphi-removebg-preview.png" alt=""  className='skill'/>
      </div>
      <div className="skills-container flex justify-between">
      <img src="https://i.postimg.cc/x1wQnKDT/My-SQL-Logo-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/L85KmLNs/figma-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/BnHySp24/react-1-logo-png-transparent-removebg-preview.png" alt=""  className='skill'/>
      <img src="https://i.postimg.cc/zfpxvcvZ/download-removebg-preview.png" alt=""  className='skill'/>
      </div>
     
      <h2 className='text-left my-skills-heading'>PROF. SKILLS</h2>
      <div className="interests container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="icon-box">
            <i className="fa fa-bullhorn fa-2x" aria-hidden="true"></i>
            <h4>Public Speaking</h4>
          </div>
        </div>

        <div className="col-span-1">
          <div className="icon-box">
            <i className="fa fa-question-circle fa-2x" aria-hidden="true"></i>
            <h4>Problem-solving</h4>
          </div>
        </div>

        <div className="col-span-1">
          <div className="icon-box">
            <i className="fa fa-users fa-2x" aria-hidden="true"></i>
            <h4>Team Work</h4>
          </div>
        </div>

        <div className="col-span-1">
          <div className="icon-box">
            <i className="fa fa-paint-brush fa-2x" aria-hidden="true"></i>
            <h4>Creativity</h4>
          </div>
        </div>

        <div className="col-span-1">
          <div className="icon-box">
            <i className="fa fa-users fa-2x" aria-hidden="true"></i>
            <h4>Leadership</h4>
          </div>
        </div>

        <div className="col-span-1">
          <div className="icon-box">
            <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
            <h4>Adaptability</h4>
          </div>
        </div>

        <div className="col-span-1">
          <div className="icon-box">
            <i className="fa fa-tasks fa-2x" aria-hidden="true"></i>
            <h4>Work Ethic</h4>
          </div>
        </div>

        <div className="col-span-1">
          <div className="icon-box">
            <i className="fa fa-comments fa-2x" aria-hidden="true"></i>
            <h4>Communication</h4>
          </div>
        </div>
      </div>
      <div>
      <h2 className='text-left my-skills-heading'>Achievements</h2>
      <div className='img-container flex' >
    <img src="https://i.postimg.cc/gk4LX2Bx/Networking-Basics-Badge20231020-29-hvhdj7.png" alt="" className='certificate-img m-3' />
    <img src="https://i.postimg.cc/jjcFBN8s/Operating-Systems-Basics-Badge20231006-29-7ws0e0.png" alt="" className='certificate-img m-3' />
      </div>
      <div className='img-container flex' >
    <img src="https://i.postimg.cc/gk4LX2Bx/Networking-Basics-Badge20231020-29-hvhdj7.png" alt="" className='certificate-img m-3' />
    <img src="https://i.postimg.cc/xC4nDBsT/aws-educate-introduction-to-cloud-101.png" alt="" className='certificate-img m-3' />
      </div>
      </div>
     
    </div>

      </div>
      <div className='mt-12'>
      <div className="radio-inputs" id='radio-resume'>
     
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
              Currently pursuing the AWS Cloud Practitioner certificate, a comprehensive program offered by AWS. This certification is designed to provide foundational knowledge and skills in cloud computing, ensuring a solid understanding of AWS services and more.
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
                I have successfully acquired a Full-Stack Development certificate. This comprehensive certification program has equipped me with a diverse set of skills, enabling me to design, develop, and deploy fully functional web applications.
                </p>
                <div className='circle'>
                  <h3>LC Academy </h3>
                  <p>Web Development</p>
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
                I completed Grade 12 with a focus on mathematics and physics as my major subjects. This academic journey has not only deepened my understanding of these fundamental disciplines but has also equipped me with a strong analytical and problem-solving foundation.
                </p>
                <div className='circle'>
                  <h3>B.H.S</h3>
                  <p>Passed Grade 12</p>
                  <h5>JAN 2017 - DEC 2021</h5>
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
