import {useState} from 'react'
const Form = ({ getTag }) => {
    const [form, setForm] = useState({
        input: ''
    })
    const handleChange = (e) => {
        setForm({input: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getTag(form.input)
        setForm({input: ''})
    }
    return (
        <>
            <h1>Enter keyword for a random sticker...</h1>
            <form className='form-size' onSubmit={handleSubmit}>
                <input
                type='text'
                value={form.input}
                onChange={handleChange}
                name='input'   
                />
                <input      type='submit' value='SEARCH'/>
            </form>
        </>

    )
}
export default Form