const Button = ({ getGiphy }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        getGiphy()
    }
    return (
        <>
            <h1>Surprise me!</h1>
            <form className='form-size' onSubmit={handleSubmit}>
                <button>RANDOM</button>
            </form>
            
        </>

    )
}
export default Button