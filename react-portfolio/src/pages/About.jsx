import placeHolder from "../assets/No-Image-Placeholder.svg.png";
import Layout from "../layouts/layout";

const AboutMe = () => {
  return (
    <Layout>
      <section className="container d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 mb-3 d-flex justify-content-center">
            <img
              src={placeHolder}
              alt="Michael Kelly"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-12 col-lg-6 d-flex align-items-center">
            <div>
              <h2 className="text-center">Michael Kelly</h2>
              <h3 className="text-center text-muted">
                Full Stack Web Developer | Problem-Solver | Team Player
              </h3>
              <br />
              <p>
                Welcome! I’m a passionate and results-driven full-stack web
                developer with a certificate in web development from the
                University of New Hampshire.
              </p>
              <p>
                My background blends modern web technologies like JavaScript,
                React, and Node with strong leadership and problem-solving
                skills built through years in management and emergency services.
              </p>
              <p>
                I specialize in designing, building, and deploying dynamic
                applications that balance functionality, performance, and user
                experience. Whether collaborating in a fast-paced team
                environment or tackling challenges independently, I thrive on
                delivering solutions that exceed expectations.
              </p>
              <p>
                I am currently seeking opportunities in full-stack or front-end
                development, where I can apply my skills to build scalable
                applications, contribute to innovative projects, and grow as
                part of a collaborative team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMe;