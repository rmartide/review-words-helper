<template>
    <div class="row">
        <div class="col-auto">
            <CheckForm id="wordsCheck" text="Hide words" v-model="showWords"/>
            <hr>
            <div v-show="!showWords">
                <div v-for="(word, index) of words" :key="`${index}-${word}`">
                    {{word}}
                    <hr>
                </div>
            </div>
            <div v-show="showWords">
                <div v-for="(word, index) of words" :key="`${index}-${word}`">
                    <button >Show</button>
                    <hr>
                </div>
            </div>
        </div>
        <div class="col-auto">
            <CheckForm id="translationsCheck" text="Hide translations" v-model="showTranslations"/>
            <hr>
            <div v-show="!showTranslations">
                <div
                    v-for="(translation, index) of translations"
                    :key="`${index}-${translation[0]}`"
                >
                    {{translation | join}}
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mockedDictionary } from "@services/mock-data";
import CheckForm from "@components/CheckForm.vue";

export default {
  name: "Review",
  data() {
    return {
      words: mockedDictionary.words,
      translations: mockedDictionary.translations,
      showWords: false,
      showTranslations: false
    };
  },
  filters: {
    join(values) {
      return values.join(", ");
    }
  },
  components: {
    CheckForm
  }
};
</script>

<style>
</style>
