
const { textInput, resetBtn, refresh, addform } = require("./config");

const vider = () => {
  textInput.value = '';
};

resetBtn.addEventListener('click',()=>{
    vider();
})

refresh.addEventListener('click',()=>{
    location.reload();
})

addform.addEventListener('submit', async (event) => {
    event.preventDefault();
    let datas=formToJson('addform');
    let dataToSend= {
                    datas: datas.textInput
                };
    try{
    let response =await fetch(urlApi+"tasks",{
        method:"POST",
        body:JSON.stringify(dataToSend),
        headers:{
            "Content-Type":"application/json"
        }
    })
    if(response.ok)
        {
            addTodoToTable(tasks);
            return alert("success")
        }
    let res=  await response.json()
    alert(res.message)
    }
    catch(e)
    {
        console.log(e)
        alert("error")
    }
});
  
getTasks();
const addtasks = (task) => {
 
  const mainDiv = document.createElement('div');
  const paragraphe = document.createElement('p');
  const deleteBtn = document.createElement('button');

  paragraphe.innerText = textInput.value;
  deleteBtn.innerText = 'Delete';

  mainDiv.classList.add('task');
  paragraphe.classList.add('para');
  deleteBtn.classList.add('delete');

  mainDiv.appendChild(paragraphe);
  mainDiv.appendChild(deleteBtn);

  document.getElementById('list').appendChild(mainDiv);

  deleteBtn.addEventListener('click', async ()=>{ 
    try{
        let response =await fetch(urlApi+"task/"+task._id,{
            method:"DELETE",
            body:JSON.stringify(formToJson('form')),
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(response.ok)
            {
                tr.remove();
                return checkAuth;
            }
        let res=  await response.json()
        alert(res.message)
        }
        catch(e)
        {
            console.log(e)
            alert("error")
        }
})
};


let getTasks=async () =>{
    let response =await fetch(urlApi+"tasks",{
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response=>response.json()).then(data => {
        data.forEach((task) => addtasks(task));
        })
    .catch((error) =>console.log(error));
}
