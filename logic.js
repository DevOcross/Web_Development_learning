function addTaskBtn() {
    var add_btn  = document.getElementById('new-add-btn');
    var task_div = document.getElementById('new-task-div');
    var task_List = document.getElementById('tasklist');
    if (task_div.style.display == "none",
        task_List.style.display == "block") {
        task_div.style.display = "block";
        task_List.style.display = "none";

      
    } else {
      task_div.style.display = "none";
      task_List.style.display = "block";

    }
  
  }

