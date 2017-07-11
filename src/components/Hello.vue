<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue, {ComponentOptions} from "vue";

// Declare the component's type
interface HelloComponent extends Vue {
  initialEnthusiasm: number
  enthusiasm: number
  name: string
  increment(): void
  decrement(): void
}


export default Vue.extend({    
    props: ['name', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        }
    },
    methods: {
        increment() { this.enthusiasm++; },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        }
    }
} as ComponentOptions<HelloComponent>);
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>