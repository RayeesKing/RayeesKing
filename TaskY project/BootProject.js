const taskContainer= document.querySelector(".task__container");
console.log(taskContainer);
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //this ${} thing will be dynamic thing , dynamic means we change it every second
        imageUrl: document.getElementById('imageurl').value, //the .value keyword used to we get only values in the console
        taskTitle: document.getElementById('tasktitle').value,
        taskType: document.getElementById('tasktype').value,
        taskDescription: document.getElementById('taskdescription').value
    }
    const newCard=`
    <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
      <div class="card">
        <div class="card-header d-flex justify-content-end gap-2">
          <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
          <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="card-body">
          <img src=${taskData.imageUrl} class="card-img-top" alt="...">
          <h5 class="card-title mt-3 text-primary">${taskData.taskTitle}</h5>
          <p class="card-text">${taskData.taskDescription}</p>
          <a href="#" class="btn btn-primary">${taskData.taskType}</a>
        </div>
      </div>
    </div>
    `

    taskContainer.insertAdjacentHTML('beforeend',newCard);

};