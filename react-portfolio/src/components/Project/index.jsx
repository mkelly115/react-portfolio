
const Project = ({ title, description, image, technologies }) => {
  return (
      <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={image} alt={title} style={{ maxWidth: '100%' }} />
          <p>Technologies: {technologies.join(', ')}</p>
      </div>
  );
};

export default Project;