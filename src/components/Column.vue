<template>
  <div class="w-56 shrink-0">
    <div class="mb-3 flex justify-between">
      <h3 :class="['font-medium', color]">{{ title }}</h3>
      <span class="text-sm text-neutral-400 dark:text-neutral-500 transition-colors duration-300">{{ cards.length }}</span>
    </div>

    <div
      @drop="handleDrop"
      @dragover.prevent="active = true"
      @dragleave="active = false"
      :class="['h-full transition-colors duration-300', active && 'bg-neutral-200/50 dark:bg-neutral-800/50']"
    >
      <Card v-for="c in cards" :key="c.id" :card="c" />

      <DropIndicator :column="id" beforeId="-1" />
      <AddCard :column="id" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useKanbanStore } from "../stores/kanban";

import Card from "./Card.vue";
import AddCard from "./AddCard.vue";
import DropIndicator from "./DropIndicator.vue";

const props = defineProps({
  id: String,
  title: String,
  color: String,
});

const store = useKanbanStore();
const active = ref(false);

const cards = store.getCardsByColumn(props.id);

const handleDrop = (e) => {
  const cardId = e.dataTransfer.getData("cardId");
  store.moveCard(cardId, props.id);
  active.value = false;
};
</script>