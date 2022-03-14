import React from "react";
import Message from "./Message";
function App() {
  let name = "Текст для Message";
  return (
    <div className="App" style={{ textAlign: "center" }}>

      <Message text={name} />
    </div>
  );
}

export default App;
