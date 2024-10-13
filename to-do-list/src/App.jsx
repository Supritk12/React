import React, { useState } from "react";
const App = () => {
  const [arr, setTask] = useState([]);
  const [val, setVal] = useState("");
 // const [lab, state] = useState(false);
  function save() {
    if (val.trim() === "") {
      window.alert("Enter a task before saving!");
    } else {
      setTask([...arr, val]);
      console.log(arr);
      setVal("")
      local();
    }
  }
  function delete_checked() {
    let newarr= arr.filter((el) => {
      return !el.checked;
    });
    setTask(newarr);
    }
  local();

 function deleteitem(i){

 }
  function local() {
    localStorage.setItem("ITEMS", arr);
  }

  return (
    <div>
      <h1>To do list</h1>
      <div className="contain">
        <input
          type="text"
          id="list"
          value={val} //jo value input feild mai ayegi wo state variable se bind ho jayegi
          onChange={(e) => setVal(e.target.value)} //e is an event object [e.target.value input ki value deta hai] aur setVal state variable ko update karta hai
        />
      </div>
      <button id="save" onClick={() => save()}>
        SAVE
      </button>
      {/* <button id="delete_checked" onClick={() => delete_checked()}>
        Delete
      </button> */}
      <ul id="items">
        {arr.map((element, i) => {
          return (
            <li key={i}>
              <input type="checkbox" id={`check{i}`} onClick={()=> check_()}/>
              <label htmlFor={i} id={`label${i}`}>{element}</label>
              <button onClick={()=>deleteitem(i)}>DELETE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default App;
