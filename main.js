let i = 0;
let images = [];
let time = 3000;
let fImage = document.querySelector('#img');

//add images to the array folder

images[0] = 's1.jpg' ;
images[1] = 's2.jpg' ;
images[2] = 's3.jpg';
images[3] = 's4.jpg';
images[4] = 's5.jpg';

//function 

function changeImage(){
    fImage.src = images[i];
    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }

setTimeout('changeImage()', time);

}

window.onload = changeImage;

