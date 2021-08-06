<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th align="center">タスク</th>
          <th>状態</th>
        </tr>
      </thead>

      <thead>
        <tr v-for="todo in filteredTodos" :key="todo.index">
          <td>{{todo.id}}</td>
          <td>{{todo.task}}</td>
          <td>
            <button v-if="todo.state === 'working'" @click="changeState(todo.id)">作業中</button>
            <button v-else @click="changeState(todo.id)">完了</button>
          </td>
          <td><button @click="deleteTask(todo.id)">削除</button></td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['todos', 'filteredTodos'],
    methods: {
      changeState(index) {
        this.$emit("sendTaskState", index);
      },
      deleteTask(index) {
        this.$emit("sendDeleteTask", index);
      }
    }

  }
</script>