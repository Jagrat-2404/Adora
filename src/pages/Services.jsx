function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      desc: 'Beautiful and intuitive designs that users love'
    },
    {
      icon: '💻',
      title: 'Web Development',
      desc: 'Modern, responsive websites built with latest technologies'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      desc: 'Native and cross-platform mobile applications'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      desc: 'Robust server-side solutions and APIs'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      desc: 'Improve your online visibility and search rankings'
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      desc: 'Data-driven strategies for better results'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-accent">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive solutions for all your digital needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-secondary p-8 rounded-lg hover:shadow-xl hover:border-accent border border-transparent transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-accent">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
