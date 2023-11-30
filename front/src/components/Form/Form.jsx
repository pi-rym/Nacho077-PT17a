import { useState, useEffect } from "react"
import validation from './errors.js'

const Form  = ({onLogin}) => {
    const [form, setForm] = useState({
        mail: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        mail: "",
        password: ""
    })
    const [focus, setFocus] = useState("")

    const handleChange = (event) => {
        const {name, value} = event.target
        const newState = {
            ...form,
            [name]: value
        }

        setForm(newState)
        // setErrors(validation(newState))
    }

    useEffect(() => {
        setErrors(validation(form))
    }, [form.mail, form.password])

    const handleSubmit = (event) => {
        event.preventDefault()
        onLogin(form)
    }

    return (
        <form onSubmit={handleSubmit} >
            <label>Mail:</label>
            <input type="text" name="mail" onChange={handleChange} onFocus={() => setFocus("mail")} />
            <p>{errors.mail}</p>
            <p>{focus === "mail" && "el mail debe tener...."}</p>

            <label>Contraseña: </label>
            <input type="password" name="password" onChange={handleChange} onFocus={() => setFocus("password")} />
            <p>{errors.password}</p>
            <p>{focus === "password" && "la contraseña debe tener...."}</p>

            <button type="submit">ACEPTAR</button>
        </form>
    )
}

export default Form
