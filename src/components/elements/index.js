import layoutTwo from "./layout-two";
import text from "./text";
import image from "./image";

import icon_image from "../../assets/image.png";
import icon_text from "../../assets/text.png";
import icon_layout from "../../assets/3-column.png";
const layouts=[
    {
        name:"layout-two",
        text:"双栏布局",
        component:layoutTwo,
        icon:icon_layout
    }
];

const elements=[
    {
        name:"text",
        text:"文本",
        component:text,
        icon:icon_text
    },
    {
        name:"image",
        text:"图片",
        component:image,
        icon:icon_image
    }
];


export default {
    layouts,elements
};