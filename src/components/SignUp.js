import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function
import { validation } from '../helper/validation';
import { toastify } from '../helper/toastify';

// Styles
import styles from './SingIn.module.css'

const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false
    })

    const [error, setError] = useState({})

    const [touched, setTouched] = useState({})

    useEffect(() => {
        setError(validation(data, 'signup'))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === 'isAccepted') {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
        // console.log(data)
    }

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault()

        if (!Object.keys(error).length) {
            toastify('success', 'you SignUp successfully !')
        } else {
            toastify('error', 'Invalid Data !')
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h1 className={styles.header}>SignUp</h1>

                <div className={styles.formField}>
                    <label>Name: </label>
                    <input className={(error.name && touched.name) ? styles.uncompleted : styles.formInput}
                        type='text' name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                    {error.name && touched.name && <span>{error.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>Confirm Password: </label>
                    <input className={(error.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
                        type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                    {error.confirmPassword && touched.confirmPassword && <span>{error.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I accept term of privacy policy: </label>
                        <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} />
                    </div>
                    {error.isAccepted && touched.isAccepted && <span>{error.isAccepted}</span>}
                </div>

                <div className={styles.formButtons}>
                    <Link to='/login' replace>LogIn</Link>
                    <button type='submit'>SignUp</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default SignUp;