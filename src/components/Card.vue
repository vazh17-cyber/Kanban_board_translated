<template>
  <div
    draggable="true"
    @dragstart="onDrag"
    class="cursor-grab rounded border border-neutral-300 dark:border-neutral-700 bg-bg-secondary p-3 active:cursor-grabbing transition-colors duration-300"
  >
    <p class="text-sm">{{ card.title }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  card: Object,
});

const onDrag = (e) => {
  e.dataTransfer.setData("cardId", props.card.id);
};
</script>