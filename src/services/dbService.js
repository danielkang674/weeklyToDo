import dbUrl from '../config.js';

const saveTodoDB = async (data) => {
  try {
    const response = await fetch(`${dbUrl}/db/saveTodo`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export default saveTodoDB;