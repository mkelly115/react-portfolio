import placeHolder from '../assets/No-Image-Placeholder.svg.png';
import Layout from '../layouts/layout';

const AboutMe = () => {
  return (
    <Layout>
      <section className="container d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 mb-3 d-flex justify-content-center">
            <img src={placeHolder} alt="Michael Kelly" className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="col-md-12 col-lg-6 d-flex align-items-center">
            <div>
              <h2 className="text-center">Michael Kelly</h2>
              <h3 className="text-center">Full Stack Web Developer</h3>
              <br />
              <p>
                Welcome to my portfolio for full-stack web development! I am a recent graduate of the University of New Hampshires full-stack web development certificate program.
              </p>
              <br />
              <p>
                I have an extensive background that includes management and emergency services. I am confident this unique combination will bring any team a deep skill set of both coding and interpersonal skills needed to excel in all aspects of the business.
              </p>
              <br />
              <p>
                I currently reside in the New England area and am looking forward to showcasing my skills and abilities to any prospective employer. I am driven to constantly be learning and improving my skills. I am currently seeking a career in full-stack or front-end web development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMe;