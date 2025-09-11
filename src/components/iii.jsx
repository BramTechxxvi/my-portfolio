import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import cn from "../lib/utils";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // replace with your service ID
        "YOUR_TEMPLATE_ID",    // replace with your template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"      // replace with your public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        {/* ... your info section ... */}

        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                placeholder="Ibrahim Ibrahim..."
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                placeholder="123@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
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
              <Send size={16} className="ml-2" />
            </button>

            {status && (
              <p className="text-center mt-4 text-sm text-muted-foreground">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
