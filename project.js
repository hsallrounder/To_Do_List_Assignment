const themeColors = document.querySelectorAll('[name="theme"]');

// store themes

const storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
}

const applyTheme = function () {
    const activeTheme = localStorage.getItem('theme');

    themeColors.forEach((themeOption) => {
        if (activeTheme == themeOption.id) {
            themeOption.checked = true;
        }
    })
}

themeColors.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id)
    })
})

document.onload = applyTheme();


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Add Data 

form.addEventListener('submit', addData);
function addData(e) {
    e.preventDefault();
    var text = document.getElementById('main-input').value;

    var newItem = document.createElement('li');
    newItem.className = "list-group-item";
    newItem.appendChild(document.createTextNode(text));

    var dltButton = document.createElement('button');

    dltButton.className = "btn btn-danger btn-sm float-right delete";
    dltButton.appendChild(document.createTextNode('X'));

    newItem.appendChild(dltButton);

    itemList.appendChild(newItem);
    
}

// Remove Data 

itemList.addEventListener('click', removeEvent);

function removeEvent(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('delete kr rhe ho?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Search Filter

filter = document.getElementById("filter");
filter.addEventListener("input", (event) => {
    f = filter.value;
    f = f.toUpperCase();
    li = document.querySelectorAll(".list-group-item");
    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(f) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});



