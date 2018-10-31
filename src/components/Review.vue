<template>
    <div>
        <div class="radio-container">
            <RadioForm id="review-radio-both" :name="name" value="both" text="Show both" v-model="radioValue" />
            <RadioForm id="review-radio-words" :name="name" value="words" text="Hide words" v-model="radioValue" />
            <RadioForm id="review-radio-translations" :name="name" value="translations" text="Hide translations" v-model="radioValue" />
        </div>
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
            radioValue: 'both'
        };
    },
    filters: {
        join(values) {
            return values.join(", ");
        }
    },
    watch: {
        radioValue(newValue, oldValue) {
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
        RadioForm
    }
};
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
