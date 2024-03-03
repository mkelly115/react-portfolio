const ResumeDownload = () => {
    const handleDownload = () => {
      const filename = 'Michael A Kelly Resume (2).pdf';
      const link = document.createElement('a');
  
      link.href = `../assets/react-portfolio/src/assets/${filename}`;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center vh-90">
        <div className='text-center'>
          <h1>Michael Kelly's Resume</h1>
          <p>Click the button below to download a copy of my work history and skills</p>
          <button className="btn btn-primary" onClick={handleDownload}>Download Resume</button>
        </div>
      </div>
    );
  };
  
  export default ResumeDownload;
  