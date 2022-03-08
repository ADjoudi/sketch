const input = document.querySelector('#input');
const applyBtn =  document.querySelector('button');
const canvas = document.querySelector('.canvas');

let userInput = null;
let nbrPixels = null;
let divWidth;




const getNbrPixels = () =>{
    userInput = parseInt(input.value)
    nbrPixels = userInput ** 2;
    console.log(nbrPixels);
    divWidth = (canvas.clientWidth / userInput) + 'px';
};
const populateCanvas = () =>{
    //empty canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    //populate
    for(let counter = 0; counter < nbrPixels; counter++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixel.style.backgroundColor = '#015313';
        pixel.style.width = divWidth ;
        pixel.style.height = divWidth;

        canvas.appendChild(pixel);
    }
};

applyBtn.addEventListener('click', (e)=>{
    getNbrPixels();
    populateCanvas();
    const pixels = document.querySelectorAll('.pixel');
    let clicking = false;
    pixels.forEach((pixel)=>{
        pixel.addEventListener('mousedown', (e)=>{
            e.target.style.backgroundColor = 'white';
            clicking = true;
            
        });
        pixel.addEventListener('mouseup', (e)=>{
            clicking = false;
        });
    
        pixel.addEventListener('mouseover', (e)=>{
            if(clicking){
                e.target.style.backgroundColor = 'white';
            }
        });
   
    });
});



