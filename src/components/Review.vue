<template>
    <div class="row no-gutters">
        <div class="col-2">
            <CheckForm id="wordsCheck" text="Hide words" v-model="showWords"/>
            <RadioForm id="review-radio-1" :name="name" value="review-value-1" text="Review value 1" v-model="radioValue"/>
            <RadioForm id="review-radio-2" :name="name" value="review-value-2" text="Review value 2" v-model="radioValue"/>
            [{{radioValue}}]
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
        <div class="col-auto">
            <CheckForm id="translationsCheck" text="Hide translations" v-model="showTranslations" />
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
                    <!-- Since there's no point hiding both it should use a radio or just one check but
                 double checkbox it's pointless -->
                    <!-- It needs more padding when hovering -->
                    <ShowValue :word="translation.join(', ')"></ShowValue>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mockedDictionary } from "@services/mock-data";
import CheckForm from "@components/CheckForm.vue";
import ShowValue from "@components/ShowValue.vue";
import RadioForm from "@components/RadioForm.vue";

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
            radioValue: ''
        };
    },
    filters: {
        join(values) {
            return values.join(", ");
        }
    },
    components: {
        CheckForm,
        ShowValue,
        RadioForm
    }
};
</script>

<style>
</style>
