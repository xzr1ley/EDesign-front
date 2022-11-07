function uploadImage() {
    console.log(this)
    console.log(area)
    if (this.files && this.files.length) {
        let newimg = document.createElement('img')
        newimg.className = "draggable"
        newimg.classList.add('newimg')
        Area.appendChild(newimg)
        newimg.src = window.URL.createObjectURL(this.files[0])
        
    }
}

function highlightDropZone(event) {
    event.preventDefault();
    this.classList.add('drop')
}

function unHighlightDropZone(event) {
    event.preventDefault();
    this.classList.remove('drop')
}


const input = document.getElementById('img');
const area = document.getElementById('drop-zone');
const dropFiles = document.getElementsByClassName('Area');

if (dropFiles && dropFiles.length) {
    const dropField = dropFiles[0];
    dropField.addEventListener('dragover', highlightDropZone);
    dropField.addEventListener('dragenter', highlightDropZone);
    dropField.addEventListener('dragleave', unHighlightDropZone);
    dropField.addEventListener('drop', (event) => {
        const dt = event.dataTransfer;
        console.log('drop', dt.files);
        unHighlightDropZone.call(dropField, event);
        uploadImage.call(dt);
    });
}

input.addEventListener('change', uploadImage);









let isDragging = false

// let currentDroppable = null;

const dropZone = document.querySelector('.area')
console.log(dropZone)


document.addEventListener('mousedown', function(event) {

let imagee = document.querySelector('.newimg')

imagee.addEventListener('dblclick', () => {
    imagee.classList.add('draggable')
})


let dragElement = event.target.closest('.draggable');

dragElement.addEventListener('dblclick', ()=>{
    dragElement.classList.remove('draggable')
    dragElement.style.cursor ="default"

})

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