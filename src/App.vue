<script setup lang="ts">
import Board from './components/Board.vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-bg-primary text-text-primary transition-colors duration-300">
    <header class="p-4 bg-bg-secondary flex justify-between items-center transition-colors duration-300">
      <h1 class="text-xl font-bold">Kanban Board</h1>
      <button @click="themeStore.toggleTheme" class="px-4 py-2 bg-weather-primary text-white rounded transition-colors duration-300">
        {{ themeStore.isDark ? 'Light' : 'Dark' }} Mode
      </button>
    </header>
    <Board />
  </div>
</template>
