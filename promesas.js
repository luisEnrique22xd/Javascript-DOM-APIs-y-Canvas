const names = ["Frank", "Peter", "John", "Bruce"]

const getNamesPromise =(valor) => new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            console.log('Ejecuta promesa');
            if(valor){
                resolve(names);
            }else{
                reject(new Error('fallo'))
            }
            
        }, 1000)
    }
)

//console.log(getNamesPromise);
console.log('Inicia peticion')
getNamesPromise(1).then(
    (datos)=>{
        console.log(datos)
        console.log('finaliza peticion')
    }
) 
    .catch(error => console.log(error))
console.log('Continua peticion')