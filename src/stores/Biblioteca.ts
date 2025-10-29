import { defineStore } from 'pinia'
import type { ILibro } from '@/models/libro'

interface LibrosState {
  isLoading: boolean
  data: ILibro[]
  error: string | null
}

export const useBibliotecaStore = defineStore('libros', {
  state: (): LibrosState => ({
    isLoading: true,
    data: [],
    error: null,
  }),

  actions: {
    async fetchInitialData() {
      this.isLoading = true
      try {
        // Simulación de carga inicial
        await new Promise((r) => setTimeout(r, 300))
        this.data = []
        this.error = null
      } catch (err) {
        this.error = 'Error al cargar los datos iniciales'
      } finally {
        this.isLoading = false
      }
    },

    addLibro(libro: ILibro) {
      if (this.data.find((l) => l.isb === libro.isb)) {
        this.error = ` Ya existe un libro con ISB "${libro.isb}"`
        return
      }

      this.data.push({
        ...libro,
        fechas: new Date().toLocaleDateString(),
      })
      this.error = null
      console.log('📚 Libro agregado:', this.data)
    },

    updateEstado(isb: string) {
      const libro = this.data.find((l) => l.isb === isb)
      if (!libro) {
        this.error = ` No se encontró el libro con ISB "${isb}"`
        return
      }

      libro.disponible = !libro.disponible
      libro.fechas = new Date().toLocaleDateString()
      this.error = null
    },
  },

  getters: {
    sortedByTitle: (state): ILibro[] =>
      [...state.data].sort((a, b) => a.titulo.localeCompare(b.titulo)),
    sortedByAutor: (state): ILibro[] =>
      [...state.data].sort((a, b) => a.autor.localeCompare(b.autor)),
    sortedByPageNumber: (state): ILibro[] =>
      [...state.data].sort((a, b) => a.paginas - b.paginas),
  },
})
