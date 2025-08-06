import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiGithub } from 'react/icons/fi';

const Contact = ()=> {
  return (
    <>
    <div>Contact</div>
    <div className="info">
        <h4 ><FiMail />  bramtechxxvi@gmail.com</h4>
        <h4><FiPhone/>  +234-701-717-5172</h4>
        <h4><FiLinkedin />  my-linkedIn</h4>
        <h4><FiMapPin />   Lagos, Nigeria</h4>
        <h4><FiGithub />   my-gitHubLink</h4>
    </div>
    </>
  )
}

export default Contact;