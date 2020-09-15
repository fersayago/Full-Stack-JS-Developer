using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logica
{
    public class Autor
    {
        // metodos
        // recibir de Presentacion
        // y si necesita enviar a Datos
        public void Agregar(List<Entidades.Autor> lista, Entidades.Autor autor)
        {
            // agregar unb elemento a una coleccion
            lista.Add(autor);

        }
        public List<Entidades.Autor> TraerTodos(List<Entidades.Autor> list )
        {
            return lista;
        }
        public void Modificar() { }
        public void Borrar() { }
    }
}
