<template>
    <div>
        <qr_reader>READER</qr_reader>

        <hr>

        <qr_input placeholder="Address"></qr_input>

        <hr>

        <bignum_input :value="bigVal"
                      :denomination="9"
                      :max="bnMax"
                      @change="bigInChange"
                      placeholder="Amount"
                      ref="big_in"
        ></bignum_input>
        <p v-if="big_in_out">Out: {{big_in_out.toString()}}</p>
        <button @click="clearBigIn">Clear</button>
        <button @click="maxOutBig">MAX</button>
        <div style="display: flex">
            <p>Denomination 2</p>
            <p>MAX: {{bnMax.toString()}}</p>
            <p>Step: {{stepSize}}</p>
        </div>

        <hr>

        <copy-text value="Copy this value">
            COPY ME
        </copy-text>
    </div>
</template>
<script>
    import qr_input from "./qr_input";
    import qr_reader from "./qr_reader";
    import bignum_input from "./bignum_input";
    import CopyText from "./CopyText";

    import {BN} from '@luxfi/wallet-sdk'

    export default {
        data(){
            return {
                bigVal: new BN(0),
                big_in_out: null,
            }
        },
        components: {
            qr_input,
            qr_reader,
            bignum_input,
            CopyText
        },
        computed: {
            bnMax(){
                return new BN('19999998982656939');
            },
            stepSize(){
                return new BN(1000000);
            }
        },
        methods: {
            bigInChange(val){
                this.big_in_out = val;
            },
            clearBigIn(){
                this.$refs.big_in.clear();
            },
            maxOutBig(){
                this.$refs.big_in.maxout();
            }
        },
        created(){
        }
    }
</script>

<style scoped>
    p{
        margin: 4px 14px;
        font-size: 13px;
    }
</style>
