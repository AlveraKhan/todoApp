
var  list = document.getElementById("list")
function addItem(){
    var todo = document.getElementById("todo-item")
    var li = document.createElement("li")
    var li_text = document.createTextNode(todo.value)
    li.appendChild(li_text)

    var delBtn = document.createElement("button")
    var btnText = document.createTextNode("DELETE")
    delBtn.appendChild(btnText)
    li.appendChild(delBtn)
    delBtn.setAttribute("class" , "btn")
    delBtn.setAttribute("onclick" , "deleteItems(this)")
    
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class" , "btn")
    editBtn.setAttribute("onclick" , "editItems(this)") 
     
    list.appendChild(li)
    todo.value = ""


}

function deleteItems(e){
    e.parentNode.remove();
}
function deleteAll(){
   list.innerHTML = " "
}
function editItems(e){
  console.log(e.parentNode.firstChild.nodeValue)
  var val = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = val;
}


