<template>
  <div
    class="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
    <div>
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        {{ libro.titulo }}
      </h2>
      <p class="text-gray-600 mb-1">
        <span class="font-medium">Autor:</span> {{ libro.autor }}
      </p>
      <p class="text-gray-600 mb-1">
        <span class="font-medium">Páginas:</span> {{ libro.paginas }}
      </p>

      <div class="mt-3 inline-block px-3 py-1 text-sm rounded-full font-medium"
        :class="libro.disponible ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'">
        {{ libro.disponible ? 'Disponible' : 'Prestado' }}
      </div>
    </div>

    <button class="mt-4 w-full py-2 rounded-lg text-white font-medium transition-colors duration-200" :class="libro.disponible
      ? 'bg-blue-600 hover:bg-blue-700'
      : 'bg-gray-400 cursor-not-allowed'" :disabled="!libro.disponible" @click="$emit('toggle', libro.isb)">
      {{ libro.disponible ? 'Prestar' : 'No disponible' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ILibro } from '../stores/Biblioteca'
defineProps<{ libro: ILibro }>()
defineEmits(['toggle'])
</script>
