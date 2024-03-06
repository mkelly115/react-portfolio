// basic styled, couldnt get the images centered.

// const Project = ({ title, description, image, technologies, href }) => {
//   return (
//       <div>
//           <h2>{title}</h2>
//           <p>{description}</p>
//           <a href={href} target="_blank" rel="noopener noreferrer">
//               <img src={image} alt={title} style={{ maxWidth: '100%', cursor: 'pointer' }} />
//           </a>
//           <p>Technologies: {technologies.join(', ')}</p>
//       </div>
//   );
// };

// export default Project;

// tech box below image

// const Project = ({ title, description, image, technologies, href }) => {
//   return (
//     <div className="project-container mb-4">
//       <div className="row align-items-center">
//         <div className="col-md-6 text-center mb-3">
//           <h2 className="project-title">{title}</h2>
//           <p>{description}</p>
//         </div>
//         <div className="col-md-6">
//           <a href={href} target="_blank" rel="noopener noreferrer">
//             <img src={image} alt={title} className="img-fluid cursor-pointer" />
//           </a>
//           <div className="technologies-box border p-3 mt-3">
//             <p className="font-weight-bold mb-2">Technologies:</p>
//             <p className="m-0">{technologies.join(', ')}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

// Tech Box below paragraph

// const Project = ({ title, description, image, technologies, href }) => {
//   return (
//     <div className="project-container mb-4">
//       <div className="row align-items-center">
//         <div className="col-md-6 order-md-1">
//           <h2 className="project-title">{title}</h2>
//           <p>{description}</p>
//           <div className="technologies-box border p-3 mt-3">
//             <p className="font-weight-bold mb-2">Technologies:</p>
//             <p className="m-0">{technologies.join(', ')}</p>
//           </div>
//         </div>
//         <div className="col-md-6 order-md-2 text-center">
//           <a href={href} target="_blank" rel="noopener noreferrer">
//             <img src={image} alt={title} className="img-fluid cursor-pointer" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

const Project = ({ title, description, image, technologies, href }) => {
  return (
    <div className="project-container mb-4 p-3 shadow">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="project-details">
            <h2 className="project-title mb-3">{title}</h2>
            <p className="project-description">{description}</p>
            <div className="technologies-box border p-3 mt-3">
              <p className="font-weight-bold mb-2">Technologies:</p>
              <p className="m-0">{technologies.join(', ')}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
            <img src={image} alt={title} className="img-fluid cursor-pointer rounded" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;