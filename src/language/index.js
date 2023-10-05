import { createI18n } from 'vue-i18n'

const messages = {
    'en': {
        home: {
            aboutUs: 'About Us',
            service: 'Products&Service',
            product:{
                product1:'Product 1',
                product2:'Product 2',
                product3:'Product 3'
            },
            esg: 'ESG',
            addUs:"Add Us",
            login:"Login"
        },
    },
    'zh-cn': {
        home: {
            aboutUs: '关于我们',
            service: '产品与服务',
            product:{
                product1:'产品 1',
                product2:'产品 2',
                product3:'产品 3'
            },
            esg: '社会责任',
            addUs:"加入我们",
            login:"登录"

        }
    }
}

const i18n = createI18n({
    legacy: false, // VUE3 组合式API
    locale: 'zh-cn', // 默认cn语言环境
    fallbackLocale: 'en',  //备用语言环境
    messages
})

export default i18n