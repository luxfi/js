<template>
    <input type="number" inputmode="decimal" :placeholder="placeholder" v-model="val" :min="min" :max="maxNumString" :step="stepNum" @change="onChange">
</template>
<script>
    import {Utils, BN, Big} from '@luxfi/wallet-sdk'

    export default {
        data(){
            return {
                // Val is a string
                val: null,
            }
        },
        computed: {
            maxNumString(){
              return this.bnToString(this.maxNumBN)
            },
            maxNumBN(){
                return this.max
            },
            stepNum(){
                if(!this.step) {
                    if(this.denomination >= 2){
                        return 0.01
                    }else{
                        return Math.pow(10, -this.denomination)
                    }
                }
                try{
                    return this.bnToString(this.step)
                }catch (e){
                    console.error(e)
                    return '0.01'
                }

            }
        },
        props: {
            denomination:{
                type: Number,
                default: 0
            },
            max: {
                default: null,
                type: [BN, Object],
            },
            min: {
                type: Number,
                default: 0,
            },
            step: {
                type: [BN, Object],
                default: null,
            },
            placeholder: String,
            value: BN
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        watch: {
            val(val){
                if(!val){
                    this.$emit('change', new BN(0));
                    return
                }

                try{
                    let splitVal = val.toString().split('.')
                    let wholeVal = splitVal[0]
                    let denomVal = splitVal[1]
                    if(denomVal){
                        if(denomVal.length > this.denomination){
                            let newDenom = denomVal.substring(0,this.denomination)
                            this.val = `${wholeVal}.${newDenom}`
                            return
                        }
                    }
                }catch (e){
                    console.log(e)
                }

                if(parseFloat(val) < this.min){
                    this.val = this.min.toString()
                    return
                }

                let valBn = this.stringToBN(val)
                this.$emit('change', valBn);
            },
            value(valBn){
                this.val = this.bnToString(valBn)
            }
        },
        methods: {
            bnToString(val){
                return Utils.bnToBig(val, this.denomination).toString()
            },
            stringToBN(strVal){
                return Utils.stringToBN(strVal,this.denomination)
            },
            maxout(){
                if(this.maxNumBN != null){
                    this.val = this.bnToString(this.maxNumBN)
                }
            },
            clear(){
                this.val = undefined
            },
            onChange(){
                // If number is above max amount, correct it
                const valBig = Big(this.val || '0')
                const valBN = Utils.bigToBN(valBig,this.denomination)
                if(this.maxNumBN != null){
                    if(valBN.gt(this.maxNumBN)){
                        this.val = this.bnToString(this.maxNumBN)
                    }
                }
            }
        }
    }
</script>
<style scoped>
    input{
        text-align: right;
        outline: none;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>
