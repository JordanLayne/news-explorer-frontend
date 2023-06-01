import Wrapper from "../assets/wrappers/About";
import pfp from "../assets/images/pfp.svg";
const About = () => {
  return (
    <Wrapper>
      <img className="about-img" src={pfp} alt="profile" />
      <div>
        <h1 className="about-title">About the author</h1>
        <p className="about-text">
          Hello, I'm Jordan, a full-stack developer proficient in HTML, CSS,
          JavaScript, React, Firebase, Django, Tailwind CSS, TypeScript,
          Node.js, and Python. With expertise in creating visually appealing
          user interfaces, developing robust server-side solutions using Django,
          managing databases, designing RESTful APIs, and integrating Firebase
          for seamless functionality, I deliver exceptional results across the
          full-stack development process. If you need a skilled developer in
          React, Django, Firebase, Tailwind CSS, TypeScript, and more, feel free
          to reach out. I'm excited to help you achieve your goals.
        </p>
      </div>
    </Wrapper>
  );
};
export default About;
