import layout from "./layout-two";
import image from "./image";
import row from "./row";

const components ={
    image,
    layout,
    row
}

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    

    Object.keys(components).forEach(key => {
        Vue.component("gui-"+key, components[key]);
        console.log(key);
    });

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
}