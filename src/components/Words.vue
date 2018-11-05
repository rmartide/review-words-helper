<template>
    <div v-show="showWords">
        <div v-for="(word, index) of words" :key="`${index}-${word}`" class="separator">
            <slot :word="word"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Words',
    props: ['showWords', 'words']
}
</script>

<style scoped>
.separator {
    border-top: 1px solid rgba(0,0,0,.1);
    padding-top: 15px;
    margin-bottom: 15px;
}
</style>
