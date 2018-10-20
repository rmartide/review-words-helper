<template>
    <div class="scene" @mouseover="flip=true" @mouseout="flip=false">
        <div class="rwh-card" :class="{ 'is-flipped': flip}">
            <div class="rwh-card__face rwh-card__face--front">
                FRONT
            </div>
            <div class="rwh-card__face rwh-card__face--back">
                BACK
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    props: ['word', 'translation'],
    data() {
        return {
            flip: false
        }
    },
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
  transition: transform 0.5s;
  transform-style: preserve-3d;

  &__face {
    height: 100%;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;
    text-align: center;

    &--front {
    }

    &--back {
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
  margin: auto;
  perspective: 600px;
}
.is-flipped {
  transform: rotateY(180deg);
}
</style>

