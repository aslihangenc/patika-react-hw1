import axios from "axios";

async function getData(userId) {
  const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const postsRes = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  const data = userRes.data;
  data.posts = postsRes.data;
  return data;
}

export default getData;


export function logData() {
  document.querySelector('#btn').addEventListener('click', async () => {
    const userId = document.querySelector('#id').value;
    const data = await getData(userId);
    console.log(data);
  });
}