<script setup>

import {reactive} from "vue";
import axios from "axios";
import MyFormKitFileInput from "@/shared/ui/myFormKitInputFile/MyFormKitFileInput.vue";

const sendSomeThing = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      return response;
}

const data = reactive({
  sendFunc: sendSomeThing,
})

const library = reactive({
  MyFormKitFileInput: MyFormKitFileInput,
})

const formSchema = [
  {
    $cmp: "MyFormKitFileInput",
    props: {
      onChangeFunction: "$sendFunc"
    }
  },
  {
    $cmp: "MyFormKitFileInput",
    props: {
      onChangeFunction: "$sendFunc"
    }
  },
  {
    $cmp: "MyFormKitFileInput",
    props: {
      onChangeFunction: "$sendFunc"
    }
  },
]
</script>

<template>
  <FormKit type="form" :actions="false" @submit="(data) => console.log(data)">
    <FormKitSchema :schema="formSchema" :data="data" :library="library"/>
  </FormKit>
</template>
