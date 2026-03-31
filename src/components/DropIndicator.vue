<template>
  <div
    :data-before="beforeId ?? '-1'"
    :data-column="column"
    class="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
  />
</template>

<script setup>
const props = defineProps({
  beforeId: {
    type: [String, null],
    default: null,
  },
  column: {
    type: String,
    required: true,
  },
});
</script>