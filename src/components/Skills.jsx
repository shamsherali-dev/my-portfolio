export default function Skills() {
  const skills = [
    
    {
      title: "AI Automation ",
      icon: "/my-portfolio/images/AIAutomation.png",      
    }, 
    
    {
      title: "UI/UX Design ",
      icon: "/my-portfolio/images/uiux.png",      
    }, 
    
    {
      title: "Figma",
      icon: "/my-portfolio/images/figma.png",      
    }, 
    
    {
      title: "WordPress CMS",
      icon: "/my-portfolio/images/wordpress.png",      
    }, 
    {
      title: "HTML 5 ",
      icon: "/my-portfolio/images/html5.png",      
    },
    {
      title: "CSS 3 ",
      icon: "/my-portfolio/images/css3.png",      
    },
    {
      title: "JavaScript",
      icon: "/my-portfolio/images/js.png",      
    },
    {
      title: "Advanced Excel",
      icon: "/my-portfolio/images/microsoft-excel.svg",      
    },
    {
      title: "AI + Prompting ",
      icon: "/my-portfolio/images/ai.png",      
    },
    {
      title: "Power Query",
      icon: "/my-portfolio/images/pq.png",    
    },
    {
      title: "MYSQL & PostGreSQL",
      icon: "/my-portfolio/images/postgresql.svg",    
    },
    {
      title: "Python",
      icon: "/my-portfolio/images/python.svg",    
    }
    
  ];

  return (
    <section id="skills" className="p-8 bg-white">
      <h3 className="text-2xl font-bold mb-4 text-center">Area of Expertise</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map(dt => (
          <div key={dt.title} className="bg-gray-100 p-4 rounded shadow text-center font-semibold">
            <img src={dt.icon} alt={dt.title} className="mx-auto h-12 w-12 mb-2" />
            {dt.title}
          </div>
        ))}
      </div>
    </section>
  );
}
