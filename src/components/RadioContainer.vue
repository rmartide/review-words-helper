<template>
	<div class="radio-container" @change="updateValue">
		<RadioForm :id="`${name}-both`" :name="name" value="both" text="Show both" v-model="rValue"/>
		<RadioForm :id="`${name}-words`" :name="name" value="words" text="Hide words" v-model="rValue"/>
		<RadioForm :id="`${name}-translations`" :name="name" value="translations" text="Hide translations" v-model="rValue"/>
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
	watch: {
		radioValue(newValue) {
			console.log('watching...', newValue);
			if (this.rValue !== newValue)
				this.rValue = newValue;
		}
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
