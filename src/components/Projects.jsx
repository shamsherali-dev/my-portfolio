export default function Projects() {
  const projects = [
    { 
      title: "Cloud Infrastructure Automation", 
      desc: "Built a scalable, production-ready AWS environment using Terraform for infrastructure provisioning and Ansible for automated configuration, ensuring consistent and reproducible deployments.",
      img: "/my-portfolio/images/p1.png"
    },
    { 
      title: "End-to-End CI/CD Pipeline", 
      desc: "Architected a robust CI/CD pipeline integrating Jenkins and GitHub Actions to automate code testing and deployment, significantly accelerating the software release lifecycle.",
      img: "/my-portfolio/images/p2.png"
    },
    { 
      title: "Containerized Microservices Deployment", 
      desc: "Containerized applications using Docker and implemented streamlined deployment workflows via GitLab CI, improving application portability, resource efficiency, and deployment reliability.",
      img: "/my-portfolio/images/p3.png"
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-50">
      <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">Projects</h3>
      
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div 
            key={p.title} 
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <img 
              src={p.img} 
              alt={p.title} 
              className="mb-6 h-48 w-full object-cover rounded-lg"
            />
            
            {/* Title */}
            <h4 className="text-xl font-bold mb-3 text-gray-900">{p.title}</h4>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}