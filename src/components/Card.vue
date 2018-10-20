<template>
    <div class="scene">
        <div class="rwh-card">
            <div class="rwh-card__face card__face--front">
                FRONT
            </div>
            <div class="rwh-card__face card__face--back">
                BACK</div>
        </div>
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
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;

  &__face {
    height: 100%;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;

    &--front {
      background: red;
    }

    &--back {
      background: blue;
      transform: rotateY(180deg);
    }
  }

  /* &__text {
    margin: auto;
    display: table;
  } */
}

.scene {
  height: 300px;
  width: 200px;
  perspective: 600px;
}
</style>

