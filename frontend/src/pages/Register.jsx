import Navbar from "../components/Navbar"
import Form from "../components/Form"

const Register = () => {
    return (
        <>
            <Navbar />
            <Form route="api/user/register/" method="register"/>
        </>
    )
}
export default Register