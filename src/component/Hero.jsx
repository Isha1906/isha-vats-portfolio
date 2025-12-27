import resume from "../assets/ISHA-VATS.pdf";

const Hero = () => {
  return (
    <section style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>Hi, I’m Isha Vats</h1>
      <p>MCA Graduate | Software Developer</p>
      <p>Frontend • Backend • Full-Stack Development</p>

      <a
        href={resume}
        download
        style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "#fff",
          borderRadius: "5px"
        }}
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
