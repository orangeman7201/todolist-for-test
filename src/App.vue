<template>
  <div>
    <TodoFilter :todos="todos" @sendRadioState="changeRadioState" @sendFilteredTodo="addFilteredTodo"></TodoFilter>
    <TodoDisplay :todos="todos" :filteredTodos="filteredTodos" @sendTaskState="chageTaskState" @sendDeleteTask="deleteTask"></TodoDisplay>
    <TodoInput @sendItem="addTodo"></TodoInput>
  </div>
</template>

<script>
 export default {
    data: function() {
      return {
        todos: [],
        filteredTodos: [],
        radioState: 'all',
      }
    },
    methods: {
      addTodo(value) {
        this.todos.push(value);
        this.updateId();
      },
      addFilteredTodo(values) {
        this.filteredTodos = [];
        values.forEach(value => {
          this.filteredTodos.push(value);
        })
      },
      updateId() {
        for(let idNum = 0; idNum < this.todos.length; idNum++) {
          this.todos[idNum].id = idNum;
        }
      },
      changeRadioState(value) {
        this.radioState = value;
      },
      chageTaskState(value) {
        if (this.todos[value].state === 'working') {
          this.todos[value].state = 'finish';
        } else {
          this.todos[value].state = 'working';
        }
      },
      deleteTask(value) {
        this.todos.splice(value,1);
        this.updateId();
      }
    },
    watch: {
      todos: {
        handler: function() {
          this.filteredTodos = [];
          if(this.radioState === 'all') {
            this.todos.forEach(todo => {
            this.filteredTodos.push(todo);
          })
          } else if (this.radioState === "working") {
            this.todos.filter(todo => todo.state === 'working' ).forEach(todo => {
            this.filteredTodos.push(todo);
          })
          } else {
            this.todos.filter(todo => todo.state === 'finish' ).forEach(todo => {
            this.filteredTodos.push(todo);
            })
          }
        },
        deep:true,
      }
    }
 }
</script>
