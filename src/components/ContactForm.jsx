import '../styles/ContactForm.css';

function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <form
        className="contact-form"
        action="https://docs.google.com/forms/d/e/1FAIpQLSdIftEN9Bvh5gzeVK8uB9E_ie0FXxYGxxmHmEYpB5N-y-sFUw/formResponse"
        method="POST"
        target="_blank"
      >
        <input
          type="text"
          name="entry.221568427"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="entry.571016597"
          placeholder="Your Email"
          required
        />

        <textarea
          name="entry.501770643"
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
