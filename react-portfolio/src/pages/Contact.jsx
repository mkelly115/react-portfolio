import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import '../../src/index.css'
import Layout from '../layouts/layout';

function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
            setEmailError('');
        } else if (inputType === 'name') {
            setName(inputValue);
            setNameError('');
        } else {
            setMessage(inputValue);
        }
    };

    const handleBlur = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email' && !validateEmail(inputValue)) {
            setEmailError('Email is invalid');
        } else if (inputType === 'name' && inputValue.trim() === '') {
            setNameError('Name is required');
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateEmail(email)) {
            setEmailError('Email is invalid');
            return;
        }
    
        if (name.trim() === '') {
            setNameError('Name is required');
            return;
        }
    
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
    
        try {
            const response = await fetch('https://formspree.io/f/mnqeogay', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: formData
            });
    
            if (response.ok) {
                console.log('Form submitted successfully');
                setEmail('');
                setName('');
                setMessage('');
            } else {
                const data = await response.json();
                setErrorMessage(data.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('An error occurred while submitting the form');
        }
    };

    return (
        <Layout>
            <div className="container text-center d-flex flex-column justify-content-center" style={{ height: '100vh', width: '75vw' }}>
                <div className='mb-3'>
                    <h1>Contact Michael Kelly</h1>
                </div>
                <form className="form-label" onSubmit={handleFormSubmit} action="https://formspree.io/f/mnqeogay"
                    method="POST">
                    <div className='mb-3'>
                        <input
                            className='form-control col-10'
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Name"
                        />
                        {nameError && (
                            <p className="error-text">{nameError}</p>
                        )}
                    </div>
                    <div className='mb-3'>
                        <input
                            className='form-control'
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="example@email.com"
                        />
                        {emailError && (
                            <p className="error-text">{emailError}</p>
                        )}
                    </div>
                    <div className='mb-3'>
                        <textarea
                            className='form-control'
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            placeholder="Reach out with any questions for me"
                            rows={4}
                        />
                    </div>
                    <button style={{ color: 'white', backgroundColor: '#212429ff' }} type="submit">Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Form;