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
    public partial class MenuPrincipal : Form
    {
        public MenuPrincipal()
        {
            InitializeComponent();
            tsmiNuevoAutor.Click += OpcionesMenu;
            tsmiConsultaAutores.Click += OpcionesMenu;
        }

        private void OpcionesMenu(object sender, EventArgs e)
        {
            ToolStripMenuItem opcion = sender as ToolStripMenuItem;
            switch (opcion.Name)
            {
                case "tsmiNuevoAutor":
                    Form1 objFormNuevo = new Form1();
                    objFormNuevo.MdiParent = this;
                    objFormNuevo.StartPosition = FormStartPosition.CenterScreen;
                    objFormNuevo.Show();
                    break;
                case "tsmi":

                    break;
                default:
                    break;
            }
        }
    }
}
