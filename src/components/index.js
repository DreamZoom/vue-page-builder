import pageBuilder from "./page-builder";

import draggable from 'vuedraggable';
import dragableBox from "./dragable-box.vue";
const components ={
    draggable,
    "page-builder":pageBuilder,
    "dragable-box":dragableBox
}

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    

    Object.keys(components).forEach(key => {
        Vue.component("gui-"+key, components[key]);
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