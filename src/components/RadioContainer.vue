<template>
    <div class="radio-container">
        <RadioForm id="review-radio-both" :name="name" value="both" text="Show both" v-model="rValue" @change="updateValue"/>
        <RadioForm id="review-radio-words" :name="name" value="words" text="Hide words" v-model="rValue" @change="updateValue"/>
        <RadioForm id="review-radio-translations" :name="name" value="translations" text="Hide translations" v-model="rValue" @change="updateValue"/>
    </div>
</template>

<script>
import RadioForm from "@components/RadioForm.vue";

export default {
    name: 'RadioContainer',
    props: ['radioValue', 'name'],
    data() {
        return {
            rValue: this.radioValue
        }
    },
    model: {
        prop: 'radioValue',
        event: 'change'
    },
    components: {
        RadioForm
    },
    methods: {
        updateValue() {
            this.$emit('change', this.rValue)
        }
    }
}
</script>

<style lang="scss">
.radio-container {
  display: flex;
  flex-direction: row;
  .form-check {
    margin-right: 30px;
  }
}
</style>
