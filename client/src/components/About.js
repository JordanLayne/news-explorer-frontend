import Wrapper from "../assets/wrappers/About";
import pfp from "../assets/images/pfp.svg";
const About = () => {
  return (
    <Wrapper>
      <img className="about-img" src={pfp} alt="profile" />
      <div>
        <h1 className="about-title">About the author</h1>
        <p className="about-text">
          I'm Jordan Layne, a software developer specializing in web development.
          With expertise in JavaScript, React, Node.js, and MongoDB, I enjoy
          creating user-friendly and innovative applications. I successfully
          completed the Practicum Software Developer program, where I gained
          hands-on experience in building real-world projects. My skills include
          developing interactive web applications, implementing RESTful APIs,
          and managing databases. I prioritize clean code, adhere to industry
          standards, and am committed to delivering high-quality solutions.
          Let's collaborate and bring your ideas to life!
        </p>
      </div>
    </Wrapper>
  );
};
export default About;
