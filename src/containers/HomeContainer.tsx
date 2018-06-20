import * as React from 'react';
import{Container} from 'flux/utils';

import TodoStore from '../stores/TodoStore';
import TodoList from '../components/TodoList';
import{deleteTodo} from '../actions/TodoActions';

interface IState{
    todos:string[]
}

class HomeContainer extends React.Component<{},IState>{
   public  static getStores(){
return [
    TodoStore

];
    }
    public static calculateState():IState{
        return {
    todos:TodoStore.getState().todos

        }
    }
public render(){
    
return (<TodoList todos={this.state.todos} deleteTodo={deleteTodo}/>)
}
}
export default Container.create(HomeContainer)