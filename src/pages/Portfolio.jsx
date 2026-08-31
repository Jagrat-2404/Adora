function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      desc: 'Full-stack e-commerce solution with payment integration'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      desc: 'Secure mobile banking application for iOS and Android'
    },
    {
      title: 'Design System',
      category: 'UI/UX Design',
      desc: 'Comprehensive design system for enterprise applications'
    },
    {
      title: 'Analytics Dashboard',
      category: 'Web Development',
      desc: 'Real-time analytics and reporting platform'
    },
    {
      title: 'Social Network',
      category: 'Full Stack',
      desc: 'Social media platform with real-time features'
    },
    {
      title: 'AI Chatbot',
      category: 'Backend Development',
      desc: 'Intelligent chatbot with natural language processing'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-card py-16 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground">Showcase of our latest and greatest work</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-card rounded-lg overflow-hidden hover:shadow-xl transition group cursor-pointer border border-border hover:border-accent/50">
                <div className="bg-gradient-to-br from-primary to-primary/80 h-48 flex items-center justify-center group-hover:scale-105 transition">
                  <span className="text-6xl">📦</span>
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
