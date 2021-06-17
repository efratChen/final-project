import { connect } from 'react-redux';
const ListCategory = (props) => {
    return (<div>
         <b>jjj</b>
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
export default connect(mapStateToProp)(ListCategory);