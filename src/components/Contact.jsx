import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaUserCheck, FaEnvelope } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        "service_7x199sc",      // আপনার Service ID
        "template_cfbl5t8",     // আপনার Template ID
        form.current,
        "M84hVtYDBvSv2Xw2r"     // আপনার Public Key (আমি আগের মেসেজ থেকে নিয়েছি)
      )
      .then(
        (result) => {
          toast.dismiss(loadingToast);
          toast.success("Success!");
          e.target.reset(); 
        },
        (error) => {
          toast.dismiss(loadingToast);
          toast.error("Failed! Check your Public Key or Internet.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section className="bg-[#111111] py-20 px-6 min-h-screen text-white font-sans">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-2">Contact</h2>
          <p className="text-yellow-500 font-medium tracking-wide">Let's Talk About Ideas</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Personal Info */}
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <img 
                src="./images (1).jpeg" 
                alt="Handshake" 
                className="w-full h-auto object-cover grayscale-[30%]"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-bold text-white">Tazmin Suva</h3>
                <p className="text-gray-300 text-xl mt-2 font-semibold">Web Developer (MERN)</p>
              </div>

              <div className="space-y-2">
                <p className="text-gray-300 text-lg">Are You Looking For Your Business Online Presence?</p>
                <p className="text-gray-300 text-lg">Don't Hesitate To Contact Me. I'm Available Here 🙂</p>
              </div>

              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-yellow-500 text-2xl"><FaMapMarkerAlt /></div>
                  <div>
                    <h4 className="text-xl font-bold">Address</h4>
                    <p className="text-gray-400">Habiganj, Sylhet, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-yellow-500 text-2xl"><FaUserCheck /></div>
                  <div>
                    <h4 className="text-xl font-bold">Freelancer</h4>
                    <p className="text-gray-400">Available Right Now</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-yellow-500 text-2xl"><FaEnvelope /></div>
                  <div>
                    <h4 className="text-xl font-bold">Email</h4>
                    <p className="text-gray-400 break-all">tazminsuva@Gmail.Com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#1a1c23] p-8 md:p-10 rounded-3xl border border-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-8">Contact Us</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter Your Name"
                  className="w-full bg-[#111111] border border-yellow-500/30 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Email:</label>
                <input 
                  type="email" 
                  name="email" // এটি খালি ছিল, এখন ঠিক করা হয়েছে
                  placeholder="Enter Your Email"
                  className="w-full bg-[#111111] border border-yellow-500/30 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Message:</label>
                <textarea 
                  name="message" 
                  rows="4"
                  placeholder="Enter Your Message"
                  className="w-full bg-[#111111] border border-yellow-500/30 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-yellow-500 text-black font-extrabold px-12 py-3 rounded-full hover:bg-yellow-600 transition-all uppercase tracking-widest text-sm shadow-lg"
              >
                Say Hello
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;