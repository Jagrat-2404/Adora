import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent">Welcome to Adora</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Create stunning digital experiences with modern design and technology</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/services"
              className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Adora?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Focused Solutions', desc: 'Tailored to your specific needs' },
              { icon: '⚡', title: 'Fast & Efficient', desc: 'Lightning-quick performance' },
              { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-primary p-8 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-accent">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
