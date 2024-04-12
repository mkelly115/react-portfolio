// import gitHubImg from '../../assets/github-mark.png';


// const Project = ({ title, description, image, technologies, href, liveLink }) => {
//   return (
//     <div className="project-container mb-4 p-3 shadow rounded">
//       <div className="row align-items-center">
//         <div className="col-md-6">
//           <div className="project-details">
//             <h2 className="project-title mb-3">{title}</h2>
//             <p className="project-description">{description}</p>
//             <div className="technologies-box border p-3 mt-3 techbox mb-md-0 mb-2">
//               <p className="font-weight-bold mb-2">Technologies:</p>
//               <p className="m-0">{technologies.join(', ')}</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 text-center">
//           <div className="d-flex flex-column align-items-center">
//             <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link mb-2">
//               <img src={image} alt={title} className="img-fluid cursor-pointer rounded" style={{ maxHeight: '150px' }} />
//             </a>
//             <a href={href} target="_blank" rel="noopener noreferrer" className="badge-link mt-2">
//               <img src={gitHubImg} alt="GitHub" className="github-badge img-fluid" style={{ maxWidth: '50px', maxHeight: '50px' }} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;


import gitHubImg from '../../assets/github-mark.png';

const Project = ({ title, description, image, technologies, href, liveLink }) => {
  return (
    <div className="project-container mb-4 p-3 shadow rounded">
      <div className="row align-items-center">
        <div className="col-md-12 text-center">
          <div className="project-details">
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link mb-2">
              <img src={image} alt={title} className="img-fluid cursor-pointer rounded" style={{ maxWidth: '80%', maxHeight: 'auto' }} />
            </a>
            <h2 className="project-title mb-3 mt-3">{title}</h2>
            <p className="project-description">{description}</p>
            <div className="technologies-box border p-3 mt-3 mb-2">
              <p className="font-weight-bold mb-2">Technologies:</p>
              <p className="m-0">{technologies.join(', ')}</p>
            </div>
            <a href={href} target="_blank" rel="noopener noreferrer" className="badge-link mt-2">
              <img src={gitHubImg} alt="GitHub" className="github-badge img-fluid" style={{ maxWidth: '50px', maxHeight: '50px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;