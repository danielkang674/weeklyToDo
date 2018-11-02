import dbUrl from '../config.js';

const db = {

  saveTodoDB: (data) => {
    let str = JSON.stringify(data);
    console.log(str);
    return fetch(`${dbUrl}/db/saveTodo`, {
      method: 'POST',
      mode: 'cors',
      body: str,
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(console.log);
  }
}

export default db;