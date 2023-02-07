const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [
      {
        item: "task1",
        isDone: false,
      },
    ],
  }),
  methods: {
    // 新規タスク追加
    addItem: function (e) {
      if (this.newItem === "") return;

      let todo = {
        item: this.newItem,
        isDone: false,
      };

      this.todos.push(todo);

      this.newItem = "";
    },

    // タスクを削除
    deleteItem: function (index) {
      console.log("delete");
      this.todos.splice(index, 1);
    },
  },
});

app.mount("#app");
