import colorPicker from './color-packer'
const components = [colorPicker]
const install = function (Vue) {
    if(install.installed) return
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}
if(typeof window!== "undefined" && window.Vue){
    install(components)
}
export default {
    install,
    colorPicker
}