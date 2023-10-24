const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

ctx.fillStyle= 'yellow';
ctx.beginPath();
ctx.arc(200,200,130,0,Math.PI*2);
ctx.fill();
//boca
ctx.beginPath();
ctx.roundRect(155,265,90,30,[20]);
ctx.fillStyle = 'Black';
ctx.fill();
ctx.stroke();


//ojos
ctx.beginPath();
ctx.arc(144,160,25,0,Math.PI*2);
ctx.fillStyle='brown';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(250,160,25,0,Math.PI*2);
ctx.fillStyle='brown';
ctx.fill();
ctx.stroke();

//cejas izquierda
ctx.beginPath();
ctx.moveTo(220, 90);//inicia
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineTo(280, 110);//termina
ctx.stroke();

ctx.beginPath();
ctx.moveTo(110, 110);//inicia
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineTo(160, 90);//termina
ctx.stroke();

//lentes
ctx.beginPath();
ctx.moveTo(80,120);//izquierda arriba
ctx.lineTo(200,120);//derecha arriba
ctx.lineTo(170,210);//derecha abajo
ctx.lineTo(120,210);//izquierda abajo
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,120);//izquierda arriba
ctx.lineTo(310,120);//derecha arriba
ctx.lineTo(270,210);//derecha abajo
ctx.lineTo(220,210);//izquierda abajo
ctx.closePath();
ctx.stroke();
