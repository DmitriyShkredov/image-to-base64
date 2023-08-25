import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setData(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="App">
      <input type="file" onChange={onChange} />
      <img src={data} alt="" />
      <p>{data}</p>
    </div>
  );
}

export default App;
