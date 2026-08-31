function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-accent">About Adora</h1>
          <p className="text-xl text-gray-300">Building beautiful, functional digital experiences since 2020</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-accent">Our Story</h2>
          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            Adora was founded with a simple mission: to help businesses create stunning digital experiences that engage users and drive results. What started as a small team of passionate designers and developers has grown into a full-service digital agency.
          </p>
          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            We believe that great design is more than just aesthetics—it's about solving problems and creating value for our clients and their users.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-accent">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Creative Director' },
              { name: 'Mike Chen', role: 'Lead Developer' },
              { name: 'Emma Davis', role: 'UX Designer' },
            ].map((member, idx) => (
              <div key={idx} className="bg-primary p-8 rounded-lg text-center hover:shadow-lg transition">
                <div className="text-5xl mb-4">👤</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
