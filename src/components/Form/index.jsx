import React from "react"
import "./index.scss"
const Form = () => {
    return(
        <form className="message-form">
            <label htmlFor="message">Message</label>
            <textarea  id="message"></textarea>
        </form>
    )
}

export default Form