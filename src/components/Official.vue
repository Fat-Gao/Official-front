<template>
  <!-- 上边菜单栏左侧 -->
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" style="z-index: 1;" :ellipsis="false">
    <!-- 图标 -->
    <el-image :src="require('@/assets/logo.png')"></el-image>
    <!-- 左侧菜单 -->
    <el-menu-item index="2">{{ $t("home.aboutUs") }}</el-menu-item>
    <el-sub-menu index="3" :teleported="false">
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
import { useI18n } from "vue-i18n";
import {useRouter} from 'vue-router'

export default {
  name: 'Official',
  setup() {
    const router = useRouter()
    let { t, locale } = useI18n();
    const language = inject('language')

    function handleSelect(key, keyPath) {
      console.log(key);
      if(key==2)
      {
        router.push({path:"./ESG"})
      }
      else if(key==3)
      {
        router.push({path:"./ESG"})
      }
      else if(key==4)
      {
        router.push({path:"./ESG"})
      }
      else if(key==5)
      {
        router.push({path:"./ESG"})
      }
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
.el-image {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 2%;
  margin-right: 1%;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: 0.4%;
  margin-bottom: 0.6%;
  margin-left: 0.2%;
  margin-right: 0.2%;
  font-size: 15px;
  font-family: '阿里巴巴普惠体';
  font-weight: bold;
  color: black;
  border-style: none;
  background: transparent;
}
</style>
