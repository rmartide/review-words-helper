<template>
    <div>
        <div class="d-flex justify-content-center">
            <button @click="swapperoni()">Swapperoni Mixeroni</button>
            {{radioValue}}
        </div>
        <div class="d-flex justify-content-center">
            <Categories :categories="categories" v-model="selectedCategory" @input.capture="missed=[]"></Categories>
        </div>
        <div class="d-flex justify-content-center">
            <RadioContainer name="main-radio" v-model="radioValue" />
        </div>
        <div class="row no-gutters justify-content-center" v-for="(dc, index) in data[selectedCategory]" :key="`w-${index}-${dc.word}`" @click="addToMissed(dc)">
            <div class="col-3 separator">
                <Display :value="dc.word" :show="showWords"></Display>
            </div>
            <div class="col-3 separator">
                <Display :value="dc.translations.join(', ')" :show="showTranslations"></Display>
            </div>
        </div>
        <div v-if="missed.length !== 0">
            <div class="row no-gutters">
                <h5 class="offset-3">Failed when reviewing</h5>
            </div>
            <div class="d-flex justify-content-center">
                <RadioContainer name="missed-radio" v-model="radioValue" />
            </div>
            <div class="row no-gutters justify-content-center" v-for="(dc, index) in missed" :key="`w-${index}-${dc.word}`">
                <div class="col-3 separator">
                    <Display :value="dc.word" :show="showWords"></Display>
                </div>
                <div class="col-3 separator">
                    <Display :value="dc.translations.join(', ')" :show="showTranslations"></Display>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { data } from "@services/mock-data";
import CheckForm from "@components/CheckForm.vue";
import RadioContainer from "@components/RadioContainer.vue";
import Categories from "@components/Categories.vue";
import Display from "@components/Display.vue";
import Utils from '@services/utils';

const categories = Object.keys(data);

export default {
    name: "Review",
    data() {
        return {
            showWords: true,
            showTranslations: true,
            radioValue: 'both',
            categories: categories,
            selectedCategory: categories[0],
            data: data,
            missed: []
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
        },
        addToMissed(dc) {
            if (this.missed.indexOf(dc) === -1)
                this.missed.push(dc);
        }
    }
};
</script>

<style>
.separator {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
