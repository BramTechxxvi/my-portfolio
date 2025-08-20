import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiGithub } from 'react-icons/fi';

const Contact = ()=> {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className='max-w-4xl w-full py-16 px-4 md:px-12 lg:px-24 mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center'>Contact Me</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-16'>
          <div className='flex items-center gap-4 text-lg'>
            <FiMail className='text-blue-500 text-xl' />
            <a href="mailto:bramtechxxvi@gmail.com" className='hover:underline'>bramtechxxvi@gmail.com</a> 
          </div>
          <div className='flex items-center gap-4 text-lg'>
            <FiPhone className='text-green-500 text-xl' />
            <a href="tel:+2347015366234" className='hover:underline'>+234-701-536-6234</a>
          </div>
          <div className='flex items-center gap-4 text-lg'>
            <FiLinkedin className='text-blue-700 text-xl' />
            <a href="" target="_blank" rel='noopener noreferrer' className='hover:underline'>
              my-linkedin
            </a>
          </div>
          <div className='flex items-center gap-4 text-lg'>
            <FiMapPin className='text-red-500 text-xl' />
            <span>Lagos, Nigeria</span>
          </div>
          <div className='flex items-center gap-4 text-lg'>
            <FiGithub className='text-black text-xl' />
            <a href="https://github.com/BramTechxxvi" target="_blank" rel='noopener noreferrer' className='hover:underline'>
              github.com/BramTechxxvi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;