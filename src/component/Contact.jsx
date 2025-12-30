const Contact = () => {
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center">Get In Touch</h2>
      <div className="contact-card row mb-5 text-center">
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

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
