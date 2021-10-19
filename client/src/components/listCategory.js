// import { connect } from 'react-redux';
const ListCategory = (props) => {
    return (<div>
        <h1> ListCategory work</h1>
        {props.list.map((item) => {
            return (<div key={item.id}>

                <b>{item.name}</b>
            </div>
            )
        })}
    </div>);
}
const mapStateToProp = state => {
    return {
        list: state.categoryArr
    }
}
export default ListCategory;
// export default connect(mapStateToProp)(ListCategory);