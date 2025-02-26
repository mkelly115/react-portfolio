import { useState } from 'react';
import Layout from "../layouts/layout";

const ResumeDownload = () => {
    const handleDownload = () => {
        const filename = 'Michael-Kelly-Resume.pdf';
        const link = document.createElement('a');

        link.href = `./${filename}`;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // State for managing accordion toggles
    const [accordionOpen, setAccordionOpen] = useState({
        front: false,
        back: false,
        db: false,
        host: false,
    });

    // Function to toggle accordion
    const toggleAccordion = (section) => {
        setAccordionOpen(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <Layout>
            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', padding: '20px' }}>
                <div className='text-center'>
                    <h1>Michael Kelly's Resume</h1>
                    <p>Click the button below to download a copy of my work history and skills</p>
                    <button className="btn mb-3" style={{ color: 'white', backgroundColor: '#6495ed' }} onClick={handleDownload}>Download Resume</button>
                    <div className="developer-skills mt-4">
                        <h4>Developer Proficiencies</h4>
                        <br></br>
                        <div className="accordion" id="developerAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingHTML">
                                    <button className={`accordion-button ${accordionOpen.front ? '' : 'collapsed'}`} style={{ color: 'white', backgroundColor: '#4365a3' }} type="button" onClick={() => toggleAccordion('html')}>
                                        Front-End Development
                                    </button>
                                </h2>
                                <div id="collapseHTML" className={`accordion-collapse collapse ${accordionOpen.html ? 'show' : ''}`} aria-labelledby="headingHTML">
                                    <div className="accordion-body">
                                        HTML, CSS, JavaScript, jQuery, Bootstrap, MaterialUI, React, Next.Js
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingJavaScript">
                                    <button className={`accordion-button ${accordionOpen.back ? '' : 'collapsed'}`} style={{ color: 'white', backgroundColor: '#6495ed' }} type="button" onClick={() => toggleAccordion('javascript')}>
                                        Back-End Development
                                    </button>
                                </h2>
                                <div id="collapseJavaScript" className={`accordion-collapse collapse ${accordionOpen.javascript ? 'show' : ''}`} aria-labelledby="headingJavaScript">
                                    <div className="accordion-body">
                                        Node.js, Express.js, GraphQL, JWT
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingCSS">
                                    <button className={`accordion-button ${accordionOpen.db ? '' : 'collapsed'}`} style={{ color: 'white', backgroundColor: '#4365a3' }} type="button" onClick={() => toggleAccordion('db')}>
                                        Database Technologies
                                    </button>
                                </h2>
                                <div id="collapseCSS" className={`accordion-collapse collapse ${accordionOpen.db ? 'show' : ''}`} aria-labelledby="headingCSS">
                                    <div className="accordion-body">
                                        MySQL, MySQL Workbench, Sequelize, Mongoose, MongoDB
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingCSS">
                                    <button className={`accordion-button ${accordionOpen.host ? '' : 'collapsed'}`} style={{ color: 'white', backgroundColor: '#6495ed' }} type="button" onClick={() => toggleAccordion('host')}>
                                        Deployment & Hosting
                                    </button>
                                </h2>
                                <div id="collapseCSS" className={`accordion-collapse collapse ${accordionOpen.host ? 'show' : ''}`} aria-labelledby="headingCSS">
                                    <div className="accordion-body">
                                        Heroku, Render, Netlify, GitHub Pages
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ResumeDownload;