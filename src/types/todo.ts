export type Todos = {
    id: number;
    content: string;
    done: boolean;
};

export type TodoListItem = {
    todo: {
        id: number;
        content: string;
        done: boolean;
    };
    toggleTodoListItemStatus: any;
    deleteTodoListItem: any;
};

export type FormatProps = {
    title: string;
    as: any;
    fontSize: {
        base: string;
        md: string;
    };
    mt?: string;
};
  
export type FormatListItem = {
    title: string;
    as: string;
    fontSize: {
        base: string;
        md: string;
    };
    todoList: Todos[];
    toggleTodoListItemStatus: any;
    deleteTodoListItem: any;
};

export type AddFormat = {
    placeholder: string;
    leftIcon: any;
    buttonText: string;
    inputEl: string;
    handleAddTodoListItem: any;
};
