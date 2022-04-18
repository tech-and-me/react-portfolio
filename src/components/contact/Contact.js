import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h1>Get In Touch</h1>
      <h2>Contact Me</h2>

      <div className="container contact_container" >
        <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_option-icon"/>
              <h4>Email</h4>
              <h5>pharyphal@icloud.com</h5>
              <a href="mailto:pharyphal@icloud.com" target="_blank">Send me a message</a>
            </article>

            {/* <article className="contact_option">
              <MdOutlineEmail className="contact_option-icon"/>
              <h4>Twitter</h4>
              <h5>tech-and-me</h5>
              <a href="mailto:pharyphal@icloud.com" target="_blank">Send me a message</a>
            </article> */}

            <article className="contact_option">
              <BsWhatsapp className="contact_option-icon"/>
              <h4>WhatsApp</h4>
              <h5>+61430177557</h5>
              <a href="https://api.whatsapp.com/send?phone=+61430177557" target="_blank">Send me a message</a>
            </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="" rows="7" placeholder="Your Message" required></textarea>
          <button className="btn btn-primary" type="submit">Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact