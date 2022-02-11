export interface ITodos {
    id: string;
    content: string;
    done: boolean;
}

export interface ITodoup {
    id?: string;
    content?: string;
    done: boolean;
}

export interface ITodoListItem {
    todo: ITodos
    toggleTodoListItemStatus: (arg1: string, arg2: boolean) => void;
    deleteTodoListItem: (arg1: string) => void;
}

export interface IFormatProps {
    title: string;
    as: any;
    fontSize: {
        base: string;
        md: string;
    };
    mt?: string;
}
  
export interface IFormatListItem {
    todoList: Array<ITodos>;
    toggleTodoListItemStatus: (arg1: string, arg2: boolean) => void;
    deleteTodoListItem: (arg1: string) => void;
}

export interface IAddFormat {
    placeholder: string;
    leftIcon: any;
    buttonText: string;
    inputEl: string;
    handleAddTodoListItem: () => void;
}
