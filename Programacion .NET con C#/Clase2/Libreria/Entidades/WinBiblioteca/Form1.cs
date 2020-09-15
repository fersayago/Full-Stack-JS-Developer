using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WinBiblioteca
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // suscribir los eventos click de los dos botones
            btnCerrar.Click += botones;
            btnConfirmar.Click += botones;
        }

        private void botones(object sender, EventArgs e)
        {
            // codigo a ejecutarse cuando el usuario haga click en alguno de los botones
            Button boton = sender as Button;
            switch (boton.Name)
            {
                case "btnCerrar":
                    Close();
                    break;
                case "btnConfirmar":
                    //comunicarnos con la capa de logica
                default:
                    break;
            }
        }
    }
}
