import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
//makes sure actions flow through reducers in app
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                 key={book.title}
                 onClick={() => this.props.selectBook(book)}
                 className="list-group-item">
                 {book.title}
                 </li>
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

// anythign returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever select|Book is called, the result should be passed to all our the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
    
}

// Prmote booklist from a component to a container.
// It need to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);