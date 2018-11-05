<template>
    <ul class="cat-container">
        <li class="cat-container__cat" 
        :class="{'cat-container__cat--selected': category === value}" 
        v-for="(category, index) in categories" 
        :key="`${index}-${category}`" 
        @click="$emit('input', category)">
            {{category}}
        </li>
    </ul>
</template>

<script>

export default {
    name: 'Categories',
    props: ['categories', 'value']
}
</script>

<style lang="scss">
.cat-container {
  list-style: none;
  padding: 0;
  margin-top: 16px;
  display: flex;
  font-size: 15px;

  &__cat {
    border: 1px solid black;
    color: black;
    background: white;
    padding: 3px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
      background: #e2e2e2;
    }

    &--selected {
      color: white;
      border: 1px solid #d2d4d6;
      background: grey !important;
    }
  }
}
</style>
