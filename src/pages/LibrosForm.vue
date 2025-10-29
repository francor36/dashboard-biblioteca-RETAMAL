<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBibliotecaStore } from '@/stores/biblioteca'
import type { ILibro } from '@/models/libro'

const store = useBibliotecaStore()
const router = useRouter()

const isb = ref('')
const titulo = ref('')
const autor = ref('')
const paginas = ref<number | null>(null)

const agregarLibro = () => {
  if (!isb.value || !titulo.value || !autor.value || !paginas.value) return

  const nuevoLibro: ILibro = {
    isb: isb.value,
    titulo: titulo.value,
    autor: autor.value,
    paginas: paginas.value,
    disponible: true,
    fechas: new Date().toLocaleDateString(),
  }

  store.addLibro(nuevoLibro)
  router.push('/libros')
}
</script>

<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">Agregar nuevo libro</h2>
    <form @submit.prevent="agregarLibro" class="space-y-4">
      <input v-model="isb" type="text" placeholder="ISB"
             class="w-full p-2 border rounded" required />
      <input v-model="titulo" type="text" placeholder="Título"
             class="w-full p-2 border rounded" required />
      <input v-model="autor" type="text" placeholder="Autor"
             class="w-full p-2 border rounded" required />
      <input v-model.number="paginas" type="number" placeholder="Páginas"
             class="w-full p-2 border rounded" required />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Guardar
      </button>
    </form>
  </div>
</template>
