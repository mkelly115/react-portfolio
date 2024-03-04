
const Project = ({ title, description, image, technologies, href }) => {
  return (
      <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={href} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={title} style={{ maxWidth: '100%', cursor: 'pointer' }} />
          </a>
          <p>Technologies: {technologies.join(', ')}</p>
      </div>
  );
};

export default Project;