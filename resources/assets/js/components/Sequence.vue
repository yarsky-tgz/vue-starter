<template>
    <div>
        <transition name="fade" mode="in-out">
            <v-icon :style="{animationDuration: delay + 'ms'}" class="sequence--placeholder" large v-show="show">{{ seq[!show ? old : index] }}</v-icon>
        </transition>
    </div>
</template>

<script>
    export default {
        props: [ 'seq', 'delay' ],
        data() {
            return {
                old: 1,
                index: 0,
                show: false
            }
        },
        methods: {
            nextItem: function () {
                this.show = !this.show;
                this.old = this.index;
                this.index++;
                this.index = (this.index === this.seq.length) ? 0 : this.index;
                console.log(this.index,this.move,this.old);
                setTimeout(this.nextItem.bind(this), this.delay);
            }
        },
        mounted: function () {
            this.nextItem();
        }
    };
</script>