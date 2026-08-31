import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-card py-16 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">We'd love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-primary">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">📍 Address</h3>
                  <p className="text-muted-foreground">123 Design Street<br />San Francisco, CA 94105</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">📧 Email</h3>
                  <p className="text-muted-foreground">info@adora.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">📱 Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">🕐 Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-primary">Send us a Message</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 text-green-700 dark:text-green-400 rounded-lg font-semibold border border-green-500/30">
                  ✓ Message sent successfully! We'll be in touch soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-foreground"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-foreground"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-foreground resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
