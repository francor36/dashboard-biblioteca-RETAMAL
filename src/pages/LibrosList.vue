<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useBibliotecaStore } from '@/stores/biblioteca'
import LibroCard from '@/components/LibroCard.vue'

const store = useBibliotecaStore()

onMounted(() => store.fetchInitialData())

const librosOrdenados = computed(() => store.sortedByTitle)
</script>

<template>
  <div>
    <div v-if="store.isLoading" class="text-center text-gray-500">Cargando...</div>
    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <LibroCard
        v-for="libro in librosOrdenados"
        :key="libro.isb"
        :libro="libro"
        @toggle="store.updateEstado(libro.isb)"
      />
    </div>
  </div>
</template>
