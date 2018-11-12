<template>
    <div>
        <div class="d-flex justify-content-center">
            <button @click="swapperoni()">Swapperoni Mixeroni</button>
        </div>
        <div class="d-flex justify-content-center">
            <Categories :categories="categories" v-model="selectedCategory"></Categories>
        </div>
        <div class="d-flex justify-content-center">
            <RadioContainer :name="name" v-model="radioValue" />
        </div>
        <div class="row no-gutters justify-content-center" v-for="(dc, index) in data[this.selectedCategory]" :key="`w-${index}-${dc.word}`">
            <div class="col-3 separator">
                <Display :value="dc.word" :show="showWords"></Display>
            </div>
            <div class="col-3 separator">
                <Display :value="dc.translations.join(', ')" :show="showTranslations"></Display>
            </div>
        </div>
    </div>
</template>

<script>
import { mockedDictionary, data } from "@services/mock-data";
import CheckForm from "@components/CheckForm.vue";
import RadioContainer from "@components/RadioContainer.vue";
import Categories from "@components/Categories.vue";
import Display from "@components/Display.vue";
import Utils from '@services/utils';
import Vue from 'vue';

const categories = Object.keys(data);

export default {
    name: "Review",
    data() {
        return {
            showWords: true,
            showTranslations: true,
            radioName: "review-radio",
            name: 'review-radio-keker',
            radioValue: 'both',
            categories: categories,
            selectedCategory: categories[0],
            data: data
        };
    },
    watch: {
        radioValue(newValue) {
            switch (newValue) {
                case 'both': this.showWords = this.showTranslations = true;
                    break;
                case 'words': this.showWords = false;
                    this.showTranslations = true;
                    break;
                case 'translations': this.showWords = true;
                    this.showTranslations = false;
                    break;
            }
        }
    },
    components: {
        CheckForm,
        RadioContainer,
        Categories,
        Display
    },
    methods: {
        swapperoni() {
            const swapped = Utils.shuffle(data[this.selectedCategory].slice());
            data[this.selectedCategory] = swapped;
        }
    }
};
</script>

<style>
.separator {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
