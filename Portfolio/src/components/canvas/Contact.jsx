import React from 'react'
import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser'
import {styles} from '../../styles'
import EarthCanvas from './EarthCanvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_xnib8wg',
      'template_8q4sgmj',
      {
        from_name: form.name,
        to_name: 'Yashi',
        from_email: form.email,
        to_email: 'yashigupta331102@gmail.com',
        message: form.message,
      },
      'QzK76cbySJARtIYUz'
    ).then(()=>{
      setLoading(false);
      alert("Thankyou, I will get back to you as soon as possible.");

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error)=>{
      setLoading(false)
      console.log(error)
      alert('Something went wrong')
    })
  }

  return (
   <div className='xl:mt-7 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
    <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
     <p className={styles.sectionSubText}>Get in touch</p>
     <h3 className={styles.sectionHeadText}>Contact</h3>
    

    <motion.div variants={slideIn('left', 'tween', 0.1, 1)} className='bg-black-100  p-8 rounded-2xl'>
      <form ref={formRef} onSubmit={handleSubmit}
      className='mt-12 md-0 flex flex-col gap-8'>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input type="text" value={form.name} name="name" onChange={handleChange} className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none`} placeholder="What's your name?" />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Email</span>
          <input type="text" value={form.email} name="email" onChange={handleChange} className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none`} placeholder="What's your Email?" />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Any Message ?</span>
          <textarea type="text" rows={7} value={form.message} name="message" onChange={handleChange} className={`bg-tertiary py-4 px-6 w-full  placeholder:text-secondary text-white rounded-lg outline-none`} placeholder="What do you want to say? " />
        </label>

        <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' onSubmit={handleSubmit}>{loading ? 'Sending' : 'Send'}</button>

      </form>
    </motion.div>
    </motion.div>

    <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
    <EarthCanvas/>
    </motion.div>
   </div>
  )
}

export default SectionWrapper(Contact, 'contact')