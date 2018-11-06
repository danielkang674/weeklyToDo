import dbUrl from '../config.js';

const saveTodoDbService = async (data) => {
  try {
    const response = await fetch(`${dbUrl}/db/saveTodo`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodoService = async (id) => {
  try {
    const response = await fetch(`${dbUrl}/db/deleteTodo`, {
      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTodoDbService = async (day) => {
  try {
    const todos = await fetch(`${dbUrl}/db/getTodo?day=${day}`, {
      method: 'GET',
      mode: 'cors'
    });
    return todos.json();
  } catch (err) {
    console.log(err);
  }
};

export default saveTodoDbService;