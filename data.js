import axios from 'axios';

const getData = async (user_id) => {
    const {data: users} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);         //usersların listelenmesi
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);  //postların listelenmesi
    return {users,posts}    //users ve postların obje halinde dışarı aktarılması
}

export default getData