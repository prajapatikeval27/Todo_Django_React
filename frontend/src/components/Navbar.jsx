import { useEffect, useState } from "react"
import "../styles/Navbar.css"
import {Link} from "react-router-dom"
import { ACCESS_TOKEN } from "../constraints"

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token){
            setIsAuthenticated(true)
        }
    }, [])
    return (
        <nav className="navbar">
            <div>
                <Link className="title" to="/">Home</Link>
            </div>
            <div>
                {isAuthenticated ? 
                    <>
                        <Link className="urls" to="/details">Todos</Link>
                        <Link className="urls" to="/logout">Logout</Link>
                    </>
                : 
                    <>
                        <Link className="urls" to="/login">Login</Link>
                        <Link className="urls" to="/register">Register</Link>
                    </>
                
                }
                
            </div>
        </nav>
    )
}
export default Navbar