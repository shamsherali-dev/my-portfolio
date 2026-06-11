export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 flex flex-col md:flex-row items-center justify-center">
      {/* Left Side: Text */}
      <div className="text-center md:text-left md:w-1/2 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Architecting Secure, Scalable, & Automated Infrastructure
        </h2>
        <p className="text-xl mb-6">
          DevOps & DevSecOps Engineer | BS Computer Science (2023) | AWS Cloud | Terraform & Ansible | CI/CD Pipeline Orchestration | Docker & Kubernetes | Security & Compliance Automation
        </p>
      </div>

      {/* Right Side: Image with Caption */} 
      <div className="mt-8 md:mt-0 md:w-1/3 flex flex-col items-center"> 
        <img 
          src="/my-portfolio/images/shamsher.png" 
          alt="Shamsher Ali - DevOps & DevSecOps Engineer" 
          className="rounded-full w-60 h-60 border-4 border-blue-500 shadow-xl object-cover" 
        /> 
        <p className="mt-4 text-xl font-bold tracking-widest">SHAMSHER ALI</p>
        <p className="text-blue-400 font-medium">DevOps & DevSecOps Engineer</p>
      </div>
    </section>
  );
}