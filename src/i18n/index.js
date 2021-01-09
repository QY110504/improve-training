import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from "element-ui/lib/locale/lang/en"
import en from './en.js'
import zhlocale from 'element-ui/lib/locale/lang/zh-CN'
import zh from './zh.js'
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale:"zh",
    messages:{
        zh:{
            ...zhlocale,
            ...zh
        },
        en:{
            ...enLocale,
            ...en
        }
    },
    silentTranslationWarn:true

})
export default i18n