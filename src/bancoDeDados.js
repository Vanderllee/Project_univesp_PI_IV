const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const persons = {}

function savePerson(person) {
    if(!person.id) person.id = sequence.id

    persons[person.id] = person

    return person
}

function getPerson (id) {
    return persons[id] || 'Aluno não cadastrado!'
}

function getPersons() {
    return Object.values(persons)
}

function deletePerson(id) {
    const person = persons[id]
    delete person
    return person
}

module.exports = {savePerson, getPerson, getPersons, deletePerson}