import './home.css'

function Home(){
    return (
        <>   
     <div className='container'>
      <div className='first-div'>
      <h1>ASIPHE NDIMLANA</h1>
      <p className='desc' id='role-desc'>Web Developer, Cloud practitioner, Problem Solver</p>
      <p className='desc'>Hi, I am Lorem Ipsum, I design lorem ipsums for people to use everyday. start your day off well with a fresh lorem ipsum dolor sit amet </p>
      <button className='btn-projects'>My Work</button>
      <button className='btn-contact'>Contact Me</button>
      </div>
      <div className='img-div'>
      <img src='https://i.postimg.cc/h465q5qj/image-removebg-preview.png' alt='Asiphe Ndimlana' className='Home-img'/>
      </div>
     
     </div>
     
        </>
    )
}

export default Home;