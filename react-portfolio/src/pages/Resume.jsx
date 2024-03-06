import Layout from "../layouts/layout";

const ResumeDownload = () => {
    const handleDownload = () => {
        const filename = 'Michael A Kelly Resume (2).pdf';
        const link = document.createElement('a');

        link.href = `./${filename}`;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Layout>
            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
                <div className='text-center'>
                    <h1>Michael Kelly's Resume</h1>
                    <p>Click the button below to download a copy of my work history and skills</p>
                    <button className="btn mb-3" style={{color: 'white', backgroundColor: '#333'}} onClick={handleDownload}>Download Resume</button>
                    <div className="developer-skills mt-4">
                        <h4>Developer Proficiencies</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-group">
                                    <li className="list-group-item">HTML</li>
                                    <li className="list-group-item">JavaScript</li>
                                    <li className="list-group-item">CSS</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group">
                                    <li className="list-group-item">mySQL</li>
                                    <li className="list-group-item">noSQL</li>
                                    <li className="list-group-item">React</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ResumeDownload;
