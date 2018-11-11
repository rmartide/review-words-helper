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
        <div class="row no-gutters justify-content-center">
            <div class="col-3">
                <WordsContainer :showWords="showWords" :words="words"></WordsContainer>
            </div>
            <div class="col-3">
                <TranslationsContainer :showTranslations="showTranslations" :translations="translations"></TranslationsContainer>
            </div>
        </div>
    </div>
</template>

<script>
import { mockedDictionary, data } from "@services/mock-data";
import CheckForm from "@components/CheckForm.vue";
import RadioContainer from "@components/RadioContainer.vue";
import WordsContainer from "@components/WordsContainer.vue";
import TranslationsContainer from "@components/TranslationsContainer.vue";
import Categories from "@components/Categories.vue";
import Utils from '@services/utils';
import Vue from 'vue';

const categories = Object.keys(data);

export default {
    name: "Review",
    data() {
        return {
            showWords: false,
            showTranslations: false,
            radioName: "review-radio",
            name: 'review-radio-keker',
            radioValue: 'both',
            categories: categories,
            selectedCategory: categories[0]
        };
    },
    watch: {
        radioValue(newValue) {
            switch (newValue) {
                case 'both': this.showWords = this.showTranslations = false;
                    break;
                case 'words': this.showWords = true; this.showTranslations = false;
                    break;
                case 'translations': this.showWords = false; this.showTranslations = true;
                    break;
            }
        }
    },
    components: {
        CheckForm,
        RadioContainer,
        WordsContainer,
        TranslationsContainer,
        Categories
    },
    computed: {
        words() {
            return data[this.selectedCategory].words;
        },
        translations() {
            return data[this.selectedCategory].translations;
        }
    },
    methods: {
        swapperoni() {
            let {words, translations} = data[this.selectedCategory];
            Utils.shuffle(words, translations);
            data[this.selectedCategory].words = words;
            data[this.selectedCategory].translations = translations; 
        }
    }
};
</script>

<style>
</style>
