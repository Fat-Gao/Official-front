<template>
  <!-- 背景图片 -->
  <div class="bac-all"></div>
  <!-- 上边菜单栏左侧 -->
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" style="z-index: 1;">
    <!-- 图标 -->
    <el-image :src="require('@/assets/logo.png')"></el-image>
    <!-- 左侧菜单 -->
    <el-menu-item index="2">{{ $t("home.aboutUs") }}</el-menu-item>
    <el-sub-menu index="3" :popper-append-to-body="false">
      <template #title>{{ $t("home.service") }}</template>
      <el-menu-item index="3-1" class="el-menu-list1">{{ $t("home.product.product1") }}</el-menu-item>
      <el-menu-item index="3-2" class="el-menu-list2">{{ $t("home.product.product2") }}</el-menu-item>
      <el-menu-item index="3-3" class="el-menu-list3">{{ $t("home.product.product3") }}</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">{{ $t("home.esg") }}</el-menu-item>
    <el-menu-item index="5">{{ $t("home.addUs") }}</el-menu-item>
    <!-- 上边菜单栏右侧 -->
    <div class="flex-grow" />
    <!-- 员工入口 -->
    <el-menu-item index="6">{{ $t("home.login") }}</el-menu-item>
    <!-- 中英文切换 -->
    <el-button class="enbotton" mb-4 @click.native="switchLanguage">CN | EN</el-button>


  </el-menu>
</template>

<script>
import { inject } from 'vue';
import { useI18n } from "vue-i18n"

export default {
  name: 'Official',
  setup() {

    let { t, locale } = useI18n();
    const language = inject('language')

    function handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
    function switchLanguage() {
      language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
      locale.value = language.value
    }

    return {
      handleSelect,
      switchLanguage,
      language,
      locale,
      t
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bac-all {
  width: 100%;
  height: 100%;
  background-image: url(../assets/background.jpg);
  background-size: cover;
  position: absolute;
  z-index: -1;
  /* background-repeat: no-repeat; */
  opacity: 1;
}

.el-image {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 2%;
  margin-right: 3%;
  height: 35px;
}

.el-sub-menu.el-menu-item {
  opacity: 0.7;
}

.el-menu-demo {
  opacity: 0.6;
  width: 101;
  background-color: white;
  font-family: '阿里巴巴普惠体';
  font-weight: bold;
}

.el-menu-list1 {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: '阿里巴巴普惠体';
  font-weight: bold;
  font-size: 12px;

}

.el-menu-list2 {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: '阿里巴巴普惠体';
  font-weight: bold;
  font-size: 12px;
}

.el-menu-list3 {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: '阿里巴巴普惠体';
  font-weight: bold;
  font-size: 12px;
}

.flex-grow {
  flex-grow: 1;
}

.enbotton {
  opacity: 0.8;
  margin-top: 0.6%;
  margin-bottom: 0.6%;
  margin-left: 0.6%;
  margin-right: 0.6%;
  font-size: 15px;
  font-family: '阿里巴巴普惠体';
  font-weight: bold;
  color: black;
  border-style: none;
  background: transparent
}
</style>
