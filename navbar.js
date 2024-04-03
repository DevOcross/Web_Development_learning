function addNewTask(){
    let add_btn = document.getElementById("new-add-btn")
    let new_task_div = document.getElementById("new-tast-perent-div")
    let cancel_task_btn = document.getElementById("task-cancel-btn")

     add_btn.addEventListener("click", function(){
        if (new_task_div.style.display == "none"){
            new_task_div.style.display = "block"
        }
        else{
            new_task_div.style.display = "none"
        }
     })

     cancel_task_btn.addEventListener("click", function(){
        if (new_task_div.style.display == "block"){
            new_task_div.style.display = "none"
        }
        else{
            new_task_div.style.display = "block"
        }
     })
}