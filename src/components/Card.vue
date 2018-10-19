<template>
    <div>
        <div class="rwh-card">
            <div class="rwh-card__text">
                FRONT
            </div>
        </div>
        <div>BACK</div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    props: ['word', 'translation'],
    methods: {
        turn() {
            // Turn the card
        }
    }
}
</script>

<style lang="scss">
.rwh-card {
  height: 300px;
  width: 200px;
  border: 1px solid black;
  border-radius: 10px;
  margin:auto;
  &--front {
  }
  &--back {
  }
  &__text {
    margin:auto;
    display:table;
  }
}
</style>

