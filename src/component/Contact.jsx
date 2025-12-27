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
    </section>
  );
};

export default Contact;
