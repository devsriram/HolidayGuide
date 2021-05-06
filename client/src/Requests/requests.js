import axios from 'axios';

export const getAllPosts = () => async (dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:5000/getPosts');
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await axios.post('http://localhost:5000/addPost',post);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log("Cannot create Post",error.message);
    }
}

// const getAllPosts = () => {
//     axios.post('http://localhost:5000/addPost',postData)
//             .then((res) => { console.log("Data sent",res) })
//             .catch((error) => {
//                 console.log("Cannot send data to Database ",error);
//             })
// }