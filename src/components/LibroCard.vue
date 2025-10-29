<script setup lang="ts">
import type { ILibro } from '@/models/libro'

const props = defineProps<{ libro: ILibro }>()
const emit = defineEmits(['toggle'])
</script>

<template>
  <div
    class="border rounded-lg p-4 shadow transition"
    :class="libro.disponible ? 'border-green-400' : 'border-red-400 opacity-70'"
  >
    <p class="text-xs text-gray-500">ISB: {{ libro.isb }}</p>
    <h2 class="text-lg font-bold">{{ libro.titulo }}</h2>
    <p class="text-gray-600">Autor: {{ libro.autor }}</p>
    <p class="text-gray-600">Páginas: {{ libro.paginas }}</p>
    <p class="text-gray-500 text-sm">Última actualización: {{ libro.fechas }}</p>

    <button
      class="mt-2 px-4 py-2 rounded text-white"
      :class="libro.disponible ? 'bg-red-500' : 'bg-green-500'"
      @click="emit('toggle')"
    >
      {{ libro.disponible ? 'Prestar' : 'Devolver' }}
    </button>
  </div>
</template>
