<template>
    <div class="bac-login">
        <Official />
        <div class="title">
            <div class="fontStyle">{{ $t("login.title") }}</div>
            <el-button class="bigButton" @click.native="switchsso">{{ $t("login.botton") }}</el-button>
        </div>
    </div>
</template>

<script>
import Official from './Official.vue'
import { useI18n } from "vue-i18n"

export default {
    name: 'Login',
    components: {
        Official,
    },
    setup() {
        let { t, locale } = useI18n();



        function switchsso() {
            window.location.href = "http://10.61.78.23:30008"
        }

        return {
            switchsso,
            t,
            locale
        }
    }
}
</script>
  
<style>
.bac-login {
    width: 100%;
    height: 100%;
    background-image: url(../assets/background.jpg);
    background-size: cover;
    position: absolute;
    z-index: -1;
    /* background-repeat: no-repeat; */
    opacity: 1;
}

.title {
    font-size: 80px;
    font-family: '华文楷体';
    font-weight: bolder;
    color: black;
    background: transparent;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.fontStyle {
    opacity: 0.75;
    text-shadow: 1px 0px #b5b6b5, 1px 2px#b5b6b5, 3px 1px #b5b6b5,
        2px 3px #b5b6b5, 4px 2px #b5b6b5, 4px 4px #b5b6b5,
        5px 3px #b5b6b5, 5px 3px #b5b6b5, 5px 3px #b5b6b5,
        5px 3px #b5b6b5, 5px 3px #b5b6b5, 5px 3px #b5b6b5,
        5px 3px #b5b6b5, 5px 3px #b5b6b5, 5px 3px #b5b6b5
}

.bigButton {
    margin-top: 2%;
    border-radius: 10px;
    font-weight: bolder;
    font-family: '华文楷体';
    font-size: x-large;
    background-color: #e0e4e0;
    color: black;
    opacity: 0.7;
    width: 20%;
    height: 7%;
    /* color: hsla(0, 0%, 100%, 0.95); */
    /* background-image: linear-gradient(292deg, #89f7c0, #5af1c4 50%, #3becf8); */

}
</style>