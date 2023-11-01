import { useState } from "react";
import "./App.css";
import ListGroup from "react-bootstrap/ListGroup";

let initialState = [
  {
    id: 1,
    descricao: "Primeira Atividade",
  },
  {
    id: 2,
    descricao: "Segunda Atividade",
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById("id").value,
      descricao: document.getElementById("descricao").value,
    };
    setAtividades([...atividades, { ...atividade }]);
  }

  return (
    <>
      <form>
        <input id="id" type="text" placeholder="id"></input>
        <input id="descricao" type="text" placeholder="descrição"></input>
        <button onClick={addAtividade}>+ Atividade</button>
      </form>
      <div className="mt-3">
        <ListGroup>
          {atividades.map((ativ) => (
            <ListGroup.Item key={ativ.id}>
              {ativ.id} - {ativ.descricao}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default App;
