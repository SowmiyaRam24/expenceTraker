let form=document.getElementById('addFrom');
 let itemList=document.getElementById('adding');
 
form.addEventListener('click',addItem);
itemList.addEventListener('click',deleteItem);

function addItem(e){
    e.preventDefault();
    //get element by id 
    var newItems=document.getElementById("items").value;
    var newItems1=document.getElementById("items1").value;
    var newItems2=document.getElementById("items2").value;
//var newItems1=document.getElementById("items1").value;//
    var li=document.createElement('li');
    li.className='list-group-item';
    //add text node with input value
    li.append(document.createTextNode(newItems));
    li.append(document.createTextNode(newItems1));
    li.append(document.createTextNode(newItems2));
    var negative = document.createElement("button");
    negative.classList='btn btn-primary btn-sm float-right delete';
    negative.appendChild(document.createTextNode("❌"))
    li.appendChild(negative)
    itemList.appendChild(li)
    // localStorage.setItem("name",newItems);
    // localStorage.setItem("emailss",newItems1);
    // localStorage.setItem("phonenumber",newItems2);
    let sow={
        name :newItems,
        emailss:newItems1 ,
        phonenumber:newItems2
    }
    localStorage.setItem("userDetails",JSON.stringify(sow))
    
}
//function remove items
 function deleteItem(e){
     e. preventDefault();
      if (e.target.classList.contains("delete")){
        if(confirm("are you sure")){
            var li =e.target.parentElement;
            itemList.remove(li);
        }
      }

  }
