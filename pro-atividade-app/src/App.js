import { useState } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

let initialState = [
  {
    id: 1,
    prioridade: "1",
    titulo: "Título",
    descricao: "Primeira Atividade",
  },
  {
    id: 2,
    prioridade: "1",
    titulo: "Título",
    descricao: "Segunda Atividade",
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);
  const [atividade, setAtividade] = useState({});

  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      id:
        Math.max.apply(
          Math,
          atividades.map((item) => item.id)
        ) + 1,
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
      prioridade: document.getElementById("prioridade").value,
    };
    setAtividades([...atividades, { ...atividade }]);
  }

  function atualizarAtividade(ativ) {
    setAtividades(
      atividades.map((item) => (item.id === ativ.id ? ativ : item))
    );

    setAtividade({ id: 0 });
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 });
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(
      (atividade) => atividade.id !== id
    );

    setAtividades([...atividadesFiltradas]);
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
  }
  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        atividades={atividades}
        ativSelecionada={atividade}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
