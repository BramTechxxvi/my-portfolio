import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Send } from 'lucide-react'
import cn from '../lib/utils'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // 👈 service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // 👈 template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // 👈 public key
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setLoading(false);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("❌ Failed to send message. Try again.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
      <div className='container max-w-5xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Have a project in mind or want to collaborate? Feel free to reach out.  
          I'm always open to discussing new opportunities.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Left side */}
          <div className='space-y-8'>
            {/* contact info ... keep as is */}
          </div>

          {/* Right side: Form */}
          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

            <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                <input type="text" id="name" name="name" required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary'
                  placeholder='Ibrahim Ibrahim...'
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                <input type="email" id="email" name="email" required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary'
                  placeholder='123@example.com'
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                <textarea id="message" name="message" required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none'
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex justify-center items-center gap-2",
                  loading ? "opacity-50 cursor-not-allowed" : ""
                )}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {status && <p className='text-center mt-4 text-sm text-muted-foreground'>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
