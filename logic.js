function addTaskBtn() {
    var add_btn  = document.getElementById('new-add-btn');
    var task_div = document.getElementById('new-task-div');
    var task_List = document.getElementById('tasklist');
    var tbd = document.getElementById('task-body-div')
    if (task_div.style.display == "none",
        task_List.style.display == "block",
        tbd.style.display == "block") {
        task_div.style.display = "block";
        task_List.style.display = "none";
        tbd.style.display = "none"

      
    } else {
      task_div.style.display = "none";
      task_List.style.display = "block";
      tbd.style.display = "block"

    }
  
  }

