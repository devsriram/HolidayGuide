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
        console.log("Likes updated");
    } catch (error) {
        console.log("Cannot create Post",error.message);
    }
}

export const likePost = (id,likes) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`http://localhost:5000/${id}/likePost`, {likes: likes});
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log("Cannot update post: ",error.message);
    }
}

export const dislikePost = (id,dislikes) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`http://localhost:5000/${id}/dislikePost`, {dislikes: dislikes});
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log("Cannot update post: ",error.message);
    }
}

// const getAllPosts = () => {
//     axios.post('http://localhost:5000/addPost',postData)
//             .then((res) => { console.log("Data sent",res) })
//             .catch((error) => {
//                 console.log("Cannot send data to Database ",error);
//             })
// }