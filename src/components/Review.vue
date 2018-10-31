<template>
    <div class="review-container">
        <RadioContainer :name="name" v-model="radioValue"/>
        <div class="row no-gutters">
            <div class="col-2">
                <hr>
                <div v-show="!showWords">
                    <div v-for="(word, index) of words" :key="`${index}-${word}`">
                        {{word}}
                        <hr>
                    </div>
                </div>
                <div v-show="showWords">
                    <div v-for="(word, index) of words" :key="`${index}-${word}`">
                        <ShowValue :word="word"></ShowValue>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <hr>
                <div v-show="!showTranslations">
                    <div v-for="(translation, index) of translations" :key="`${index}-${translation[0]}`">
                        {{translation | join}}
                        <hr>
                    </div>
                </div>
                <div v-show="showTranslations">
                    <div v-for="(translation, index) of translations" :key="`${index}-${translation[0]}`">
                        <!-- Try scoped-slots to add the button as a children of the component -->
                        <!-- At the end of the day this approach adds watchers so maybe the swapping
                between the word and the button should use just one loop, v-show on the children
                 -->
                        
                        <!-- It needs more padding when hovering -->
                        <ShowValue :word="translation.join(', ')"></ShowValue>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mockedDictionary } from "@services/mock-data";
import CheckForm from "@components/CheckForm.vue";
import ShowValue from "@components/ShowValue.vue";
import RadioContainer from "@components/RadioContainer.vue";

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
        ShowValue,
        RadioContainer
    }
};
</script>

<style>
</style>
