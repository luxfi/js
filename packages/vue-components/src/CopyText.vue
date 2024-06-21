<template>
    <div class="copyBut">
        <button @click="copy"><slot></slot></button>
        <input ref="copytext" :value="value">
    </div>
</template>
<script>
    export default {
        props: {
            value: String,
        },
        methods: {
            copy(){
                let copytext = this.$refs.copytext;
                copytext.select();
                copytext.setSelectionRange(0, 99999);
                document.execCommand("copy");
                this.$emit('copy', this.value);
            }
        }
    }
</script>
<style scoped>
    .copyBut{
        display: inline-block;
    }
    .copyBut button{
        width: 100%;
        height: 100%;
    }
    .copyBut input{
        width: 1px;
        position: absolute;
        opacity: 0;
    }
</style>