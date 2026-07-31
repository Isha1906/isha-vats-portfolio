import { useState } from "react";
const Contact = () => {
  const [submitted, setSubmitted]=useState(false);
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center">Get In Touch</h2>
      <div className="contact-card row mb-5 text-center">
      <p>Email:{" "}
      <a href="mailto:ivats.nic@gmail.com">
        ivats.nic@gmail.com
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
