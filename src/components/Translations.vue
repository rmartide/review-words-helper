<template>
    <div v-show="!showTranslations">
        <div v-for="(translation, index) of translations" :key="`${index}-${translation[0]}`">
            <slot :translation="translation"></slot>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Translations',
    props: ['showTranslations', 'translations']
}
</script>

<style>
</style>
