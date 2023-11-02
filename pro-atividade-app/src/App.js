import { useState } from "react";
import "./App.css";

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
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input
            id="id"
            type="text"
            className="form-control"
            placeholder="id"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Descrição</label>
          <input
            id="descricao"
            type="text"
            className="form-control"
            placeholder="descrição"
          />
        </div>
        <hr />
        <div className="col-12">
          <button className="btn btn-outline-secondary" onClick={addAtividade}>
            + Atividade
          </button>
        </div>
      </form>
      <div className="mt-3">
        {atividades.map((ativ) => (
          <div key={ativ.id} className="card mb-2 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge text-bg-secondary me-2">
                    {ativ.id}
                  </span>
                  - título
                </h5>
                <h6>
                  Prioridade:
                  <span className="ms-1 text-black">
                    <i className="me-1 fa-regular fa-face-frown"></i>Alta
                  </span>
                </h6>
              </div>

              <p className="card-text">{ativ.descricao}</p>

              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-outline-primary me-2 btn-sm">
                  <i className="fa-solid fa-pen me-2"></i>
                  Editar
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  <i className="fa-solid fa-trash me-2"></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
