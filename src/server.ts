import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Eu sou Full Cycle' });
});

app.listen(3333, () => {
  console.log('Server started on port 3333, Eu sou Full Cycle.')
});