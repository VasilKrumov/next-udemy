import classes from './newsletter-registration.module.css'
import { useRef } from 'react'

function NewsletterRegistration() {
    const emailInputRef = useRef()
    function registrationHandler(event) {
        event.preventDefault()

        const enteredEmail = emailInputRef.current.value

        fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({ email: enteredEmail }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return response.json().then((data) => {
                console.log(data)
                throw new Error(data.message || 'Something went wrong!')
            })
        })
    }

    return (
        <section className={classes.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        aria-label="Your email"
                        ref={emailInputRef}
                    />
                    <button>Register</button>
                </div>
            </form>
        </section>
    )
}

export default NewsletterRegistration
