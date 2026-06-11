export default function Certifications() {
  const certs = [
    { 
      title: "DevOps Engineer Certification", 
      desc: "Comprehensive training in Continuous Integration/Continuous Deployment (CI/CD), Containerization (Docker & Kubernetes), Infrastructure as Code (Terraform & Ansible), and AWS Cloud Computing.",
      img: "/my-portfolio/images/crft1.png" 
    }
  ];

  return (
    <section id="certifications" className="p-8 bg-white">
      <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">Professional Certifications</h3>
      
      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((c) => (
          <div 
            key={c.title} 
            className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img 
              src={c.img} 
              alt={c.title} 
              className="mb-6 h-32 w-full object-contain"
            />
            <h4 className="text-lg font-bold mb-3 text-gray-900">{c.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}