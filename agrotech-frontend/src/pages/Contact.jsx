import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import TextInput from '../components/forms/TextInput';
import TextareaInput from '../components/forms/TextareaInput';
import SelectInput from '../components/forms/SelectInput';
import Button from '../components/ui/Button';
import './Contact.css'; 

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Your message has been sent. We'll get back to you soon!");
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    }
  };

  return (
    <div className="page-transition">
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtext">
              Have questions or need assistance? Our team is here to help you get the most out of AgroTech.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-box">
              <div className="icon-wrapper">
                <MapPin size={24} className="icon-primary" />
              </div>
              <h3>Our Location</h3>
              <p>IIIT Lucknow<br />Ahmamau, Lucknow</p>
            </div>

            <div className="info-box">
              <div className="icon-wrapper">
                <Phone size={24} className="icon-primary" />
              </div>
              <h3>Phone Number</h3>
              <p>General: 987654321<br />Support: 987654321<br />Sales: 987654321</p>
            </div>

            <div className="info-box">
              <div className="icon-wrapper">
                <Mail size={24} className="icon-primary" />
              </div>
              <h3>Email Address</h3>
              <p>General: info@agrotech.com<br />Support: support@agrotech.com<br />Sales: sales@agrotech.com</p>
            </div>

            <div className="info-box">
              <div className="icon-wrapper">
                <Clock size={24} className="icon-primary" />
              </div>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 8AM - 8PM<br />Saturday: 9AM - 5PM<br />Sunday: Closed</p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-wrapper">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-row">
                  <TextInput
                    label="Full Name"
                    {...register('name', { required: 'Name is required' })}
                    error={errors.name?.message}
                    placeholder="Avinash Singh"
                    required
                  />
                  <TextInput
                    label="Email Address"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    error={errors.email?.message}
                    placeholder="your@iiitl.ac.in"
                    required
                  />
                </div>

                <div className="input-row">
                  <TextInput
                    label="Phone Number"
                    type="tel"
                    {...register('phone', {
                      pattern: {
                        value: /^[\d\+\-\(\) ]+$/,
                        message: 'Invalid phone number'
                      }
                    })}
                    error={errors.phone?.message}
                    placeholder="12345678"
                  />

                  <SelectInput
                    label="Subject"
                    {...register('subject', { required: 'Subject is required' })}
                    error={errors.subject?.message}
                    options={[
                      { value: 'general', label: 'General Inquiry' },
                      { value: 'support', label: 'Technical Support' },
                      { value: 'sales', label: 'Sales Question' },
                      { value: 'partnership', label: 'Partnership Opportunity' },
                      { value: 'feedback', label: 'Feedback' }
                    ]}
                    required
                  />
                </div>

                <div className="input-full">
                  <TextareaInput
                    label="Message"
                    rows={6}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    error={errors.message?.message}
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="form-button">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about AgroTech</p>
          </div>

          <div className="faq-list">
            {[
              {
                q: 'How do I get started with AgroTech?',
                a: `Getting started is easy! Simply create an account, select your role (farmer or middleman), 
                  complete your profile, and you'll be ready to list crops or browse available products.`
              },
              {
                q: 'How are transactions secured on the platform?',
                a: `We use an escrow system. Payments are held until the buyer confirms receipt and satisfaction.`
              },
              {
                q: 'What fees does AgroTech charge?',
                a: `We charge a 2% fee on completed trades. No listing or membership fees.`
              },
              {
                q: 'How does the logistics and delivery system work?',
                a: `We work with logistics partners to offer delivery or pickup options. Everything is tracked.`
              },
              {
                q: "What if there's a dispute with my transaction?",
                a: `We have a structured dispute resolution process with investigation and support.`
              }
            ].map((item, i) => (
              <details className="faq-item" key={i}>
                <summary>{item.q}</summary>
                <div><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
