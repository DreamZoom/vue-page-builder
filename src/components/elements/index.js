import layoutTwo from "./layout-two";
import p from "./p";
import image from "./image";
const layouts=[
    {
        name:"layout-two",
        text:"双栏布局",
        component:layoutTwo
    }
];

const elements=[
    {
        name:"p",
        text:"段落",
        component:p
    },
    {
        name:"image",
        text:"图片",
        component:image
    }
];


export default {
    layouts,elements
};