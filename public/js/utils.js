export const formToJson=(idForm)=>{
    let form=document.getElementById(idForm)
    let formData=new FormData(form)
    let datas={}
    formData.forEach((element,key)=>datas[key]=element)
    return datas;
}
