import {filter, map, reduce} from './library.js'

let students = []

function newStudent(ar, name, age){
    return {ar, name, age}
}

function fillStudents(number){
    for(var i = 0; i < number; i++){
        students.push(newStudent(i, "Nome" + i, 10 + i))
    }
}

fillStudents(10)
console.log("Alunos Modelo")
console.log(students);

function major(student){
    return(student.age >= 18)
}

function threeYears(student){
    return ({
        name: student.name,
        age: student.age + 3
    })
}

function sumAge(total, student){
    return (student.age + total)
}

function juntaNome(txt, student){
    return (student.name + txt)
}

//filter | maiores de idade
console.log("FILTER - Maiores de Idade")
console.log(filter(students, major))
console.log(students.filter((student) => (student.age >= 18)))
console.log(students.filter(major))

//map | idade dos alunos daqui a 3 anos
console.log("MAP - Alunos 3 anos mais velhos")
console.log(map(students, threeYears))
console.log(students.map((student) => ({name: student.name, age: student.age + 3})))
console.log(students.map(threeYears))

//reduce | 
console.log("REDUCE - Media das idades")
console.log(reduce(students, sumAge) / students.length)
console.log(students.reduce(sumAge, 0) / students.length)

//console.log(reduce(students, juntaNome))
