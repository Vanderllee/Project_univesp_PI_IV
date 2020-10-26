const porta = 8080
	
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./src/bancoDeDados')
	
app.use(bodyParser.urlencoded({extended:true}))
	
app.get('/student/:id', (req, res) => {
	res.send(bancoDeDados.getStudent(req.params.id))
})


app.get('/students', (req, res) => {
	res.send(bancoDeDados.getStudents()) 
})
	
app.post('/students', (req, res) => {
	const student = bancoDeDados.saveStudent({

		name: req.body.name,
		class: req.body.class,
		parants: req.body.parants
		
	})
	
	res.send(student) 
})
	
app.put('/student/:id', (req, res) => {
	const student = bancoDeDados.saveStudent({
		id: req.params.id,
		name: req.body.name,
		class: req.body.class
	})
	
	res.send(student) 
})

	
app.delete('/student/:id', (req, res) => {
	const estudent = bancoDeDados.deleteStudent(req.params.id)
		res.send(estudent) 
})


app.listen(porta, () => {
	console.log(`Server listening in port ${porta}.`)
})