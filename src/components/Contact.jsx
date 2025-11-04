import React, { useState, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus on first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      const field = formRef.current.querySelector(`[name="${firstErrorField}"]`);
      if (field) field.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            share your feedback
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>You can reach me at</h3>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>chetancsk3000@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone No</strong>
                <p>+91 7569493772</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <strong>LinkedIn</strong>
                <a href="https://www.linkedin.com/in/chetancsk3000" target="_blank">www.linkedin.com/in/chetancsk3000</a>
              </div>
            </div>
          </div>

          <form 
            className="contact-form" 
            onSubmit={handleSubmit}
            ref={formRef}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input ${errors.name ? 'error' : ''}`}
                aria-describedby={errors.name ? 'name-error' : undefined}
                aria-required="true"
              />
              {errors.name && (
                <span id="name-error" className="error-message" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-required="true"
              />
              {errors.email && (
                <span id="email-error" className="error-message" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`form-input ${errors.subject ? 'error' : ''}`}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                aria-required="true"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Collaborations</option>
                <option value="support">Hiring</option>
                <option value="press">Others</option>
              </select>
              {errors.subject && (
                <span id="subject-error" className="error-message" role="alert">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`form-input ${errors.message ? 'error' : ''}`}
                rows="5"
                aria-describedby={errors.message ? 'message-error' : undefined}
                aria-required="true"
              ></textarea>
              {errors.message && (
                <span id="message-error" className="error-message" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
              aria-describedby={submitStatus ? 'submit-status' : undefined}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus && (
              <div 
                id="submit-status" 
                className={`form-status ${submitStatus}`}
                role="alert"
                aria-live="polite"
              >
                {submitStatus === 'success' && (
                  <span>✅ Thank you! Your message has been sent successfully.</span>
                )}
                {submitStatus === 'error' && (
                  <span>❌ Sorry, there was an error sending your message. Please try again.</span>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
