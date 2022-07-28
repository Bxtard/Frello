const BASE_URL = 'http://localhost:8080/api/users';

export async function getUsers() {
  const response = await fetch(`${BASE_URL}`);
  return response.json();
}

export async function getUser(id) {
  // code here
  const response = await fetch(`${BASE_URL}${id}`);
  return response.json();
}
export async function getUserBy(name, value) {
  // code here
  const response = await fetch(`${BASE_URL}?${name}_like=${value}`);
  return response.json();
}

export async function createUser(user) {
  // code here
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

/* export async function updateCharacter(character) {
  // code here
  const options = {
    method: 'PATCH'
  }
}

export async function deleteCharacter(id) {
  // code here
  const response = await fetch(`${BASE_URL}/characters/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}
 */