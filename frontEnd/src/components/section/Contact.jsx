import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import RevealOnScroll from '../RevealOnScroll'
import { useTranslation } from 'react-i18next'

// Simple inline toast component
function Toast({ message, type, onDismiss }) {
  if (!message) return null;
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl border backdrop-blur-md
        transition-all duration-500 animate-fade-in-up
        ${type === 'success'
          ? 'bg-green-500/15 border-green-500/30 text-green-300'
          : 'bg-red-500/15 border-red-500/30 text-red-300'
        }`}
    >
      <span className="text-lg">{type === 'success' ? '✓' : '✕'}</span>
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onDismiss} className="ml-2 opacity-60 hover:opacity-100 transition-opacity text-xs">
        ✕
      </button>
    </div>
  );
}

function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ message: '', type: '' })

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: '', type: '' }), 4000);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        showToast(t('contact.alertSuccess', "Message sent! I'll get back to you soon."), 'success')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(() => {
        showToast(t('contact.alertError', 'Something went wrong. Please try again.'), 'error')
      })
      .finally(() => setLoading(false))
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm transition-all duration-200 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500/30'

  return (
    <>
      <section id="contact" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
          <div className="px-4 w-full max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center">
              {t('contact.title', "Let's Talk")}
            </h2>
            <p className="text-center text-gray-400 mb-8 text-sm md:text-base">
              {t('contact.subtitle', "Have a project in mind? I'd love to hear about it.")}
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                className={inputClass}
                placeholder={t('contact.namePlaceholder', 'Your name')}
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                className={inputClass}
                placeholder={t('contact.emailPlaceholder', 'your@email.com')}
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                required
                className={`${inputClass} resize-none`}
                rows={5}
                placeholder={t('contact.messagePlaceholder', 'Tell me about your project...')}
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    {t('contact.sending', 'Sending...')}
                  </>
                ) : (
                  t('contact.sendButton', 'Send Message')
                )}
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </section>

      <Toast message={toast.message} type={toast.type} onDismiss={() => setToast({ message: '', type: '' })} />

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.3s ease-out; }
      `}</style>
    </>
  )
}

export default Contact