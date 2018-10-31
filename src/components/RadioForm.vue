<template>
    <div class="form-check">
        <input class="form-check-input" type="radio" :name="name" :id="id" :value="value" @change="$emit('change',value)">
        <label class="form-check-label" :for="id">
            {{text}}
        </label>
    </div>
</template>

<script>
export default {
    name: 'RadioForm',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: ['name', 'id', 'text', 'checked', 'value']
}
</script>

<style>
</style>
