<script setup lang="ts">
// import MyPelicula from './components/MyPelicula.vue'
import RMContainer from './pages/rick-morty-api-test/components/RMContainer.vue'

const peliculas = [
  { id: 1, nombre: "El Padrino", año: 1972 },
  { id: 2, nombre: "Pulp Fiction", año: 1994 },
  { id: 3, nombre: "El Señor de los Anillos: La Comunidad del Anillo", año: 2001 },
  { id: 4, nombre: "Titanic", año: 1997 },
  { id: 5, nombre: "La Lista de Schindler", año: 1993 },
  { id: 6, nombre: "Star Wars: Episodio IV - Una Nueva Esperanza", año: 1977 },
  { id: 16, nombre: "Matrix", año: 1999 },
  { id: 17, nombre: "Forrest Gump", año: 1994 },
  { id: 18, nombre: "El Rey León", año: 1994 },
  { id: 19, nombre: "Volver al Futuro", año: 1985 },
  { id: 20, nombre: "Inception", año: 2010 }
];

</script>

<template>
  <header>
    <h1>Lista de peliculas</h1>
  </header>

  <main>
    <!-- <p>Una de las mejores apps para ordenar una lista de peliculas</p>
    <hr>

    <h2>Cards</h2>
    <div class="d-flex flex-wrap gap-3">
      <MyPelicula v-for="item in peliculas" :key="item.id" :nombre="item.nombre" :año="item.año" :id="item.id">
      </MyPelicula>
    </div> -->
    <RMContainer>
    </RMContainer>
  </main>
</template>

<style scoped></style>
