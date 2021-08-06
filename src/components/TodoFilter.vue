<template>
  <div>
    <input type="radio" id="all" value="all" v-model="radioState">全て
    <input type="radio" id="working" value="working" v-model="radioState">作業中
    <input type="radio" id="finish" value="finish" v-model="radioState">完了
  </div>
</template>

<script>
  export default {
      props: ['todos'],
      data: function() {
        return {
          radioState: 'all',
        }
      },
      computed: {
        filteredTodo:function() {
          if(this.radioState === 'all') {
            return this.todos;
          } else if (this.radioState === "working") {
            return this.todos.filter(todo => todo.state === 'working' );
          } else {
            return this.todos.filter(todo => todo.state === 'finish' );
          } 
        }
      },
      watch: {
        radioState: function() {
          this.$emit('sendRadioState', this.radioState);
          this.$emit('sendFilteredTodo', this.filteredTodo);
        }
      }
  }
</script>