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
  <div class="flex justify-center items-center min-h-screen bg-gray-50 px-4">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-100">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">
        Agregar nuevo libro
      </h2>

      <form @submit.prevent="agregarLibro" class="space-y-5">
        <div>
          <label class="block text-gray-700 font-medium mb-1">ISB</label>
          <input v-model="isb" type="text" placeholder="Ej: 978-3-16-148410-0"
            class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Título</label>
          <input v-model="titulo" type="text" placeholder="Título del libro"
            class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Autor</label>
          <input v-model="autor" type="text" placeholder="Autor del libro"
            class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Páginas</label>
          <input v-model.number="paginas" type="number" placeholder="Cantidad de páginas" min="1"
            class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required />
        </div>

        <button type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all">
          Guardar libro
        </button>
      </form>
    </div>
  </div>
</template>
