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
          <span>📧</span>
          <a href="mailto:ivats.nic@gmail.com">
            ivats.nic@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span>💻</span>
          <a
            href="https://github.com/Isha1906"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Isha1906
          </a>
        </div>

        <div className="contact-item">
          <span>🔗</span>
          <a
            href="https://linkedin.com/in/vats-isha"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/vats-isha
          </a>
        </div>

        <div className="contact-item">
          <span>🏆</span>
          <a
            href="https://www.hackerrank.com/profile/ivats_nic"
            target="_blank"
            rel="noreferrer"
          >
            HackerRank Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;