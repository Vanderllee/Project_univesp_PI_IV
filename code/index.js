const porta = 8080
	
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
	
app.use(bodyParser.urlencoded({extended:true}))
	
app.get('/person/:id', (req, res) => {
	res.send(bancoDeDados.getPerson(req.params.id))
})


app.get('/persons', (req, res) => {
	res.send(bancoDeDados.getPersons())
})
	
app.post('/persons', (req, res) => {
	const person = bancoDeDados.savePerson({
		nome: req.body.nome,
		turma: req.body.turma
		
	})
	
	res.send(person) // JSON
})
	
app.put('/person/:id', (req, res) => {
	const person = bancoDeDados.savePerson({
		id: req.params.id,
		nome: req.body.nome,
		turma: req.body.turma
	})
	
	res.send(person) // JSON
})

// implementar  o método delete! 
	
app.delete('/person/:id', (req, res) => {
	const person = bancoDeDados.delPerson(req.params.id)
		res.send(person) // JSON 
})


app.listen(porta, () => {
	console.log(`Servidor atendendo na porta ${porta}.`)
})