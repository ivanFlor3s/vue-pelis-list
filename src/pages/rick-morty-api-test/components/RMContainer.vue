

<template>
    <p>Se viene una de las mejores consultas a una api</p>
    <div v-if="personaje">
        <div class="card">
            <div class="card-header">
                    {{ personaje.name }}
            </div>
            <div class="card-body">
                <div class="d-flex">
                    <img :src="personaje.image" :alt="personaje.name">
                    <div class="p-3">
                        <p>Species: {{ personaje.species }}</p>
                        <p>
                            Status: 
                            <span class="badge bg-success">
                                {{ personaje.status }}
                            </span>
                        </p>
                        <p>
                            Origin: {{ personaje.origin.name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >
import axios from 'axios';
import { ref } from 'vue';
import type { Personaje } from '../interfaces';

const URL_API = 'https://rickandmortyapi.com/api/character/1';

const personaje = ref<Personaje>();

axios.get(URL_API).then((response) => {
    personaje.value = response.data as Personaje;
});

</script>