var miDibujo = document.getElementById('contenedor')
var ctx = miDibujo.getContext('2d')


/* dibujar una linea */
ctx.moveTo(50, 50)
ctx.lineTo(50, 70)
ctx.lineTo(120, 110)
ctx.lineTo(320, 20)
ctx.strokeStyle = 'red'
ctx.stroke()

/* Mostrar un mensaje de texto */
ctx.font = '30px Arial'
ctx.strokeStyle = 'magenta'
ctx.strokeText('Hola mundo!', 100, 40)

/* Hacer un rectangulo relleno */
ctx.fillStyle = '#FF8000'
ctx.fillRect(100,50,75,50)

/* Hacer un arco de color */
ctx.beginPath()
ctx.arc(85,50,45,0,2*Math.PI)
ctx.strokeStyle = 'green'
ctx.stroke()