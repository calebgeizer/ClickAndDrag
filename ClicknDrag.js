//* Click and Drag to move SVG Element *//

// Find SVG Element
var svg = document.getElementsByTagName('svg')[0];

svg.style.position = 'absolute';

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

// On Click Event, toggle move SVG Element
svg.addEventListener('click', function(e) {
  if (svg.style.cursor == 'move') {
      svg.style.cursor = 'default';

      document.removeEventListener('mousemove', moveSVG,true);
  } else {
        svg.style.cursor = 'move';

        // Get Current Position
        var currentX = svg.getBoundingClientRect().left;
        var currentY = svg.getBoundingClientRect().top;

        // Get Mouse Position
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        
        moveSVG = function(e) {
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
        
        document.addEventListener('mousemove', moveSVG,true);
  }
});

// find all event listeners
var eventListeners = document.querySelectorAll('[data-event]');



