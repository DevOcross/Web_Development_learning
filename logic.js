function newTaskBtn(){
    let nTBM = document.getElementById("new_task_body_main")
    let tBI = document.getElementById("task_body_items")

    if(nTBM.style.display == "none",
       tBI.style.display == "block"){
        nTBM.style.display = "block"
        tBI.style.display = "none"
    }
    else{
        nTBM.style.display = "none"
        tBI.style.display = "block"
    }

    
}