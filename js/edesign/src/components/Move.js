let isDragging = false

// let currentDroppable = null;

const dropZone = document.querySelector('.area')
console.log(dropZone)


document.addEventListener('mousedown', function(event) {




let dragElement = event.target.closest('.draggable');


    if (!dragElement) return;

    event.preventDefault();

    dragElement.ondragstart = function() {
        return false;
    };

    let cords, shiftX, shiftY;

    startDrag(dragElement, event.clientX, event.clientY);

    function onMouseUp(event) {
      finishDrag();
    };

    function onMouseMove(event) {
      moveAt(event.clientX, event.clientY);

    }

    function startDrag(element, clientX, clientY) {
      if(isDragging) {
        return;
      }

      isDragging = true;

      document.addEventListener('mousemove', onMouseMove);
      element.addEventListener('mouseup', onMouseUp);

      shiftX = clientX - element.getBoundingClientRect().left;
      shiftY = clientY - element.getBoundingClientRect().top;

      element.style.position = 'fixed';

      moveAt(clientX, clientY);
    };


    function finishDrag() {
      if(!isDragging) {
        return;
      }

      isDragging = false;

      dragElement.style.top = parseInt(dragElement.style.top) + window.location + 'px';
      dragElement.style.position = 'absolute';

      document.removeEventListener('mousemove', onMouseMove);
      dragElement.removeEventListener('mouseup', onMouseUp);
    }

    function moveAt(clientX, clientY) {
      let newX = clientX - shiftX;
      let newY = clientY - shiftY;


      let newBottom = newY + dragElement.offsetHeight;


      if (newBottom > document.documentElement.clientHeight) {
        
        let docBottom = document.documentElement.getBoundingClientRect().bottom;

        
        let scrollY = Math.min(docBottom - newBottom, 10);

        
        if (scrollY < 0) scrollY = 0;

        window.scrollBy(0, scrollY);

        
        newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
      }

      if (newY < 0) {
        let scrollY = Math.min(-newY, 10);
        if (scrollY < 0) scrollY = 0; 

        window.scrollBy(0, -scrollY);
        newY = Math.max(newY, 0); 
      }


      if (newX < 0) newX = 0;
      if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
        newX = document.documentElement.clientWidth - dragElement.offsetWidth;
      }

      dragElement.style.left = newX + 'px';
      dragElement.style.top = newY + 'px';
    }
    
    dropZone.addEventListener('dragenter', (e) =>{
        // console.log('dragenter')
        console.log(dropZone)
      });


});