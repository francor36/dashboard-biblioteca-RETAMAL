<template>
    <div class="p-4 rounded-2xl shadow-md border transition-opacity" :class="cardClasses">
        <div class="flex justify-between items-start">
            <div>
                <h3 class="font-semibold text-lg">{{ libro.titulo }}</h3>
                <p class="text-sm">{{ libro.autor }}</p>
            </div>
            <div class="text-right">
                <p class="text-xs">{{ libro.paginas }} pág</p>
                <p class="text-xs">Alta: {{ nuevaFecha }}</p>
            </div>
        </div>


        <div class="mt-4 flex gap-2">
            <button class="px-3 py-1 rounded-md border" @click="$emit('toggle', libro.isb)">
                {{ libro.disponible ? 'Prestar' : 'Devolver' }}
            </button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import type { ILibro } from '../models/libro'


const props = defineProps<{ libro: ILibro }>()
const emit = defineEmits<{
    (e: 'toggle', isb: string): void
}>()


const cardClasses = computed(() => {
    return {
        'border-green-300 bg-green-50': props.libro.disponible,
        'border-red-300 bg-red-50 opacity-80': !props.libro.disponible,
    }
})


const nuevaFecha = new Date(props.libro.fechas).toLocaleDateString()
</script>