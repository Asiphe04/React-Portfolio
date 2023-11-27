import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>

     <h1 className='text-left ml-12'>LEAVE A MESSAGE</h1> 
     <form 
     action="https://formspree.io/f/mjvqqwre"
     method="POST">
      <label className='contact-label'>Full Name</label>
      <br />
      <input type="text" name='text' className='contact-input'/>
      <br />
      <label className='contact-label'>Email</label>
      <br />
      <input type="email" name="email" className='contact-input'/>
      <br />
      <label className='contact-label'>Message</label>
      <br />
      <input  className='message-input contact-input' name="message" />
      <button className='btn-contact' id='btn-submit-form' type='submit'>Send !</button>
     </form>
     <img src='https://i.postimg.cc/T2ZBGvvZ/Avatar-Dragon.webp' alt='Stone' className='troop' id='Dragon'/>
     <div className="social-icons">
      <a
        href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B8h9wTBRuSt2U75xVavKEoA%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" id="linkedIn"></i>
      </a>
      <a href="https://github.com/Asiphe04" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" id="Github"></i>
      </a>
    </div>
  
    </div>
  )
}

export default Contact
