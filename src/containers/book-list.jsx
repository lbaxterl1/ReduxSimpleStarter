import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state) {
// whatever is returned from the state will get reutrned as props in Booklist

    return {
        books: state.books
    };
}

// connect takes a funciton and component 
export default connect(mapStateToProps)(BookList);