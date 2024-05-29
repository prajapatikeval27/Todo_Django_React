import Navbar from "../components/Navbar"
import Form from "../components/Form"

const Login = () => {
    return (
        <>
            <Navbar />
            <Form route="api/token/" method="login"/>
            
        </>
    )
}
export default Login