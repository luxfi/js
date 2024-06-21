<template>
    <div class="qr_input">
        <QRReader class="readerIn" @change="change" :disabled="disabled"><button>
            <fa :icon="fa_camera"></fa>
        </button></QRReader>
        <input type="text" class="pk_in" :placeholder="placeholder"
               v-model="pk" @input="oninput" :disabled="disabled">
    </div>
</template>
<script>
    import QRReader from "./qr_reader";
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faCamera } from '@fortawesome/free-solid-svg-icons'

    export default {
        components: {
            QRReader,
            fa: FontAwesomeIcon
        },
        data(){
            return {
                pk: "",
                fa_camera: faCamera
            }
        },
        props: {
            placeholder: String,
            value: String,
            disabled: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            value(val){
                this.pk = val;
            }
        },
        model:{
            prop: 'value',
            event: 'change',
        },
        mounted() {
            this.pk = this.value;
        },
        methods: {
            change(val){
                this.pk = val;
                this.emit();
            },
            oninput(){
                this.pk = this.pk.trim();
                this.emit();
            },
            emit(){
                this.$emit('change', this.pk);
            }
        }
    }
</script>
<style scoped>
    .qr_input{
        display: flex;
        align-items: center;
        color: #333;
        height: 45px;
        background-color: #f8f8f8;
        margin-bottom: 8px;
    }

    .qr_input button{
        font-size: 19px;
        height: 100%;
        padding-right: 12px;
        padding-left: 12px;
        border-style: none;
        border-right: 1px solid #d2d2d2;
        text-align: center;
        pointer-events: none;
        opacity: 0.7;
        /*opacity: 0.7;*/
    }

    .readerIn{
        height: 100%;
    }

    .pk_in{
        background-color: transparent;
        border-style: none;
        color: inherit;
        outline: none;
        text-align: center;
        width: 100%;
        margin: 0;
        padding: 0px 12px;
    }
</style>
