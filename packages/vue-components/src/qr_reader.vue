<template>
    <div class="qr_reader">
        <div class="buts" :disabled="disabled">
            <div class="clickStart" @click="start"></div>
            <slot class="qr_slot"></slot>
        </div>
        <div class="qr_popup" v-show="isActive">
            <div class="progress">
                <font-awesome-icon class="loading" :icon="fa_spinner"></font-awesome-icon>
                <p>Waiting for a QR Code</p>
            </div>
            <button @click="stop"><font-awesome-icon :icon="fa_times"></font-awesome-icon></button>
            <video ref="preview"></video>
        </div>
    </div>
</template>
<script>
    // import { BrowserQRCodeReader } from '@zxing/library';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faSpinner,faTimes } from '@fortawesome/free-solid-svg-icons'

    import {BrowserQRCodeReader} from '@zxing/library';

    export default {
        components:{
            FontAwesomeIcon
        },
        data(){
            return {
                scanner: null,
                isActive: false,
                fa_spinner: faSpinner,
                fa_times: faTimes,
            }
        },
        props:{
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            start(){
                if(this.disabled) return;
                let camera = this.camera;
                if(!camera){
                    alert("No Cameras Found");
                    return;
                }

                this.isActive = true;
                this.scanner
                    .decodeFromInputVideoDevice(this.camera.deviceId, this.$refs.preview)
                    .then(this.onscan)
            },
            onscan(result){
                this.$emit("change", result.text);
                this.stop();
            },
            stop(){
                if(this.scanner){
                    this.scanner.reset();
                }
                this.isActive = false;
            }
        },
        mounted(){
            let parent = this;

            const codeReader = new BrowserQRCodeReader();
            codeReader
                .listVideoInputDevices()
                .then(videoInputDevices => {
                    if(videoInputDevices.length > 0){
                        let camera = videoInputDevices[0];
                        parent.camera = camera;
                    }else{
                        // console.error('No Cameras Found');
                    }
                })
                .catch();

            this.scanner = codeReader;
        }
    }
</script>
<style scoped>
    .qr_reader{
        position: relative;
        font-family: "Courier";
    }
    .qr_popup{
        position: fixed;
        max-width: 80%;
        overflow: hidden;
        left: calc(50% - 200px);
        top: 40%;
        width: 400px;
        /*transform: translateX(-50%);*/
        /*transform: translate(-50%, -50%);*/
        z-index: 10;
        background-color: #202020;
        border: 4px solid;
    }

    .qr_popup video{
        width: 100%;
        /*width: 400px;*/
        /*height: 100%;*/
        z-index: 2;
        /*max-width: 100%;*/
    }

    .qr_popup button{
        border: none;
        position: absolute;
        top: 6px;
        right: 12px;
        z-index: 2;
        background-color: #222;
        color: #fff;
        border-radius: 25px;
        width: 25px;
        /*line-height: 25px;*/
        font-size: 14px;
        height: 25px;
        opacity: 0.7;
    }

    .qr_popup button:hover{
        opacity: 1;
    }

    .buts{
        height: 100%;
        opacity: 0.8;
    }
    .buts:hover{
        opacity: 1;
    }
    .buts[disabled]{
        opacity: 0.8;
        cursor: default;
    }

    .clickStart{
        cursor: pointer;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .loading{
        /*fill: #fc0;*/
        color: #ffcc66;
        width: 25px;
        /*filter: invert(98%) sepia(96%) saturate(5177%) hue-rotate(309deg) brightness(101%) contrast(112%);*/
        animation: spin 2s linear infinite;
    }

    .qr_slot{
        opacity: 0.1;
        cursor: pointer;
        pointer-events: none;
        /*user-select: none;*/
        /*pointer-events: none;*/
    }

    .clickStart:hover .qr_slot{
        opacity: 1;
    }

    .progress{
        text-align: center;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #202020d0;
        padding: 3px 7px;
    }
    .progress p{
        font-size: 12px;
        margin: 0;
        color: #fff;

        border-radius: 3px;
    }
    .v-progress-circular{

    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }


    @media only screen and (max-width: 600px) {
        .qr_popup{
            top: 0;
            left: 0;
            width: 100vw;
            max-width: none;
            height: 100%;
            /*min-height: 100vh;*/
            /*min-height: max-content9;*/
        }

        .qr_popup video{
            width: auto;
            /*height: 100%;*/
            /*width: 100%;*/
            height: 100%;
            margin: 0 auto;
        }
    }
</style>
