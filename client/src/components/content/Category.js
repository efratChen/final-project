import { Component ,useEffect, useState } from "react";
// לקצר ניתו
import { getCategory } from 'D:/Users/User/Desktop/תכנות שנה ב/Project/client/src/store/actions/category.js';
import { connect } from "react-redux";
import axios from "axios";

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = { categoryCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/category')
            .then(res => {
                this.setState({ categoryCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    getCategory() {
        return this.state.categoryCollection.map((data, i) => {
            return (<div>{i} {data.name} </div>);
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
        <h1>{this.getCategory()}</h1>
                    {/* <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table> */}
                </div>
            </div>
        )
    }
}























// const Category = (props) => {
//     useEffect(() => {
//         props.getCategory();
//     }, [])
//     return (<>
//         <h1>all categories</h1>
//         <div>
//             {
//                 props.arr.map((item) => {
//                     return <div>{item.name}</div>
//                 })
//             }
//         </div>
//     </>);
// }
// const mapStateToProps = state => {
//     return {
//         arr: state.categoryArr
//     }
// }
// export default connect(mapStateToProps, { getCategory })(Category);