import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import '../../src/index.css'
import Layout from '../layouts/layout';

function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid')

            return;
        }

        setEmail('');
        setName('');
        setMessage('');
    }

    return (
        <Layout>
            <div className="container text-center d-flex flex-column justify-content-center" style={{ height: '75vh', width: '75vw' }}>
                <div className='mb-3'>
                    <h1>Contact Michael Kelly</h1>
                </div>
                <form className="form-label" onSubmit={handleFormSubmit}>
                    <div className='mb-3'>
                        <input
                            className='form-control col-10'
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            title='This field is required'
                            placeholder="Your Name"
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            className='form-control'
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            title='This field is required'
                            placeholder="example@email.com"
                        />
                    </div>
                    <div className='mb-3'>
                        <textarea
                            className='form-control'
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            title='This field is required'
                            placeholder="Reach out with any questions for me"
                            rows={4}
                        />
                    </div>
                    <button type="submit">Submit</button>
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
