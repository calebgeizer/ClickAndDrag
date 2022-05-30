//* Click and Drag to move SVG Element *//

// Find SVG Element
var svg = document.getElementsByTagName('svg')[0];
svg.style.transform = 'scale(1)';
svg.style.position = 'absolute';

// Add CSS Animations for svg
svg.style.WebkitAnimation = 'fadeIn 0.2s ease-in-out';
svg.style.MozAnimation = 'fadeIn 0.2s ease-in-out';
svg.style.animation = 'fadeIn 0.2s ease-in-out';

svg.style.left = 0;
svg.style.top = 0;

var moveSVG = function(e) {
    // Get Mouse Position
    var newX = e.clientX;
    var newY = e.clientY;

    // Calculate Offset
    var offsetX = newX - mouseX;
    var offsetY = newY - mouseY;

    // Set New Position
    svg.style.left = (currentX + offsetX) + 'px';
    svg.style.top = (currentY + offsetY) + 'px';
};

var scale = 1;
var scaleRegEx = /scale\(([0-9\.]+)\)/;

// On Click Event, toggle move SVG Element
svg.addEventListener('click', function (e) {

    if (svg.style.cursor == 'move') {
        svg.style.transition = 'all 0.2s';
        svg.style.cursor = 'default';

        document.removeEventListener('mousemove', moveSVG);
      
    } else {
        svg.style.transition = 'none';
        svg.style.cursor = 'move';

        var currentX = svg.style.left;
        var currentY = svg.style.top;

        currentX = currentX.replace('px', '');
        currentY = currentY.replace('px', '');

        currentX = parseFloat(currentX);
        currentY = parseFloat(currentY);


        // Get Mouse Position
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        
        moveSVG = function (e) {
            scale = scaleRegEx.exec(svg.style.transform)[1];
            // Get Mouse Position
            var newX = e.clientX;
            var newY = e.clientY;

            // Calculate Offset
            var offsetX = (newX - mouseX);
            var offsetY = (newY - mouseY);

            // Set New Position
            svg.style.left = (currentX + offsetX) + 'px';
            svg.style.top = (currentY + offsetY) + 'px';
        };
        
        document.addEventListener('mousemove', moveSVG);
    }
    // reg ex to get scale
    var scale = scaleRegEx.exec(svg.style.transform)[1];
});

// find all event listeners
var eventListeners = document.querySelectorAll('[data-event]');