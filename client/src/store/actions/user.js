import axios from "axios";

export const getuser = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/user/").then(succ => {
            console.log(succ.data);
            dispatch(succ.data)
        }).catch(err => console.log(err.message))
    }
}