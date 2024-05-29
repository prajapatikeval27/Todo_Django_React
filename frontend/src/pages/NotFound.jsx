import Navbar from "../components/Navbar"

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div style={{height:"80vh", width:"100%", display:"flex", flexDirection:"column", gap:"10px", alignItems:"center", justifyContent:"center"}}>
                <h1>404 Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
            </div>
        </>
    )
}
export default NotFound