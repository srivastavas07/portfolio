import React from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import Earth from './canvas/Earth';
import emailJs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_KEY;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_KEY;
  // console.log(API_KEY, SERVICE_ID, TEMPLATE_ID);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailJs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: form.name,
      to_name: "Kunal",
      from_email: form.email,
      to_email: "lalakalaunda156@gmail.com",
      message: form.message,

    }, API_KEY)
      .then(() => {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        })
        toast.success("Thanks for Contacting will get back ASAP!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error('Something went wrong!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })


  }

  return (
    // bg-[#1d1836]
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden '>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.80] mr-2 bg-black-200 gradient-border border-transparent border p-8 rounded-none'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name='name' required value={form.name} onChange={handleChange} placeholder='What is your name?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white  outline-none input-txt font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' required value={form.email} onChange={handleChange} placeholder='What is your email?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none input-txt font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white  outline-none input-txt font-medium'
            />
          </label>
          {

          }
          <button type='submit' className='connect-button hero-btn px-8 py-3 w-fit text-white font-bold shadow-md shadow-primary'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <Earth />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");