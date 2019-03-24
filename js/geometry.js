//DOESN'T TAKE USER INPUT, RESULTS ARE PRINTED TO THE CONSOLE

function calcArea(width,height) {
    let area = width * height;
    console.log(area);
}

calcArea(5,22);


function calcVolume(width, height, _length) {
    let volume = width * height * _length;
    console.log(volume);
}

calcVolume(4.5,12.5,17.4);


function circleArea(radius) {
    let area = Math.PI * radius**2;
    console.log(area);
}

circleArea(7.2);


function sphereVolume(radius) {
    let volume = 4/3 * Math.PI * radius**3;
    console.log(volume);
}

sphereVolume(7.2);









