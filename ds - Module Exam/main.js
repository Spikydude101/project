// DS - MODULE EXAM



// Canvas Setup

let cnv = document.getElementById('myCanvas');

let ctx = cnv.getContext('2d')

cnv.width = 1200;
cnv.height = 700;


let laserz = [];


// Global Vars
let space;

// Event Listeners
document.addEventListener('mousemove' , mouseEventHandler );
document.addEventListener('keydown' , keypressHandler);


// Canvas Drawing

for (let i = 0; i < 100; i++){
    laserz.push({
        x:0,
        y: Math.floor(Math.random() * cnv.height)  , 
        speed:Math.floor(Math.random() * 30 + 10 ) , 
        width:Math.floor(Math.random()* 200  + 50), 
        height:5
    });
 


       
        

}





requestAnimationFrame(drawLaserz);


function drawLaserz() {
    //draw lasers 

    //Make image appear as background
   
    let space = document.getElementById('spacebg');



    
    ctx.drawImage(space, 0, 0, cnv.width, cnv.height);


    for(let i = 0 ; i < laserz.length; i++) {

    
        ctx.fillStyle = 'red';
        
        ctx.fillRect(laserz[i].x , laserz[i].y , laserz[i].width , laserz[i].height); 
        





        
        if(laserz[i].x < cnv.width) {
            laserz[i].x +=laserz[i].speed;
        }else if(laserz[i].x >= cnv.width){
            laserz[i].x = 0;
            laserz[i].y = Math.round(Math.random()* cnv.height);
        }
    }









    


    
    requestAnimationFrame(drawLaserz);
}








// getRandomColor
function getRandomColor() {
    // create an array of the numbers 0-9 and letters A-F (hint: you can start with the string '0123456789ABCDEF' and split it to save time)
    let creator = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 'A' , 'B' , 'C' , 'D' , 'E' , 'F'];


    // create a variable to store the color. Initialize it with the value '#'
    let color = '#' ;
    // loop 6 times, each time adding a random value from the array created above.
   for(let i = 0; i < creator.length; i ++){
    creator[i]+= Math.floor(Math.random() * 6)
    color+= creator[i];
   }

    // return the color variable
    return color;
    // e.g. #35B6FA
}


// mouseEventHandler Handler
function mouseEventHandler(event){
    console.log(event.code);
    if(event.code == event.clientY){
        for(let i = 0; i < laserz.length; i++){
            laserz[i].y = event.clientY;
    
        }
    }
    

 


}

// keypressHandler
function keypressHandler(event){
   console.log(event.code);
   if(event.code == 'KeyQ') {
       for(let i = 0; i < laserz.length; i++){
            laserz[i].speed += 1;
        }
        
    
    }else if(event.code == 'KeyZ') {
       for(let i = 0; i < laserz.length; i ++){
            laserz[i].speed -= 1;
        }
    
    }    

}

// myBonusFunction
function myBonusFunction(){

}