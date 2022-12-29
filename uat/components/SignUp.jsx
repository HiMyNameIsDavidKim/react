const SignUp = () => {
    const onClick = e => {
        e.preventDefault()

    }
    return(<>
    <h1>Sign Up</h1>
    <p>You can search user list with click find button.</p>
    <button onClick={onClick}>Find</button>
    </>)
}
export default SignUp