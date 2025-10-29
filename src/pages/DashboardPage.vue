<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4 text-center">📚 Dashboard Biblioteca</h1>

    <nav class="flex gap-4 justify-center mb-6">
      <RouterLink to="/libros" class="text-blue-500 hover:underline">Libros</RouterLink>
      <RouterLink to="/libros/nuevo" class="text-blue-500 hover:underline">Agregar Libro</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
