import pageBuilder from "./page-builder";

import draggable from 'vuedraggable';
import render from "./elements/render";
const components ={
    draggable,
    render,
    "page-builder":pageBuilder
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