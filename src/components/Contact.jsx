import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdSecurity } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-4xl font-bold mb-6 flex justify-center items-center gap-3">
          <MdSecurity className="text-blue-500" /> Let’s Secure Your Infrastructure
        </h3>
        <p className="text-gray-400 mb-12 text-lg">
          I am currently open to new opportunities in DevOps, DevSecOps, and Cloud Engineering. 
          Let’s discuss how I can help automate your workflows and secure your production environments.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: "mailto:shamsherali.devops@gmail.com", icon: <MdEmail />, label: "Email", value: "shamsherali.devops@gmail.com" },
            { href: "https://www.linkedin.com/in/shamsherali-dev/", icon: <FaLinkedin />, label: "LinkedIn", value: "shamsherali-dev" },
            { href: "https://github.com/shamsherali-da", icon: <FaGithub />, label: "GitHub", value: "shamsherali-da" },
            { href: "https://wa.me/923058840463", icon: <FaWhatsapp />, label: "WhatsApp", value: "+92 305 8840463" }
          ].map((item, index) => (
            <a 
              key={index}
              href={item.href}
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col items-center hover:-translate-y-2"
            >
              <div className="text-3xl text-blue-400 mb-4 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{item.label}</span>
              <span className="text-sm text-gray-400 mt-1 break-all">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}