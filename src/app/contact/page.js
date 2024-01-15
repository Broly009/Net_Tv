import ContactForm from "../components/ContactForm"
import Contactcard from "../components/Contactcard"
import styles from "@/app/contact/contact.module.css"

const Contact = () => {
  return (
    <>
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <Contactcard/>

      <section className={styles.contact_section}>
          <h2>We'd love to hear <span> from you </span></h2>
              <ContactForm />
      </section>
    </div>
    <iframe src="https://www.google.com/maps/embed?
    pb=!1m18!1m12!1m3!1d14748.28245103449!2d87.95771022341378!3d
    22.46398062173977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!
    3m3!1m2!1s0x3a029a54ba768e6d%3A0x4cd78fd6271b4c9!2sBagnan%2
    C%20West%20Bengal%20711303!5e0!3m2!1sen!2sin!4v170525650601
    8!5m2!1sen!2sin"className={styles.mapping} width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Contact