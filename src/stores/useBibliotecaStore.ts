import { defineStore } from 'pinia'
import type { ILibro } from "../models/libro"

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
                // Simulación de carga
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
            this.data.push(libro)
            this.error = null
            console.log(`📚 Libro agregado: ${libro.titulo} de ${libro.autor}`)
        },

        updateEstado(titulo: string) {
            const libro = this.data.find((l) => l.titulo === titulo)
            if (!libro) {
                this.error = `⚠️ No se encontró el libro con el título "${titulo}"`
                return
            }

            libro.disponible = !libro.disponible
            this.error = null
            console.log(`🔄 Se cambió el estado del libro "${titulo}"`)
        },
    },

    getters: {
        sortedByTitle: (state): ILibro[] => {
            return [...state.data].sort((a, b) => a.titulo.localeCompare(b.titulo))
        },

        sortedByAutor: (state): ILibro[] => {
            return [...state.data].sort((a, b) => a.autor.localeCompare(b.autor))
        },

        sortedByPageNumber: (state): ILibro[] => {
            return [...state.data].sort((a, b) => a.paginas - b.paginas)
        },
    },
})
