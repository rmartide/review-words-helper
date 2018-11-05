<template>
    <ul class="cat-container">
        <li class="cat-container__cat" :class="{'cat-container__cat--selected': category === selectedCategory}" v-for="(category, index) in categories" :key="`${index}-${category}`" @click="selectedCategory = category">
            {{category}}
        </li>
    </ul>
</template>

<script>

const categories = ['Adjectives', 'Verbs', 'Clothes', 'Pronouns', 'Familie', 'Conjunctions', 'Domestic']

export default {
    name: 'Categories',
    data() {
        return {
            categories: categories,
            selectedCategory: null
        }
    }
}
</script>

<style lang="scss">
.cat-container {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 15px;

  &__cat {
    border: 1px solid #d2d4d6;
    padding: 3px;
    color: white;
    background: grey;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
      background: #333333;
    }

    &:active {
      background: blue;
    }

    &--selected {
      color: black;
      background: white !important;
      border-color: black;
    }
  }
}
</style>
