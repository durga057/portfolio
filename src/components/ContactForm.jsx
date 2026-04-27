import '../styles/ContactForm.css';

function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <form
        className="contact-form"
        action="https://docs.google.com/forms/d/e/1FAIpQLSfQd09xOjUSKg_cMR7l_-ulrm-BbV86D93LwNdznksPb5og0Q/formResponse"
        method="POST"
        target="_blank"
      >
        <input
          type="text"
          name="entry.2005620554"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="entry.1045781291"
          placeholder="Your Email"
          required
        />

        <textarea
          name="entry.839337160"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
