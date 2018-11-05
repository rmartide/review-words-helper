<template>
    <div v-show="!showTranslations">
        <div v-for="(translation, index) of translations" :key="`${index}-${translation[0]}`" class="separator">
            <slot :translation="translation"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Translations',
    props: ['showTranslations', 'translations']
}
</script>

<style scoped>
.separator {
    border-top: 1px solid rgba(0,0,0,.1);
    padding-top: 15px;
    margin-bottom: 15px;
}
</style>
