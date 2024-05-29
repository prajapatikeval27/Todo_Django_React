import api from "../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constraints"
import { useState } from "react"
import "../styles/Form.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = ({ route, method }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post(route, { username, password });
            if (method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                toast.success("Logged In");
                navigate("/details")
            } else{
                navigate('/login')
                toast.success("Registered");
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="form-div">
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <h1>{method === "login" ? "Login" : "Register"}</h1>
                </div>
                <div className="input-div">
                    <input
                        className="form-input" 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        />
                    <input
                        className="form-input" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        />
                </div>
                <div className="submit-div">
                    <button className="form-button" type="submit">
                        {method === "login" ? "Login" : "Register"}
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
export default Form