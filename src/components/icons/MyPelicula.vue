<script setup lang="ts">
interface Props {
    nombre: string;
    año: number;
    id: number;
}
    const props = defineProps<Props>()
</script>

<template>
    <div class="card p-3">
        <h3 style="text-wrap: balance"> {{ props.nombre }}</h3>
        <div class="d-flex justify-content-between gap-3">
            <span> Año de lanzamiento: {{ props.año }}</span>
            <span> ID: {{ props.id }}</span>
        </div>
    </div>
</template>