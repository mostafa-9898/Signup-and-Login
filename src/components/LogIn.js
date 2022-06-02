import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Function
import { validation } from '../helper/validation';
import { toastify } from '../helper/toastify';

// notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import styles from './SingIn.module.css'

const LogIn = () => {

    const [data, setDate] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({})

    const [touched, setTouched] = useState({})

    useEffect(() => {
        setError(validation(data, 'login'))
    }, [data, touched])

    const changeHandler = event => {
        setDate({ ...data, [event.target.name]: event.target.value })
        // console.log(data)
    }

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault()

        if (!Object.keys(error).length) {
            toastify('success', 'You LogIn Successfully')
        } else {
            toastify('error', 'invalid data !')
            setTouched({ ...touched, email: true, password: true })
        }

    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h1 className={styles.header}>LogIn</h1>
                <div className={styles.formField}>
                    <label>Email: </label>
                    <input className={(error.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                    {error.email && touched.email && <span>{error.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password: </label>
                    <input className={(error.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                    {error.password && touched.password && <span>{error.password}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to='/signup' replace >SignUp</Link>
                    <button type='submit'>LogIn</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default LogIn;