import React from 'react';

interface ITitleProps{
  text:string
}

function Title(props: ITitleProps){
  return (
  <h1>ahahaha {props.text}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Title text="Título 1"/>
      <Title text="Título 2"/>
      <Title text="Título 3"/>
      <Title text="Título 4"/>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
