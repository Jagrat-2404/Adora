import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">🎨 Adora</h3>
            <p className="text-sm">Creating beautiful digital experiences</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
              <li><Link to="/services" className="hover:text-accent transition">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition">Portfolio</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@adora.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Location: San Francisco, CA</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="space-y-2 text-sm">
              <p><a href="#" className="hover:text-accent transition">Twitter</a></p>
              <p><a href="#" className="hover:text-accent transition">LinkedIn</a></p>
              <p><a href="#" className="hover:text-accent transition">Instagram</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="text-center text-sm">
            <p>&copy; 2024 Adora. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
