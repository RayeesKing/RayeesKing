function save() {
    var name=document.getElementById('input-name')
    var age=document.getElementById('input-age')
    var course=document.getElementById('input-course')
    var male=document.getElementById('input-male')
    var female=document.getElementById('input-female')
    var email=document.getElementById('input-email')


    var table=document.querySelector('.table2')
    var namerow=document.createElement("tr")
    namerow.setAttribute('id','display1')
    var agerow=document.createElement('th')
    var courserow=document.createElement('th')
    var malerow=document.createElement('th')
    var femalerow=document.createElement('th')
    var emailrow=document.createElement('th')
    var deleterow=document.createElement('th')
    
    namerow.innerHTML='<th>'+ name.value +'</th>'
    agerow.innerHTML=age.value
    courserow.innerHTML=course.value
    emailrow.innerHTML=email.value
    deleterow.innerHTML= '<button onclick="deletefunc()">Delete</button>'
    
    
    table.append(namerow)
    namerow.append(agerow)
    namerow.append(courserow)
    
    if (male.checked){
        malerow.textContent='Male'
        namerow.append(malerow)
    }
    if (female.checked){
        femalerow.textContent='Female'
        namerow.append(femalerow)
    }

    namerow.append(emailrow)
    namerow.append(deleterow)
}

function deletefunc(){
    // event.target.parentElement.remove()
    document.getElementById('display1').style.display='none'
}