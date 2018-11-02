<template>
    <div>
        <Words :showWords="!showWords" :words="words">
            <template slot-scope="scope">
                {{scope.word}}
            </template>
        </Words>
        <Words :showWords="showWords" :words="words">
            <template slot-scope="scope">
                <ShowValue :word="scope.word"></ShowValue>
            </template>
        </Words>
    </div>
</template>

<script>
import Words from "@components/Words.vue";
import ShowValue from "@components/ShowValue.vue";

export default {
    name: 'WordsContainer',
    props: ['showWords', 'words'],
    components: {
        Words,
        ShowValue
    }
}
</script>

<style>
</style>
