<template>
    <div v-show="showWords">
        <div v-for="(word, index) of words" :key="`${index}-${word}`">
            <slot :word="word"></slot>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Words',
    props: ['showWords', 'words'],
    mounted() {
        console.log('mounted', this.showWords, this.words)
    }
}
</script>

<style>
</style>
