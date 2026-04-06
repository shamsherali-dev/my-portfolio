export default function Projects() {
  const projects = [
    { 
      title: "Social Media AI Agent | AI Automation Engineer", 
      desc: "I design and deploy intelligent systems that automate the entire social media lifecycle, from autonomous content creation to real-time community engagement. By integrating LLMs with advanced workflow tools, I transform manual social strategies into scalable, self-operating growth engines.",
      img: "/my-portfolio/images/socialMedia_agent.png",
      linkedin: "#", 
      drive: "#",
      github: "#"
    },
    { 
      title: "Cold Mail AI agent | Automation", 
      desc: "A smart email routing system built with n8n and AI to automate lead qualification and response management. This agent categorizes incoming data and routes it to the right person, eliminating manual sorting and boosting efficiency.",
      img: "/my-portfolio/images/cold_mailer.png",
      linkedin: "https://www.linkedin.com/posts/shamsherali-dev_aiautomation-n8n-linkedinstrategy-ugcPost-7446180286289207296-wsp7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDHTYEBa7ToCT0-yEYEyg2VhXZbZoI7sao", 
      drive: "#",
      github: "#"
    },
    { 
      title: "Priority base Email manager | Automation", 
      desc: "A smart routing agent built with n8n that uses AI to analyze and prioritize incoming communications instantly. It ensures every message reaches the right person or department, eliminating manual sorting and speeding up response times.",
      img: "/my-portfolio/images/Priority-Based AI Email Agent (n8n Automation).png",
      linkedin: "#", 
      drive: "#",
      github: "#"
    },
    { 
      title: "Pharmacy website | UI-UX Design", 
      desc: "Designed a pharmacy website prototype in Figma with intuitive navigation, responsive layouts, and a clean, user‑friendly interface to enhance accessibility and customer experience.", 
      img: "/my-portfolio/images/pharmacy.png",
      linkedin: "#", 
      drive: "#",
      github: "#"
    },
    { 
      title: "codeMaster | wordPress CMS", 
      desc: "Built and customized a responsive WordPress blog website under CodeMater, delivering clean design, optimized performance, and scalable CMS functionality.", 
      img: "/my-portfolio/images/codemaster.png",
      linkedin: "#", 
      drive: "#",
      github: "#"
    },
    { 
      title: "HR Analytic Dashboard | Power BI ", 
      desc: "This interactive Power BI dashboard provides a data-driven overview of employee retention for the company. It enables the client to monitor key performance indicators such as a 16.1% attrition rate and salary distributions to identify trends across departments and demographics, ultimately supporting strategic workforce planning and talent management.", 
      img: "/my-portfolio/images/hr_analytic.png",
      linkedin: "https://www.linkedin.com/posts/shamsherali-da_hranalytics-powerbi-employeeretention-activity-7357723215374221312-izCx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDHTYEBa7ToCT0-yEYEyg2VhXZbZoI7sao", 
      drive: "https://drive.google.com/file/d/your-demo-link/view",
      github: "https://github.com/shamsherali-da/HR_Analytic_dashboard_powerBI"
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-50">
      <h3 className="text-2xl font-bold mb-8 text-center">Projects</h3>
      {/* Responsive grid: 1 col on mobile, 2 on md, 3 on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p => (
          <div 
            key={p.title} 
            className="bg-white p-4 rounded shadow flex flex-col items-center text-center"
          >
            <img 
              src={p.img} 
              alt={p.title} 
              className="mb-4 object-contain"
            />
            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
            <p className="text-gray-600 mb-4">{p.desc}</p>

            {/* Links section with icons */}
            <div className="flex space-x-6 justify-center">
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/my-portfolio/images/linkedin.svg" 
                  alt="LinkedIn" 
                  className="w-6 h-6 hover:opacity-80"
                />
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/my-portfolio/images/github.svg" 
                  alt="GitHub" 
                  className="w-6 h-6 hover:opacity-80"
                />
              </a>
              <a href={p.drive} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/my-portfolio/images/gd.svg" 
                  alt="Google Drive" 
                  className="w-6 h-6 hover:opacity-80"
                />
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



{/* <img 
        src="images/music_store_analysis_screenshot.png"   // path relative to public folder
        alt="Project preview" 
        width="300" 
      /> */}