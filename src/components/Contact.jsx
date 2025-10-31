import { useState } from 'react'
import Input from './Input.jsx'
import {validateName, validateEmail, validateMessage} from '../utils/validators.js'

export default function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      message: '',
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [submitted, setSubmitted] = useState(false)
  
    const handleChange = (field) => (e) => {
      const value = e.target.value
      setFormData(prev => ({ ...prev, [field]: value }))
      
      if (touched[field]) {
        let error = ''
        if (field === 'name') error = validateName(value)
        else if (field === 'email') error = validateEmail(value)
        else if (field === 'message') error = validateMessage(value)
        setErrors(prev => ({ ...prev, [field]: error }))
      }
    }
  
    const handleBlur = (field) => () => {
      setTouched(prev => ({ ...prev, [field]: true }))
      
      let error = ''
      if (field === 'name') error = validateName(formData.name)
      else if (field === 'email') error = validateEmail(formData.email)
      else if (field === 'message') error = validateMessage(formData.message)
      setErrors(prev => ({ ...prev, [field]: error }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      
      const newTouched = { name: true, email: true, message: true }
      setTouched(newTouched)
      
      const nameErr = validateName(formData.name)
      const emailErr = validateEmail(formData.email)
      const messageErr = validateMessage(formData.message)
      
      const newErrors = {
        name: nameErr,
        email: emailErr,
        message: messageErr,
      }
      setErrors(newErrors)
      
      if (!nameErr && !emailErr && !messageErr) {
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: '', email: '', company: '', message: '' })
          setTouched({})
          setErrors({})
        }, 3000)
      }
    }
  
    return (
      <section className="section" aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title" style={{ fontSize: 'var(--fs-2xl)', margin: 0 }}>Get in touch</h2>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 6 }}>
            Ready to get started? Contact our team today.
          </p>
  
          {submitted && (
            <div style={{
              marginTop: 'var(--space-6)',
              padding: 'var(--space-4)',
              background: 'var(--color-brand)',
              color: '#fff',
              borderRadius: 'var(--radius-md)',
            }}>
              Thank you! We'll be in touch soon.
            </div>
          )}
  
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: 'var(--space-8)' }}>
            <Input
              id="name"
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              error={errors.name}
            />
  
            <Input
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
            />
  
            <Input
              id="company"
              label="Company (optional)"
              type="text"
              value={formData.company}
              onChange={handleChange('company')}
              description="Your company name"
            />
  
            <Input
              id="message"
              label="Message"
              type="textarea"
              value={formData.message}
              onChange={handleChange('message')}
              onBlur={handleBlur('message')}
              error={errors.message}
              description="Tell us about your needs"
            />
  
            <button type="submit" className="btn" style={{ width: '100%', marginTop: 'var(--space-4)' }}>
              Send message
            </button>
          </form>
        </div>
      </section>
    )
  }