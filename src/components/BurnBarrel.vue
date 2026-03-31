<template>
  <div
    @drop="onDrop"
    @dragover.prevent="active = true"
    @dragleave="active = false"
    :class="[
      'mt-10 grid h-56 w-56 place-content-center rounded border text-3xl',
      active ? 'border-red-800 bg-red-800/20 text-red-500'
             : 'border-neutral-500 bg-neutral-500/20'
    ]"
  >
    🗑️
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useKanbanStore } from "../stores/kanban";

const store = useKanbanStore();
const active = ref(false);

const onDrop = (e) => {
  const id = e.dataTransfer.getData("cardId");
  store.deleteCard(id);
  active.value = false;
};
</script>