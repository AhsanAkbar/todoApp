var list = document.getElementById('list')
function addinput(){
    var todo_item = document.getElementById('todo-item');

    //creating li tag
    var li = document.createElement('li')
    li.setAttribute('class','listitems')
    var litext = document.createTextNode(todo_item.value);
    li.appendChild(litext);

    //creating button
    var dltbtn = document.createElement('button');
    dltbtn.setAttribute("class","deletebutton")
    var dlttext = document.createTextNode('Delete');
    dltbtn.setAttribute('onclick','deleteitem(this)');
    dltbtn.appendChild(dlttext);
    //creating edit button
    var editbtn = document.createElement('button');
    editbtn.setAttribute("class","editbutton")
    var edittext = document.createTextNode('edit');
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick","edititem(this)");



    li.appendChild(dltbtn)
    list.appendChild(li);
    todo_item.value = "";   
}
function deleteitem(e){
    e.parentNode.remove();
}
function deleteall(){
    list.innerHTML = "";
}

function edititem(e){
    var editvalue=  prompt("Edit your item",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editvalue;
}