import React, { useState } from 'react'
import emailjs from 'emailjs-com'
function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    

    
    const handelSubmit = (e)=>{
        event.preventDefault()

        emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
            alert("Message Send");
            setFormData({name: "", email: "", message: ""})
        }).catch(()=>{alert("somthing went wrong !!!")})
    }

  return (
    <section id='contact' className='min-h-screen flex items-center justify-center relative'>
        <div className='px-4 w-150'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                Get In Toutch
            </h2>
            <form className='space-y-6' onSubmit={handelSubmit}>
                <div className='relative'>
                    <input type='text' id="name" name='name' required className='w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                    placeholder='Name...' value={formData.name}
                    onChange={(e)=> setFormData({...formData, name: e.target.value})}></input>
                </div>

                <div className='relative'>
                    <input type='email' id="email" name='email' required className='w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                    placeholder='example@gmail.com...' value={formData.email}
                    onChange={(e)=> setFormData({...formData, email: e.target.value})}></input>
                </div>

                <div className='relative'>
                    <textarea id="message" name='message' required className='w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                    rows={5} placeholder='your message...' value={formData.message}
                    onChange={(e)=> setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact