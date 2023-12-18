const taskContainer= document.querySelector(".task__container");
console.log(taskContainer);
const globalStore = [] ;

const getNewCard =(taskData) => 
      `<div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
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

const loadInitialCardData = () => {
  // local storage to get card data
  const getCardData = localStorage.getItem('tasky')

  // convert into normal object
  const {cards} = JSON.parse(getCardData)
  console.log(cards);
  // loop over those array of task object to create HTML card
  cards.map((cardObject)=> {
    taskContainer.insertAdjacentHTML('beforeend',getNewCard(cardObject))

    // update our global storage
    globalStore.push(cardObject)
  })
}

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //this ${} thing will be dynamic thing , dynamic means we change it every second
        imageUrl: document.getElementById('imageurl').value, //the .value keyword used to we get only values in the console
        taskTitle: document.getElementById('tasktitle').value,
        taskType: document.getElementById('tasktype').value,
        taskDescription: document.getElementById('taskdescription').value
    }

    taskContainer.insertAdjacentHTML('beforeend',getNewCard(taskData));
    globalStore.push(taskData)
    localStorage.setItem('tasky',JSON.stringify({cards:globalStore}));
};