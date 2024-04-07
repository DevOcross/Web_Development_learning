function addtask() {
    var add_btn  = document.getElementById('new-add-btn');
    var task_div = document.getElementById('new-task-div');
    if (task_div.style.display == "none") {
        task_div.style.display = "block";
      
    } else {
      task_div.style.display = "none";
    }
  
  }