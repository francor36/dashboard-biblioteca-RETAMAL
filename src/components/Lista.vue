<template>
    <div>
        <div class="flex gap-2 mb-4 items-center">
            <select v-model="orden" class="p-2 border rounded">
                <option value="titulo">Ordenar por título</option>
                <option value="autor">Ordenar por autor</option>
                <option value="paginas">Ordenar por páginas</option>
            </select>


            <router-link to="/libros/nuevo" class="ml-auto btn">+ Nuevo libro</router-link>
        </div>


        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <BookCard v-for="libro in librosOrdenados" :key="libro.isb" :libro="libro" @toggle="toggleDisponibilidad" />
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import { useBibliotecaStore } from '../stores/useBibliotecaStore'
import Libroscard from './Libroscard.vue'


const store = useBibliotecaStore()
const orden = ref<'titulo' | 'autor' | 'paginas'>('titulo')


const librosOrdenados = computed(() => {
    if (orden.value === 'titulo') return store.sortedByTitle
    if (orden.value === 'autor') return store.sortedByAutor
    return store.sortedByPageNumber
})



function toggleDisponibilidad(isb: string) {
    store.updateEstado(isb)
}
</script>