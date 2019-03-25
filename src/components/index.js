import pageBuilder from "./page-builder";
import pageEditor from "./page-editor";

import draggable from 'vuedraggable';
import dragableBox from "./dragable-box.vue";
import comps from "./elements/components"
const components ={
    'page-editor':pageEditor,
    draggable,
    "page-builder":pageBuilder,
    "dragable-box":dragableBox
}

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    

    Object.keys(components).forEach(key => {
        Vue.component("gui-"+key, components[key]);
    });
   
    Vue.use(comps);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);

}

export default {
    install,
    ...components
}