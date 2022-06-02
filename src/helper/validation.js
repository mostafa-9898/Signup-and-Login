
export const validation = (data, type) => {

    const error = {}

    if (type === 'signup') {

        if (!data.name.trim()) {
            error.name = 'UserName Required'
        } else {
            delete error.name
        }

        if (!data.confirmPassword) {
            error.confirmPassword = 'Confirm Password Required'
        } else if (data.password !== data.confirmPassword) {
            error.confirmPassword = 'Passwords Do Not Match'
        } else {
            delete error.confirmPassword
        }

        if (data.isAccepted) {
            delete error.isAccepted
        } else {
            error.isAccepted = 'Accept Our Regulation'
        }

    }

    if (!data.email) {
        error.email = 'Email Required'
    } else if (! /\S+@\S+\.\S+/.test(data.email)) {
        error.email = 'email address is invalid'
    } else {
        delete error.email
    }

    if (!data.password) {
        error.password = 'Password Required'
    } else if (data.password.length < 4) {
        error.password = 'Password Should Be 4 Character Or More'
    } else {
        delete error.password
    }


    return error

}