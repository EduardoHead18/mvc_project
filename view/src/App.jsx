
import { useState } from 'react';
import './App.css'
import { TablaComponent } from './TablaComponent';


function App() {
  const urlPost = 'http://localhost:8080/api/post';

  //data vacia
  const [data, setData] = useState({
    tarea: ''
  });
  //agregar data
  const handleForm = e => {
    setData({
      [e.target.name]: e.target.value
    })
  }

  const requestInit ={
    method: 'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(data)
  }

  const handleSubmit = () => {
    if(data.tarea === ''){
      alert('Debes agendar algo')
    }else{
      fetch(urlPost, requestInit)
      .then(response => response.json())
      .then(res => console.log(res));
      
      //reiniciar estado
      setData({
        tarea:''
      })
    }
  }

  return (
    <>
      <div classNameName="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fs-1">Tareas</label>
            <input name='tarea' onChange={handleForm} type="text" className="form-control" id="formData" />
          </div>
          <button type="submit" className="btn btn-danger">Guardar</button>
        </form>
      </div>

      <TablaComponent></TablaComponent>

    </>
  )
}

export default App
