<template>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" :id="id" :checked="value" @input="$emit('input', $event.target.checked)">
        <label class="form-check-label" :for="id">{{text}}</label>
    </div>
</template>

<script>
export default {
    name: 'CheckForm',
    props: ['id', 'text', 'value']
};
</script>

<style>
</style>
