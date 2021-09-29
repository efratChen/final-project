import axios from "axios";

export const getCategory = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/category").then(succ => {
            console.log(succ.data);
            dispatch(succ.data)
        }).catch(err => console.log(err.message))
    }
}
