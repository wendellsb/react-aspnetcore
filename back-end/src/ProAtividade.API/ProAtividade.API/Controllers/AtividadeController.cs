using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using ProAtividade.API.Data;
using ProAtividade.API.Models;
using System.Reflection.Metadata.Ecma335;

namespace ProAtividade.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _context;
        public AtividadeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return _context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return _context.Atividades.FirstOrDefault(ati => ati.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade>  Post(Atividade atividade)
        {
            _context.Atividades.Add(atividade);
            if (_context.SaveChanges() > 0)
            {
                return _context.Atividades;
            }
            else
            {
                throw new Exception("Você não conseguiu adicionar uma atividade");
            }
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            if (atividade.Id != id) 
                throw new Exception("Você está tentando atualizar a atividade errada");

            _context.Update(atividade);
            if (_context.SaveChanges() > 0)
            {
                return _context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            }
            else
            {
                return new Atividade();
            }                
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var atividade = _context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            if(atividade == null)
                throw new Exception("Você está tentando deletar a atividade que não existe");

            _context.Remove(atividade);

            return _context.SaveChanges() > 0;
        }
    }
}
