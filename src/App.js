import './App.css';
import { useState, useEffect } from 'react';
import ToDosPage from './pages/ToDosPage/ToDosPage'
import {Routes, Route} from 'react-router-dom'


export default function App() {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(true)
  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])
  
  
  return (
    <div className="App">
      
      <Routes>
        <Route path = "/toDos" element={<ToDosPage />} />
      </Routes>
      </div>
  );
}


