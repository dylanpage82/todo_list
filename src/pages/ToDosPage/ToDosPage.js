import {useState, useEffect} from 'react'

export default function ToDosPage (props){
    const [toDos, setToDos] = useState([])
    const [foundToDo, setFoundToDo] = useState(null)
    const [newToDo, setNewToDo] = useState({
        title:"",
        completed:false,
    })
    const getToDos = async () => {
        try {
            const response = await fetch('/api/toDos')
            const data = await response.json()
            setToDos(data)
        } catch (error) {
            console.error(error)
        }
    }
    const deleteToDo = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/toDos/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundToDo(data)
        } catch (error) {
            console.error(error)
        }
    }
    const updateToDo = async (id, updatedData) => {
        console.log(updatedData)
        try {
            const response = await fetch(`/api/toDos/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundToDo(data)
        } catch (error) {
            console.error(error)
        }
    }
    const createToDo = async () => {
        
        try {
            const response = await fetch('/api/toDos', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({...newToDo})
            })
            const data = await response.json()
            console.log(data)
            setFoundToDo(data)
            setNewToDo({
                title:'',
                completed:false
            })
            
        } catch (error) {
            console.error(error)
        }
    }
    const handleChange = (evt) => {
        setNewToDo({...newToDo, [evt.target.name]: evt.target.value})
    }
    const handleSubmit =(evt) =>{
        evt.preventDefault()
        createToDo()
    }
    useEffect(() => {
        getToDos()
    }, [foundToDo])
    return (
    <>
    <h1 className='title'>My To Do List:</h1>
    <p className='new'>New item:</p>
    <form onSubmit={handleSubmit} >
        <input type='text' name={'title'} value={newToDo.title} onChange={handleChange}/>
    </form>
        
            
            
           
            
            <p className='items'>To Do Items:</p>
       {
        toDos && toDos.length ? (
        <>
        <ul>
            {
                toDos
                .filter((i) => !i.completed)
                .map((toDo) => {
                    return(
                        <li key={toDo._id}>
                            {toDo.title} <button onClick={() => { updateToDo(toDo._id, {title: toDo.title, completed: true})}}>Completed</button>
                
                        </li>
                    )
                })
            }
        </ul>
        <p>Completed Items</p>
       <ul>
        {
            toDos
            .filter((i) => i.completed)
            .map((toDo) => {
                return(
                    <li key={toDo._id}>
                    {toDo.title}<button onClick={() => {deleteToDo(toDo._id, toDo.title, toDo.title, toDo.completed)}}>Remove</button>
                    </li>
                )
            })
        }
        </ul> 
    </>
        ): <h1> Nothing Left ToDo</h1>
        }
    </>
                   
    )
}
