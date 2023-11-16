import { useEffect, useState } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descricao: "",
};

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => {
    if (props.ativSelecionada.id !== 0) setAtividade(props.ativSelecionada);
  }, [props.ativSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };

  function atividadeAtual() {
    if (props.ativSelecionada.id !== 0) {
      return props.ativSelecionada;
    } else {
      return atividadeInicial;
    }
  }
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label className="form-label">Título</label>
        <input
          id="titulo"
          type="text"
          className="form-control"
          placeholder="Titulo"
          name="titulo"
          value={atividade.titulo}
          onChange={inputTextHandler}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
        <select
          id="prioridade"
          name="prioridade"
          value={atividade.prioridade}
          onChange={inputTextHandler}
          className="form-select"
        >
          <option defaultValue="0">Selecionar...</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>

      <div className="col-md-12">
        <label className="form-label">Descrição</label>
        <textarea
          id="descricao"
          type="text"
          className="form-control"
          placeholder="Descrição"
          name="descricao"
          value={atividade.descricao}
          onChange={inputTextHandler}
        />
      </div>
      <hr />
      <div className="col-12">
        <button
          className="btn btn-outline-secondary"
          onClick={props.addAtividade}
        >
          + Atividade
        </button>
      </div>
    </form>
  );
}
