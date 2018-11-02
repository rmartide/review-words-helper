<template>
    <div class="review-container">
        <RadioContainer :name="name" v-model="radioValue" />
        <div class="row no-gutters">
            <div class="col-2">
                <hr>
                <WordsContainer :showWords="showWords" :words="words"></WordsContainer>
            </div>
            <div class="col-3">
                <hr>
                <TranslationsContainer :showTranslations="showTranslations" :translations="translations"></TranslationsContainer>
            </div>
        </div>
    </div>
</template>

<script>
import { mockedDictionary } from "@services/mock-data";
import CheckForm from "@components/CheckForm.vue";
import RadioContainer from "@components/RadioContainer.vue";
import WordsContainer from "@components/WordsContainer.vue";
import TranslationsContainer from "@components/TranslationsContainer.vue";

export default {
    name: "Review",
    data() {
        return {
            words: mockedDictionary.words,
            translations: mockedDictionary.translations,
            showWords: false,
            showTranslations: false,
            radioName: "review-radio",
            name: 'review-radio-keker',
            radioValue: 'both'
        };
    },
    filters: {
        join(values) {
            return values.join(", ");
        }
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
        TranslationsContainer
    }
};
</script>

<style>
</style>
