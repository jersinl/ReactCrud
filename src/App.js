import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Subcomponentes
import Navigation from "./components/Navigation";
import CardListView from "./components/CardListView";
// import FormView from "./components/FormView";

// DTO o Json de la manera que uno se acomode a trabajar
import Task from  "./dto/Task.json";

class App extends Component {

  constructor(){
    super();
    this.state = {
      data : Task.toDo 
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  removeTask(index){
    this.setState({
      data : this.state.data.filter((e,i) =>{
             return i!==index;
      })
    });
  }

  handleAddTask(toDo){
    this.setState({
      data: [...this.state.data, toDo]
    });

  }


  render() {
    // Antes de renderizar se puede procesar los datos 
    // no necesariamente dentro del return cuando dibuja
    // la pantalla. com el map() se recorre el array del json.
    const viewCard =this.state.data && this.state.data.map((dto,i) => {
      return(
        <div className="col-md-4" key={i}>

            <div className="card mt-4">

                 <div className="card-title text-center">
                      <h3>{dto.title}</h3> 
                      <span className="badge badge-pill badge-danger ml-2">
                        {dto.priority}
                      </span>
                  </div>

                  <div className="card-body">
                      <p>{dto.description}</p> 
                      <p><mark>{dto.responsible}</mark></p> 
                  </div>
                  
                  <div className="card-footer">
                    <button
                      className="btn btn-danger"
                      onClick={this.removeTask.bind(this,i)}>
                      Delete
                    </button>
                  </div>

            </div>

        </div>    
      )
    });

    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* Llamar con el metodo className para boostrap y para las otras clases que se crea ahi mismo. */}
          {/* <h1 className="display-1">Hola Mundo desde React</h1> */}
          
          {/* <Navigation titulo="second"/>
          <Navigation titulo="third"/> */} 
        
        {/* </header> */}

        {/* Llamamos al componente navegacion que es el titulo Inicio */}
        <Navigation titulo="Inicio" list={this.state.data}/>
        
        {/* Ejemplo realizado en el componente externo cardViewList , donde esta el 
        listado de tareas y el guardar eliminar.  */}
        <CardListView logo={logo} handleAddTask={this.handleAddTask} layoutView={viewCard}/>

        {/* Ejemplo realizado en la misma vista principal  */}
        {/* <div className="container">

            <div className="row mt-4">

                  <div className="col-md-4 text-center">
                      <img src={logo} className="App-logo" alt="logo" />
                      <FormView AddTask={this.handleAddTask}/>
                  </div>

                  <div className="col-md-8">

                      <div className="row">
                          {viewCard}
                      </div>

                  </div>
            </div>

          </div> */}

      </div>
    );
  }
}

export default App;
