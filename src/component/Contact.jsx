import "../style/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>

      <p className="contact-subtitle">
        Feel free to connect with me for opportunities, collaborations, or just
        to say hello.
      </p>

      <div className="contact-card">

        <div className="contact-item">
          <span>Email: </span>
          <a href="mailto:ivats.nic@gmail.com">
            ivats.nic@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span>Github: </span>
          <a
            href="https://github.com/Isha1906"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Isha1906
          </a>
        </div>

        <div className="contact-item">
          <span>LinkedIn: </span>
          <a
            href="https://linkedin.com/in/vats-isha"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/vats-isha
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;