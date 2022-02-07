export type Todos = {
    id: any;
    content: any;
    done: any;
};

export type TodoListItem = {
    todo: any;
    toggleTodoListItemStatus: any;
    deleteTodoListItem: any;
};

export type FormatProps = {
    title: any;
    as: any;
    fontSize: any;
    mt?: any;
};
  
export type FormatListItem = {
    title: any;
    as: any;
    fontSize: any;
    todoList: any;
    toggleTodoListItemStatus: any;
    deleteTodoListItem: any;
};

export type AddFormat = {
    placeholder: any;
    leftIcon: any;
    buttonText: any;
    inputEl: any;
    handleAddTodoListItem: any;
};
