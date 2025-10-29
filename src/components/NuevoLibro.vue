<script setup lang="ts">
import { ref } from 'vue'
import { useBibliotecaStore } from '../stores/useBibliotecaStore'

const titulo = ref('')
const autor = ref('')
const paginas = ref<number | null>(null)
const store = useBibliotecaStore()

function agregarLibro() {
    store.addLibro({
        titulo: titulo.value,
        autor: autor.value,
        paginas: paginas.value,
        disponible: true
    })

    titulo.value = ''
    autor.value = ''
    paginas.value = 0
}
</script>
