import { useState } from 'react'

const PROJECT_TYPES = ['Website', 'Product', 'Consulting', 'Partnership', 'Other']

const FORMSUBMIT_EMAIL = 'acaraeni10@gmail.com'
const FORMSUBMIT_URL = `https://formsubmit.co/${encodeURIComponent(FORMSUBMIT_EMAIL)}`

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  details: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    if (status === 'success' || status === 'error') setStatus('idle')
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const fd = new FormData()
    fd.append('name', formData.name)
    fd.append('email', formData.email)
    fd.append('phone', formData.phone)
    fd.append('company', formData.company)
    fd.append('project_type', formData.projectType)
    fd.append(
      'message',
      [
        `Project type: ${formData.projectType || '—'}`,
        '',
        'Details:',
        formData.details || '—',
      ].join('\n'),
    )
    fd.append('_subject', `Website contact from ${formData.name}`)
    fd.append('_captcha', 'false')

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setFormData(emptyForm)
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact section-pad" aria-labelledby="contact-heading">
      <div className="container-page">
        <h2 id="contact-heading" className="contact-heading">
          Get In Touch
        </h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <h3 className="contact-block-title">Get In Touch</h3>
              <div className="contact-row">
                <span className="contact-label">EMAIL</span>
                <a href="mailto:business@adrianacaraeni.com" className="contact-value">
                  business@adrianacaraeni.com
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-label">LINKEDIN</span>
                <a
                  href="https://linkedin.com/in/adrianacaraeni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  linkedin.com/in/adrianacaraeni
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-label">INSTAGRAM</span>
                <a
                  href="https://instagram.com/redshirtblackskirt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  @redshirtblackskirt
                </a>
              </div>
            </div>
            <div className="contact-block">
              <h3 className="contact-block-title">Follow Me</h3>
              <div className="contact-row">
                <span className="contact-label">GITHUB</span>
                <a
                  href="https://github.com/Adriana-Caraeni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  github.com/Adriana-Caraeni
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap surface-card">
            <h3 className="contact-form-title">Send A Message</h3>
            <p className="contact-form-sub">Fill out the form below to start your new journey.</p>
            {status === 'success' && (
              <p className="contact-form-feedback contact-form-feedback--ok" role="status">
                Thanks — your message was sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form-feedback contact-form-feedback--err" role="alert">
                Something went wrong. Please email{' '}
                <a href={`mailto:${FORMSUBMIT_EMAIL}`}>{FORMSUBMIT_EMAIL}</a> directly.
              </p>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <label className="contact-form-label">
                  <span>FIRST AND LAST NAME</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    disabled={status === 'sending'}
                  />
                </label>
                <label className="contact-form-label">
                  <span>EMAIL ADDRESS</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    disabled={status === 'sending'}
                  />
                </label>
              </div>
              <div className="contact-form-row">
                <label className="contact-form-label">
                  <span>PHONE NUMBER</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    disabled={status === 'sending'}
                  />
                </label>
                <label className="contact-form-label">
                  <span>COMPANY NAME</span>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    disabled={status === 'sending'}
                  />
                </label>
              </div>
              <label className="contact-form-label contact-form-label--full">
                <span>PROJECT TYPE</span>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`contact-form-select ${!formData.projectType ? 'contact-form-select--placeholder' : ''}`}
                  disabled={status === 'sending'}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="contact-form-label contact-form-label--full">
                <span>PROJECT DETAILS</span>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  disabled={status === 'sending'}
                />
              </label>
              <button
                type="submit"
                className="contact-form-submit btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
