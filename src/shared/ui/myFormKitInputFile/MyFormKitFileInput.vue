<script setup>
import styles from "./MyFormKitInputFile.module.scss"

import {ref} from "vue";

const props = defineProps(["onChangeFunction", "inputLabel", "inputName"])

const handleFileUpload = async (event) => {
  inputState.value = "loading"
  await props.onChangeFunction()
      .then(res => {
        inputState.value = "loaded";
        console.log(res)
      })
      .catch(err => {
        inputState.value = "error"
        console.log(err)
      })
}

const inputState = ref("not_chosen")

</script>

<template>
  <label :for="inputName" :class="styles.inputWrapper" :aria-inputstate="inputState">
    <FormKit
        type="file"
        accept="image/*"
        @change="handleFileUpload"
        :classes="{
          outer: styles.formKitInputOuter,
        }"
    />

    <span :class="styles.uploadFileButton">
      Выберите файл
    </span>

    <span>
      {{ inputState }}
    </span>
  </label>
</template>