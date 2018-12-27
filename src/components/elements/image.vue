<template>
    <div>
        <img :src="url" alt="" style="width:100%">
        <el-upload class="image-uploader" action="http://image.service.sqhm.cn/upload" :show-file-list="false" :on-success="handleUploadSuccess">
            <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
</template>

<script>
    import element from "../element";
    export default {
        extends: element,
        data() {
            return {
                url: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545814099&di=0430d3eb282c162e0512830f6a71131e&src=http://b.hiphotos.baidu.com/zhidao/pic/item/14ce36d3d539b600d3924a1feb50352ac65cb73e.jpg"
            }
        },
        methods: {
            handleUploadSuccess(response) {
                console.log(response.data);
                this.url=response.data.fileUrl;
            }
        }
    }
</script>
<style>
.image-uploader{

}
</style>
