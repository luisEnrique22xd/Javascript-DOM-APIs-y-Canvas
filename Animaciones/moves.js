const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let direction = 1;
// 1 derecha
// 2 abajo
// 3 izquierda
// 4 arriba
function ghost(x, y){
    ctx.font =' 50px Serif';
    ctx.fillText ('🧟', x, y);
    humans.forEach(human => {
        if(x + 30 > human.indexX && x + 30 < human.indexX + 40 ){
            if(y - 30 > human.indexY -40 && y-30 < human.indexY){
                human.comido = true;
                //alert("Se lo comió");
            }
        }
        
    });
}

let idx = 0;
let idy = 0;

const humans =[];
for(let i =0; i< 10;i ++){
    const human ={
        indexX : Math.floor(Math.random() * 650),
        indexY : Math.floor(Math.random() * 400),
        pinta : function(){
            if(!this.comido){
                ctx.font =' 30px Serif';
                ctx .fillText('🧠', this.indexX, this.indexY)

            }
        },
        comido : false,
    }
    humans.push(human);
}

setInterval(() =>{
   ctx.clearRect(0,0,650,400);
   humans.forEach(human => human.pinta());
   ghost(idx, idy);
   switch(direction){
    case 1:
        idx += 5;
        break 
        case 2:
            idy += 5;
            break
            case 3: 
            idx -= 5;
            break
            case 4:
                idy -= 5;
                break;
   }
   if(idx > 650) idx =10;
   if(idy > 400) idy =10;
   if(idx < 10) idx =650;
   if(idy < 10) idy =400;

}, 10);

document.querySelector('body')
.addEventListener('keydown',function(e){
    switch(e.key){
        case 'ArrowUp':
            direction = 4;
            break
            case 'ArrowRight':
                direction = 1;
                break
                case 'ArrowLeft':
                    direction = 3;
                    break
                    case 'ArrowDown':
                        direction = 2;
                        break;
    }
    
});
