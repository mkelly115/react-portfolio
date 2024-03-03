import placeHolder from '../assets/No-Image-Placeholder.svg.png';
import Layout from '../layouts/layout';

const AboutMe = () => {
  return (
    <Layout>
      <section className="container-fluid d-flex flex-column align-items-center justify-content-center">
        <div className="row">
          <div className="col-md-12 col-lg-4 mb-3">
            <img src={placeHolder} alt="Michael Kelly" className="img-fluid" />
          </div>
          <div className="col-md-12 col-lg-8">
            <h2>Michael Kelly</h2>
            <h3>Full Stack Web Developer</h3>
            <br />
            <p>
              Welcome to my portfolio for full stack web development! I am just completing my class in HTML, CSS, JavaScript, MySQL, MongoDB, and React.
            </p>
            <br />
            <p>
              I am originally from Cranford, New Jersey where I was born and raised. I lived there until the age of 18 when I traveled to Biddeford, Maine
              to go to college at the University of New England where I majored in Political Science and played rugby for four years. I still reside in the
              New England area after falling in love with it.
            </p>
            <br />
            <p>
              It was after college that I proceeded to work a large array of fields finding exactly what would bring me the most happiness. My background
              includes time as a store manager of a million-dollar store, work as a senate aid, and a career in firefighting. After a bout of illness during
              my firefighting career, I have deemed it important to find a career that works for me. I have always been what people would describe as a "nerd,"
              but it had never come to mind that I could make a career of that. I jumped headfirst into coursework to learn full stack web development and as
              time went on I learned more not only about the field but about my love for problem-solving and the logic of how coding works.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMe;