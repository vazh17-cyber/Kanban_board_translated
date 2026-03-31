<template>
  <div class="h-screen w-full bg-neutral-900 text-neutral-50">
    <div class="flex justify-center h-full w-full gap-3 overflow-scroll p-12">
      <Column v-for="col in columns" :key="col.id" v-bind="col" />
      <BurnBarrel />
    </div>
  </div>
</template>

<script setup>
import Column from "./Column.vue";
import BurnBarrel from "./BurnBarrel.vue";

const columns = [
  { id: "backlog", title: "Backlog", color: "text-neutral-500" },
  { id: "todo", title: "TODO", color: "text-yellow-200" },
  { id: "doing", title: "In progress", color: "text-blue-200" },
  { id: "done", title: "Complete", color: "text-emerald-200" },
];
</script>