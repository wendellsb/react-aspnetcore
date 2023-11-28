import React from "react";

export default function Atividade(props) {
  function prioridadeLabel(param) {
    switch (param) {
      case "Baixa":
      case "Normal":
      case "Alta":
        return param;
      default:
        return "Não definido";
    }
  }

  function prioridadeStyle(param, icone) {
    switch (param) {
      case "Baixa":
        return icone ? "smile" : "success";
      case "Normal":
        return icone ? "meh" : "dark";
      case "Alta":
        return icone ? "frown" : "warning";
      default:
        return "Não definido";
    }
  }

  return (
    <div
      className={
        "card mb-2 shadow border-" + prioridadeStyle(props.ativ.prioridade)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge text-bg-secondary me-2">
              {props.ativ.id}
            </span>
            - {props.ativ.titulo}
          </h5>
          <h6>
            Prioridade:
            <span
              className={"ms-1 text-" + prioridadeStyle(props.ativ.prioridade)}
            >
              <i
                className={
                  "me-1 fa-regular fa-face-" +
                  prioridadeStyle(props.ativ.prioridade, true)
                }
              ></i>
              <span>{prioridadeLabel(props.ativ.prioridade)}</span>
            </span>
          </h6>
        </div>

        <p className="card-text">{props.ativ.descricao}</p>

        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-outline-primary me-2 btn-sm"
            onClick={() => props.pegarAtividade(props.ativ.id)}
          >
            <i className="fa-solid fa-pen me-2"></i>
            Editar
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => props.deletarAtividade(props.ativ.id)}
          >
            <i className="fa-solid fa-trash me-2"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
