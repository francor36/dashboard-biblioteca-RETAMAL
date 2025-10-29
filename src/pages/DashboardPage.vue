<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 flex flex-col items-center p-8">
    <!-- HEADER -->
    <header
      class="w-full max-w-3xl bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-6 py-5 mb-8 text-center border border-white/50">
      <h1 class="text-3xl font-extrabold text-indigo-700 flex items-center justify-center gap-2">
        <span>Dashboard Biblioteca</span>
      </h1>
      <p class="text-gray-600 mt-1">Organizá y gestioná tus libros fácilmente</p>
    </header>

    <!-- NAV -->
    <nav
      class="flex gap-6 justify-center mb-8 bg-white/80 backdrop-blur-md px-8 py-3 rounded-xl shadow-md border border-white/50">
      <RouterLink to="/libros" class="text-gray-700 font-semibold hover:text-indigo-600 transition-all duration-200"
        active-class="text-indigo-700 underline underline-offset-4">
        Libros
      </RouterLink>

      <RouterLink to="/libros/nuevo"
        class="text-gray-700 font-semibold hover:text-indigo-600 transition-all duration-200"
        active-class="text-indigo-700 underline underline-offset-4">
        Agregar Libro
      </RouterLink>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="w-full max-w-5xl bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/40">
      <RouterView />
    </main>
  </div>
</template>
