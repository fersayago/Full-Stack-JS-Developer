using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clase1
{
    // se marca con : que Alumno herede de Persona.
    class Alumno : Persona
    {
        //para heredar todas las sobrecargas
        public Alumno() : base()
        {

        }

        
        public Alumno (string apelli) : base()
        {

        }
        
        //Miembros estaticos de la clase que solo se usaran en alumno
        private static int notaTP;
        public static int NotaTP
        {
            get { return notaTP; }
            set { notaTP = value; }
        }
        private int nota;
        public int Nota { get; set; }
        
        //se esta sobreescribiendo el metodo traerDatos de Persona para que cuando se llame a una instancia de alumno, ejecute el de aca con la nota agregada
        public override string TraerDatos()
        {
            string strDatos;
            //de la case derivada accedemos a la clase base para poder agregar datos a strDatos. Se agrega la base mediante "base"
            strDatos = base.TraerDatos() + " Nota:" + Nota + " Nota TP: " + NotaTP;
            return strDatos;
        }
    }
}
