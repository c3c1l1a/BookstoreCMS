const ADD = 'books/ADD';
const REMOVE = 'books/REMOVE';

export default function booksReducer( books = [], action) {
	switch (action.type){
		case ADD: 
			return [...books, action.book];
		case REMOVE:
			return books.filter((book) => action.book !== book);
		default:
			return state;
	}
}

export function addBook (book){
	return {
		type: ADD,
		book,
	}
}

export function removeBook (book) {
	return {
		type: REMOVE,
		book,
	}
}