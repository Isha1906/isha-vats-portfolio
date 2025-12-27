const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-card">
      <p>Email:{" "}
      <a href="mailto:ivats.nic@gmail.com">
        ivats.nic@gmailcom
      </a>
      </p>

      <p>HackerRank:{" "}
      <a href="https://www.hackerrank.com/profile/ivats_nic" target="_blank">
      hackerrank.com/profile/ivats_nic
      </a> 
      </p>

      <p>GitHub:{" "}
      <a href="https://www.github.com/Isha1906">github.com/Isha1906
      </a>
      </p>
      <p>LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/vats-isha"
          target="_blank"
        >
          linkedin.com/in/vats-isha
        </a>
      </p>
      </div>

      <div className="contact-form">
      <h3>Send me a message</h3>
      <form
       
        name="contact"
        method="POST"
        className="contact-form"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <input type="text" className="form-control" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit" className="btn btn-success">Send Message</button>
      </form>
      </div>  
    </section>
  );
};

export default Contact;
