using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clase1
{
    abstract class Persona
    {
        //constructor
        public Persona()
        {
            //codigo a ejecutarse por cada new (cada instancia)
            Apellido = "Sosa";
        }

        public Persona (string ape)
        {
            Apellido = ape;
        }


        //atributos
        private int dni;
        private string apellido;

        //propiedades (encapsulamiento)
        public int Dni
        {
            //hacemos al DNI de escritura y lectura
            get
            {
                //retornar el valor del atributo
                return dni;
            }
            set
            {
                //asignarle un valor
                dni = value;
            }
        }

        public string Apellido
        {
            get
            {
                return apellido;
            }
            set
            {
                apellido = value.ToUpper();
            }
        }

        //propiedades autoimplementadas -> el atributo esta implicito y no tengo que escribirlo

        public string Nombre { get; set; }

        //creado mediante snippet "prop" + tab tab
        public DateTime FechaNacimineto { get; set; }


        //metodos
        public int TraerEdad()
        {
            //TODO realizar la resta correcta con dia mes año -> ver>lista de tareas para llegar a todos las tareas por hacer maracadas con el todo
            int intEdad;
            intEdad = DateTime.Today.Year - FechaNacimineto.Year;
            return intEdad;
        }

        // metodo TraerDatos()
        public virtual string TraerDatos()
        {
            string strDatos;
            strDatos = "Doc.: " + Dni + " " + Apellido + ", " + Nombre;
            return strDatos;
        }

        //SOBRECARGA funciona por que sabe distingir los metodos por que uno recibe parametros
        public string TraerDatos(string Titulo)
        {
            string strDatos;
            strDatos = Titulo + " " + Apellido + ", " + Nombre;
            return strDatos;
        }

        public virtual string TraerDatos(bool a)
        {
            return "metodo en construccion";
        }
    }
}
