const students=[
    {id: 1,firstName: "John", lastName: "Doe" ,age: 20, grade:'A'},
    {id: 2,firstName: "Jane", lastName: "Smith" ,age: 22, grade:'B'},
    {id: 3,firstName: "Bob", lastName: "Johnson" ,age: 19, grade:'C'},
    {id: 4,firstName: "John", lastName: "Jose" ,age: 21, grade:'D'}
];



function addStudent(student){
    students.push(student)
}

function updateStudentInformation(id,attribute,updateValue){
    for(i=0;i<students.length;i++){
        obj=students[i]
        if(obj.id==id) obj[attribute]=updateValue
    }
}

function deleteStudent(id){
    for(i=0;i<students.length;i++){
        obj=students[i]
        if(obj.id==id) students.splice(i,1)
    }
}
function listAllStudents(){
    for(i=0;i<students.length;i++){
        obj=students[i]
        console.log(obj)
    }
}

function findStudentByGrade(g){
    for(i=0;i<students.length;i++){
        obj=students[i]
        if(obj.grade==g) console.log(obj)
    }
}

function calculateAverageAge(){
    avgAge=0
    for(i=0;i<students.length;i++){
        avgAge+=(students[i].age)
    }
    avgAge/=students.length
    console.log(avgAge)
}




addStudent({id: 5,firstName: "Cartoon", lastName: "Network" ,age: 24, grade:'A'})
updateStudentInformation(2,"grade",'A')
listAllStudents()
deleteStudent(2)
listAllStudents()
findStudentByGrade('A')
calculateAverageAge()