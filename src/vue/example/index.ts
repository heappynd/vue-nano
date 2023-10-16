import { reactive, effect, ref } from "@vue/vue";

// const obj = reactive({
//   name: "tony",
// });

// const obj = ref({
//   name: "zhangsan",
// });

const name = ref("zhangsan");

// console.log(obj.name);
// obj.name = "xxx";

effect(() => {
  console.log("👍👍👍", name.value);
});

effect(() => {
  console.log("👍", name.value);
});

setTimeout(() => {
  // debugger
  name.value = "lisi";
}, 2000);
