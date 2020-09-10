using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clase1
{
    // se marca con : que Profesor herede de Persona.
    class Profesor:Persona
    {
        private string Titulo { get; set; }
        public override string TraerDatos()
        {
            string strDatos;
            //de la case derivada accedemos a la clase base para poder agregar datos a strDatos. Se agrega la base mediante "base"
            strDatos = base.TraerDatos() + " Nota:" + Nota;
            return strDatos;
        }

        public override string TraerDatos(bool x)
        {
            string strDatos;
            strDatos = base.TraerDatos() + " Titulo: " + Titulo;
            return strDatos;
        }
    }
}
