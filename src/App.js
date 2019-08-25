import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      Hello World con : 
      <PageHello mytext="Hello Adrian" subtitle="Lorem insump lo que sea"/>
      <PageHello mytext="Nada de Nada" subtitle="Esta es una canción" />
      <PageHello mytext="Que me ves"/>
      <PageHello/>
    </div>
  );
}
// Componente declarado a través de una clase 
// Para utilizar una clase se tiene que estender la funcionalidad, a través de la propiedad (extends React.Component) 
// En una clase no se puede retornar elementos directamente, por lo que utilizamos el metodo (render)
// A través de render, ya podemos implementar el return
class PageHello extends React.Component{

  // Estados dentro de los componentes
  //Cada componente creado a partis de las clase, tiene su propio estado
  state={
    show: true
  }

  changeState = () => {this.setState({show: !this.state.show})}

  render(){
    if(this.state.show === true){
      return(
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.changeState}>Hidden conmponents</button>
        </div>
      )
    } else{
      return <h2>
          The component was hidden
          <button onClick={this.changeState}>Hidden conmponents</button>
        </h2>
    }
  }
}

// Componente declarado a través de una función 
// function PageHello(props){
//   console.log(props);
  
//   return(
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   )
// }

export default App;
