namespace WinBiblioteca
{
    partial class FrmConsultaAutores
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.dgvAutores = new System.Windows.Forms.DataGridView();
            this.lblListadoAutores = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.dgvAutores)).BeginInit();
            this.SuspendLayout();
            // 
            // dgvAutores
            // 
            this.dgvAutores.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvAutores.Location = new System.Drawing.Point(12, 45);
            this.dgvAutores.Name = "dgvAutores";
            this.dgvAutores.Size = new System.Drawing.Size(776, 393);
            this.dgvAutores.TabIndex = 0;
            // 
            // lblListadoAutores
            // 
            this.lblListadoAutores.AutoSize = true;
            this.lblListadoAutores.BackColor = System.Drawing.SystemColors.AppWorkspace;
            this.lblListadoAutores.Location = new System.Drawing.Point(12, 29);
            this.lblListadoAutores.Name = "lblListadoAutores";
            this.lblListadoAutores.Size = new System.Drawing.Size(110, 13);
            this.lblListadoAutores.TabIndex = 1;
            this.lblListadoAutores.Text = "LISTA DE AUTORES";
            this.lblListadoAutores.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // FrmConsultaAutores
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.lblListadoAutores);
            this.Controls.Add(this.dgvAutores);
            this.Name = "FrmConsultaAutores";
            this.Text = "FrmConsultaAutores";
            ((System.ComponentModel.ISupportInitialize)(this.dgvAutores)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.DataGridView dgvAutores;
        private System.Windows.Forms.Label lblListadoAutores;
    }
}