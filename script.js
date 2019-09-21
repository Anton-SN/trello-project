var create = document.querySelector('.header__create');
var createMenu = document.querySelector('.header__menu');
var createButton = document.querySelector('.btn--create');
var menu = document.querySelector('.header__menu');
var exit = document.querySelector('.exit__btn');
var content = document.querySelector('.page__main');
var input = document.querySelector('.name');
var cancel = document.querySelector('.btn--cancel');
var problem = document.querySelector('.exit__problem');

create.addEventListener('click', function() {
    menu.style.display = "flex";
    create.style.display = "none"
})

document.addEventListener('click', function(event) {
    if (!createMenu.contains(event.target)) e.style.display='none';
  });

exit.addEventListener('click', function() {
    menu.style.display = "none";
    create.style.display = "flex"
    document.querySelector('.name').value='';
})

cancel.addEventListener('click', function() {
    menu.style.display = "none";
    create.style.display = "flex"
    document.querySelector('.name').value='';
})

function deleteButton() {
    
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function closingButton() {
    var j = document.createElement('div');
    j.className = "main__exit exit";
    j.innerHTML = '+';
    j.addEventListener('click', deleteButton)
    this.appendChild(j);
}

function createBoard() {
    var i = document.createElement('div');
    i.innerHTML = document.querySelector('.name').value;
    i.className = "main__btn btn";
    i.addEventListener('mouseover', closingButton, {
        once: "true",
    })
    i.addEventListener('mouseover', function() {
        i.classList.add('main__btn--hover');
    })
    i.addEventListener('mouseout', function() {
        i.classList.remove('main__btn--hover');
    })
    content.appendChild(i);
    document.querySelector('.name').value='';
}

createButton.addEventListener('click', createBoard) 

input.addEventListener('keydown', function() {
    if (event.keyCode == 13) {
        createBoard()
    }
})

