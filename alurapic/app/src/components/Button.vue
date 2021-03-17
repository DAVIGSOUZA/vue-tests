<template>
  <button class="button" :class="selectStyle" :type="type" @click="btnClick()">{{name}}</button>
</template>

<script>
export default {
    props: {
        type: String,
        name: String,
        confirmation: Boolean,
        btnStyle: String
    },
    methods: {
        btnClick() {
            if (this.confirmation) {
                if (confirm('Confirma operação?')) {
                    this.$emit('btnFunction')
                }
                return
            }
            this.$emit('btnFunction')
        }
    },
    computed: {
        selectStyle() {
            let selectedStyle
            if (this.btnStyle == "primary" || !this.btnStyle) {
                selectedStyle = "primary"
            }
            if (this.btnStyle == "danger") {
                selectedStyle = "danger"
            }
            return selectedStyle
        }
    }
}
</script>

<style scoped lang="scss">
    .button {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 4px;
        margin: 8px;
        font-size: 1em;
        cursor: pointer;
    }
    .danger {
        border: 2px solid firebrick;
        background-color: crimson;
        color: whitesmoke;
    }
    .primary {
        background-color: rgb(31, 34, 235);
        color: whitesmoke;
    }
</style>