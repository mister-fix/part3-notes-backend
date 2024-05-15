const express = require("express");
const app = express();
const PORT = 3001;

let notes = [
	{
		id: 1,
		content: "HTML is easy",
		important: true,
	},
	{
		id: 2,
		content: "Browser can execute only JavaScript",
		important: false,
	},
	{
		id: 3,
		content: "GET and POST are the most important methods of HTTP protocol",
		important: true,
	},
];

app.use(express.json());

app.get("/", (request, response) => {
	response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
	response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
	// Type-casting the request.params.id to Number as it is a string in its natural state
	const id = Number(request.params.id);
	const note = notes.find((note) => note.id === id);

	// Conditional to check if note exists, and to handle un-found notes accordingly
	if (note) {
		response.json(note);
	} else {
		response.status(404).end();
	}
});

const generateId = () => {
	const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
	return maxId + 1;
};

app.post("/api/notes/", (request, response) => {
	const body = request.body;

	if (!body.content || body.content === "") {
		return response.status(400).json({
			error: "missing content",
		});
	}

	const note = {
		content: body.content,
		important: Boolean(body.important) || false,
		id: generateId(),
	};

	notes = notes.concat(note);

	response.json(note);
});

app.delete("/api/notes/:id", (request, response) => {
	const id = Number(request.params.id);
	notes.filter((note) => note.id !== id);

	response.status(204).end();
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
