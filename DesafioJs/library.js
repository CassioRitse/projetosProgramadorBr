export function filter(students, callback){
    let studentsFiltered = []

    for(let student of students){
        if(callback(student)){
            studentsFiltered.push(student)
        }
    }

    return studentsFiltered
}

export function map(students, callback){
    let studentMapped= []

    for(let student of students){
        studentMapped.push(callback(student))
    }

    return studentMapped
}


export function reduce(students, callback){
    let infoReduced = 0
    
    for(let student of students){
        infoReduced = callback(infoReduced, student)
    }

    return infoReduced
}
