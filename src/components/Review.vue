<template>
<div>
    <div v-for="(row, index) of dictionary" :key="`${index}-${row.word}`">
        {{row.word}}
    </div>
</div>
</template>

<script>
import { mockedDictionary } from '@services/mock-data';

export default {
    name: 'Review',
    data() {
        return {
            dictionary: mockedDictionary
        }
    }
}
</script>

<style>

</style>
