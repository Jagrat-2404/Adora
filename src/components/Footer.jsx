import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-card text-muted-foreground py-12 mt-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">🎨 Adora</h3>
            <p className="text-sm">Creating beautiful digital experiences</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition">Portfolio</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@adora.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Location: San Francisco, CA</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Follow Us</h4>
            <div className="space-y-2 text-sm">
              <p><a href="#" className="hover:text-primary transition">Twitter</a></p>
              <p><a href="#" className="hover:text-primary transition">LinkedIn</a></p>
              <p><a href="#" className="hover:text-primary transition">Instagram</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center text-sm">
            <p>&copy; 2024 Adora. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
