// /stores/kanban.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useKanbanStore = defineStore("kanban", () => {
  const cards = ref([
    { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
    { title: "Document Notifications service", id: "4", column: "backlog" },
    { title: "Research DB options", id: "5", column: "todo" },
  ]);

  // --- getters ---
  const getCardsByColumn = (column:string) =>
    computed(() => cards.value.filter((c) => c.column === column));

  // --- actions ---
  const addCard = (title:string, column:string) => {
    cards.value.push({
      id: crypto.randomUUID(),
      title,
      column,
    });
  };

  const moveCard = (cardId:string, newColumn:string) => {
    const card = cards.value.find((c) => c.id === cardId);
    if (card) card.column = newColumn;
  };

  const deleteCard = (cardId:string) => {
    cards.value = cards.value.filter((c) => c.id !== cardId);
  };

  const reorderCard = (cardId:string, beforeId:string, column:string) => {
    let copy = [...cards.value];

    let card = copy.find((c) => c.id === cardId);
    if (!card) return;

    card = { ...card, column };

    copy = copy.filter((c) => c.id !== cardId);

    if (beforeId === "-1") {
      copy.push(card);
    } else {
      const index = copy.findIndex((c) => c.id === beforeId);
      copy.splice(index, 0, card);
    }

    cards.value = copy;
  };

  return {
    cards,
    getCardsByColumn,
    addCard,
    moveCard,
    deleteCard,
    reorderCard,
  };
});