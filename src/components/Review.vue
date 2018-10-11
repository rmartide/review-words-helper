<template>
    <div class="row">
        <div class="col-auto">
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="wordsCheck"
                    v-model="showWords"
                >
                <label class="form-check-label" for="wordsCheck">Hide words</label>
            </div>
            <hr>
            <div v-show="showWords">
                <div v-for="(word, index) of words" :key="`${index}-${word}`">{{word}}</div>
            </div>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="translationsCheck"
                    v-model="showTranslations"
                >
                <label class="form-check-label" for="translationsCheck">Hide translations</label>
            </div>
            <hr>
            <div v-show="showTranslations">
                <div
                    v-for="(translation, index) of translations"
                    :key="`${index}-${translation[0]}`"
                >{{translation | join}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mockedDictionary } from "@services/mock-data";

export default {
  name: "Review",
  data() {
    return {
      words: mockedDictionary.words,
      translations: mockedDictionary.translations,
      showWords: true,
      showTranslations: true
    };
  },
  filters: {
    join(values) {
      return values.join(", ");
    }
  }
};
</script>

<style>
</style>
