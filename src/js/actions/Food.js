export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		payload: {
			id: 1,
			isDone: false,
			text: text
		}
	};
}
