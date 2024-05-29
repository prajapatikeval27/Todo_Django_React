import { useState,useEffect } from "react"
import Navbar from "../components/Navbar"
import api from "../api"
import Todo from "../components/Todo"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoDetails = () => {

    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [add,setAdd] = useState(false)


    const getTodos = () => {
        api
            .get("api/todos/")
            .then((res) => res.data)
            .then((data) => setTodos(data))
            .catch((err) => {
                alert(err);
            });
    };
    const createTodo = (e) => {
        e.preventDefault();
        api
            .post("api/todos/", {description, title})
            .then((res) => {
                if (res.status == 201){
                    toast.success("Todo Created")
                    setAdd(false)
                    getTodos()
                }
                else{
                    toast.error("Failed to Create Todo")
                }
            })
            .catch((err) => toast.error(err))
        e.target.reset()
    };
    const updateTodo = (id, title, description) => {
        api
            .patch(`/api/todos/update/${id}/`, {description, title})
            .then((res) => {
                if (res.status === 200){
                    toast.success("Todo updated!");
                    getTodos()
                } 
                else toast.error("Failed to update Todo.");
            })
            .catch((err) => toast.error(err))
    }
    const deleteTodo = (id) => {
        api
            .delete(`/api/todos/delete/${id}/`)
            .then((res) => {
                if (res.status === 204){
                    getTodos()
                    toast.error("Todo Deleted!") ;
                } 
                else toast.error("Failed to delete Todo.");
            })
            .catch((err) => toast.error(err));
    }
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <>
            <Navbar />
            <div className="todo-details-main-div">
                <div className="inner-div">
                    <div className="todo-details-form-container">
                        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"1em"}}>
                            <div>
                                <h1 style={{color:"gray"}}>Todo</h1>
                            </div>
                            <div>
                                {add ? 
                                    <button className="toggle-add-cancel" style={{backgroundColor:"#AD2E24", border:"1px solid #AD2E24"}} onClick={()=> setAdd(false)}>cancel</button>
                                    : 
                                    <button className="toggle-add-cancel" onClick={()=> setAdd(true)}>Add</button>
                                }
                            </div>
                        </div>
                        {add && 
                        <form className="todo-details-form" onSubmit={createTodo}>
                            <div className="inner-form">
                                <div className="inner-form-input">
                                    <label htmlFor="title">Title</label>
                                    <input 
                                        id="title"
                                        type="text"
                                        name="title"
                                        required
                                        onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="inner-form-textarea">
                                    <label htmlFor="description">Description</label>
                                    <textarea 
                                        name="description" 
                                        id="description"
                                        required
                                        onChange={(e) => setDescription(e.target.value)} 
                                        ></textarea>
                                </div>
                            </div>
                            <input className="form_button"  type="submit" value="Submit"/>
                        </form>}
                    </div>
                    <div className="individual-todo-map">
                        {todos.map((todo) => 
                            <Todo todo={todo} onUpdate={updateTodo} onDelete={deleteTodo} key={todo.id} />
                        )}
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default TodoDetails