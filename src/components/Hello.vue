<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'

@Component({
    props: {
        name: String,
        initialEnthusiasm: Number
    }
})
export default class HelloComponent extends Vue {
    initialEnthusiasm: number
    enthusiasm: number = this.initialEnthusiasm

    increment(): void { 
        this.enthusiasm++; 
    }

    decrement(): void {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}
</script>

<style lang="scss">
$me-size: 20px;
.greeting {
    font-size: $me-size;
}
</style>