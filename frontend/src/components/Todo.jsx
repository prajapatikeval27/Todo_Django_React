import { useState } from "react";
import "../styles/TodoDetails.css"

const Todo = ({todo, onDelete, onUpdate}) => {
    
    const formattedDate = new Date(todo.created_at).toLocaleDateString("en-US");
    const [edit,isEdit] = useState(false)
    const [title,setTitle] = useState(todo.title)
    const [description,setDesription] = useState(todo.description)


    const setEdit = (parameter) => {
        isEdit(parameter)

    }

    const update = (id, title,content) => {
        onUpdate(id, title, content)
        setEdit(false)
    }
    return (
        <div className="todo-container">
          <div className="todo-fields">
            <p className="todo-date">Created: {formattedDate}</p> 
            <input  type="text"
                    className="todo-title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    disabled={edit == false}/>
            <textarea type="text" className="todo-content" value={description} onChange={(e) => setDesription(e.target.value)} disabled={edit == false}/>

            
          </div>
          <div className="buttons">
            <button className="delete-button" style={{backgroundColor:"#AD2E24", border:"1px solid #AD2E24", color:"white"}} onClick={() => onDelete(todo.id)}>
              Delete
            </button>
            {edit && <button className="update-button" onClick={() => update(todo.id, title, description)}>
              Update
            </button>
            }
            {edit && <button className="edit-button" onClick={() => setEdit(false)}>
              Cancel Edit
            </button>
            }
            {edit==false && <button className="edit-button" onClick={() => setEdit(true)}>
              Edit
            </button>
            }
            
          </div>
        </div>
    )
}
export default Todo