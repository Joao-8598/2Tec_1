let canvas = document.getElementById('canv')
let ctx = canvas.getContext('2d')
let w = canvas.width = document.body.offsetWidth
let h = canvas.height = document.body.offsetHeight
let cols = Math.floor(w/10)+1
let yPos = Array(cols).fill(0)

//prencha o fundo com alguma cor (fundo inicial)
ctx.fillStyle = '#fff';
ctx.fillRect(0,0,w,h);

function DesenhaMatrix(){
    ctx.fillStyle = '#0001'; //background
    ctx.fillRect(0,0,w,h); //desenha a area defina

    ctx.fillStyle ='#FFD700'; //cor da letra
    ctx.font ='10pt Space Grotesk, sans-serif'; // tamanho e fonte da letra

    //altera por cada coluna de texto
    yPos.forEach((y,ind)=> {
        //gera um caracter aleatorio com codiugo ascii entre 0e 128
        let text = String.fromCharCode(Math.random()*128);
        let x = ind * 10;
        ctx.fillText(text,x,y);

        if(y>400 + Math.random() * 1000) yPos[ind]= 0;
            else yPos[ind] = y + 20;
    })}
    setInterval(DesenhaMatrix, 50);