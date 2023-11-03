const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //this ${} thing will be dynamic thing , dynamic means we change it every second
        imageUrl: document.getElementById('imageurl').value,
        taskTitle: document.getElementById('tasktitle').value,
        taskType: document.getElementById('tasktype').value,
        taskDescription: document.getElementById('taskdescription').value
    }
    console.log(taskData);
};