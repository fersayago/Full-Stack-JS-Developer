using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clase1
{
    class Program
    {
        static void Main (string[] args)
        {
            //nota compartida
            Alumno.NotaTP = 7;
            //crear objeto de la clase alumno
            Alumno objAlumno = new Alumno(); // se ejecuta el constructor de la clase
            objAlumno.Dni = 37242723;
            objAlumno.Apellido = "Sayago";
            objAlumno.Nombre = "Fernando";
            objAlumno.FechaNacimineto = Convert.ToDateTime("18/12/1992");
            objAlumno.Nota = 8;

            Console.WriteLine(objAlumno.TraerDatos());

            Console.WriteLine("Hola " + objAlumno.Apellido);

            //mostrar la edad
            Console.WriteLine("Edad {0} años", objAlumno.TraerEdad());

            Console.WriteLine(objAlumno.TraerDatos("Sr."));

            Console.WriteLine("Presione una tecla");

            Console.ReadKey();

            Imprimir();


            //imprimimos alumno 3 sin dato apellido para usar el valor por defecto en el constructor
            Alumno alumno3 = new Alumno();
            alumno3.Nombre = "Martin";
            alumno3.Dni = 123;
            Console.WriteLine(alumno3.TraerDatos());
            Console.ReadKey();


            //Creamos un empleado
            Empleado empleado = new Empleado();
            empleado.Nombre = "Gabriel";
            Console.WriteLine(empleado.TraerDatos());
            Console.ReadKey();

            Alumno alumno4 = new Alumno("Perez");
            alumno4.Nombre = "Gabriel";
            alumno4.Nota = 9;
        }

        static void Imprimir()
        {
            Console.WriteLine("Hola desde procedimiento Imprimir");

            Alumno alumno2 = new Alumno();
            alumno2.Apellido = "Ragazzini";
            alumno2.Nombre = "Humberto";

            //Si se considera que no tiene memoria el garbage collector elimina a alumno
            Console.WriteLine(alumno2.TraerDatos("Ingeniero"));
            Console.ReadKey();
        }
    }
    
}
