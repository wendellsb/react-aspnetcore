using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Models;
using System.Reflection.Metadata.Ecma335;

namespace ProAtividade.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade>() {
                new Atividade(1),
                new Atividade(2),
                new Atividade(3)
        };

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id) => Atividades.FirstOrDefault(ati => ati.Id == id);

        [HttpPost]
        public IEnumerable<Atividade>  Post(Atividade atividade)
        {
            return Atividades.Append<Atividade>(atividade);
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            return atividade;
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return "Meu primeiro método Delete";
        }
    }
}
