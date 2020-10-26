const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const students = {}

function saveStudent(student) {
    if(!student.id) student.id = sequence.id

    students[student.id] = student

    return student
}

function getStudent (id) {
    return students[id] || 'Aluno não cadastrado!'
}

function getStudents() {
    return Object.values(students)
}

function deleteStudent(id) {
    const student = students[id]
    delete student
    return student
}

module.exports = {saveStudent, getStudent, getStudents, deleteStudent}