export const getCategory = () => {
    return (dispatch) => {
        axios.get("http://localhost:3009/category")
            .then(succ => {
                console.log(succ.data);
                //dispatch(saveCakes(succ.data))

            }).catch(err => console.log(err.message))
    }
}
