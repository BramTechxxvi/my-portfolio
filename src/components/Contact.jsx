import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiGithub } from 'react-icons/fi';

const Contact = ()=> {
  return (
    <section className="bg-white text-gray-900 py-16 px-4 md:px-12 lg:px-24">
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center'>Contact Me</h2>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-16'>
          <div className='flex items-center gap-4 text-lg'>
            <FiMail className='text-blue-500 text-xl' />
            <a href="mailto:bramtechxxvi@gmail.com" className='hove:underine'></a> 
          </div>
        </div>

      </div>

        <div className="info">
        <h4> bramtechxxvi@gmail.com </h4>
        <h4><FiPhone/>  +234-701-536-6234</h4>
        <h4><FiLinkedin />  my-linkedIn</h4>
        <h4><FiMapPin />   Lagos, Nigeria</h4>
        <h4><FiGithub />   https://github.com/BramTechxxvi </h4>
        </div>
    </section>
  )
}

export default Contact;