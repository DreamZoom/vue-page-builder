export default function(elements) {

    function reg(name,icon,tag,temp,attrs){
        elements.push({
            name,icon,tag,
            template:{
                beforeMount(){
                    if(attrs && this.value.propertys){
                        this.value.propertys={...attrs,...this.value.propertys};
                    }
                },
                template:temp
            }
        });
    }

    reg("导航栏","","nav-bar",'<van-nav-bar :title="propertys.title" :left-text="propertys.left" :right-text="propertys.right" :left-arrow="propertys.left_arraw"/>',{title:"标题",left:"返回",right:"记录",left_arraw:true});
    reg("单元格","","cell",'<van-cell :value="propertys.text" />',{text:"请输入内容2"});
    reg("测试","","kkk",'<p :style="{padding:propertys.padding+px}">{{propertys.text}}</p>',{text:"标题",padding:5});
}
