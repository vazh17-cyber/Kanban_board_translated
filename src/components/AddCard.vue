<template>
    <div>
        <form v-if="adding" @submit.prevent="submit">
            <textarea v-model="text" class="w-full bg-neutral-800 p-2" />
            <button v-if="text.trim().length > 0" class="cursor-pointer relative overflow-hidden px-2 py-3 font-semibold text-white rounded-xl
         bg-gradient-to-r from-green-300 via-green-450 to-green-600
         bg-[length:200%_100%] bg-left
         transition-all duration-500 ease-out
         hover:bg-right
         shadow-lg hover:shadow-green-500/30
         active:scale-95">
                Add
            </button>
            <button v-if="text.trim().length == 0" @click.prevent="cancel" class="cursor-pointer relative overflow-hidden px-2 py-3 font-semibold text-white rounded-xl
         bg-gradient-to-r from-red-300 via-red-450 to-red-600
         bg-[length:200%_100%] bg-left
         transition-all duration-500 ease-out
         hover:bg-right
         shadow-lg hover:shadow-green-500/30
         active:scale-95">
                Cancel
            </button>
        </form>

        <button v-else @click="adding = true">Add card</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useKanbanStore } from "../stores/kanban";

const props = defineProps({
    column: String,
});

const store = useKanbanStore();

const text = ref("");
const adding = ref(false);

const cancel = () => {
    adding.value = false
}

const submit = () => {
    if (!text.value.trim()) return;

    store.addCard(text.value, props.column);

    text.value = "";
    adding.value = false;
};
</script>