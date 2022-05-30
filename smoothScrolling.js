//* Smooth Scrolling for SVG Element *//

// Find SVG Element
var svg = document.getElementsByTagName('svg')[0];

svg.style.position = 'absolute';
var scale = 1;
var scaleRegEx = /scale\(([0-9\.]+)\)/;

var mouseX = 0;
var mouseY = 0;
var currentX = 0;
var currentY = 0;


// on keydown
document.addEventListener('keydown', function (e) {
    svg.style.transition = 'all 0.2s';

    // get window width and height
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var [currentX, currentY] = format(svg.style.left, svg.style.top);


    // if plus key down
    if (e.key == '+' || e.key == '=') {
        // increase scale
        scale += 0.25;
        // set new scale
        svg.style.transform = 'scale(' + scale + ') ';
        var currentScale = scaleRegEx.exec(svg.style.transform)[1];

        // Set New Position
        svg.style.left = currentX-((mouseX-(windowWidth/2))/currentScale) + 'px';
        svg.style.top = currentY-((mouseY-(windowHeight/2))/currentScale) + 'px';
    }

    // if minus key down
    if (e.key == '-' || e.key == '_') {
        // decrease scale
        scale -= 0.25;
        // set new scale
        svg.style.transform = 'scale(' + scale + ')';

        var currentScale = scaleRegEx.exec(svg.style.transform)[1];
        
        if ( currentScale <= 1) {
            svg.style.left = '0px';
            svg.style.top = '0px';
        } else {
            svg.style.left = currentX-((mouseX-(windowWidth/2))/currentScale) + 'px';
            svg.style.top = currentY-((mouseY-(windowHeight/2))/currentScale) + 'px';
        }
    }
    
});


// on mousemove
document.addEventListener('mousemove', function (e) {
    // Get Mouse Position
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function format(left, top) {
    
    left = left.replace('px', '');
    top = top.replace('px', '');

    left = parseFloat(left);
    top = parseFloat(top);

    if (isNaN(left)) { left = 0; } 
    if (isNaN(top)) { top = 0; }

    return [left, top];
}
