export default function Skills() {
  const skills = [
    {
      title: "AWS Cloud",
      icon: "/my-portfolio/images/aws.png",       
    }, 
    {
      title: "Terraform",
      icon: "/my-portfolio/images/terraform.png",       
    }, 
    {
      title: "Ansible",
      icon: "/my-portfolio/images/ansible.png",       
    }, 
    {
      title: "Docker",
      icon: "/my-portfolio/images/docker.png",       
    },
    {
      title: "Kubernetes",
      icon: "/my-portfolio/images/kubernetes.png",       
    },
    {
      title: "Jenkins",
      icon: "/my-portfolio/images/jenkins.png",       
    },
    {
      title: "GitHub Actions",
      icon: "/my-portfolio/images/github-actions.png",       
    },
    {
      title: "GitLab CI",
      icon: "/my-portfolio/images/gitlab.png",       
    },
    {
      title: "Linux Administration",
      icon: "/my-portfolio/images/linux.png",       
    },
    {
      title: "Security & Compliance",
      icon: "/my-portfolio/images/shield.png",    
    },
    {
      title: "Monitoring (Prometheus/Grafana)",
      icon: "/my-portfolio/images/monitoring.png",    
    },
    {
      title: "Python (Automation)",
      icon: "/my-portfolio/images/python.svg",    
    }
  ];

  return (
    <section id="skills" className="p-8 bg-slate-50">
      <h3 className="text-3xl font-bold mb-8 text-center text-slate-800">Technical Expertise</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map(dt => (
          <div key={dt.title} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center font-semibold hover:border-blue-500 transition-all duration-300">
            <img src={dt.icon} alt={dt.title} className="mx-auto h-12 w-12 mb-4" />
            <span className="text-sm text-slate-700">{dt.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}