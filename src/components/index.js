import pageBuilder from "./page-builder";
import pageEditor from "./page-editor";
import draggable from "./draggable"
import element from "./element"

import directives from "./directives/index"

const components ={
    'page-editor':pageEditor,
    "page-builder":pageBuilder,
    draggable,
    element
}

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Vue.prototype.$elements={};

    Object.keys(directives).forEach(key=>{
        Vue.directive(key,directives[key]);
    })
    
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