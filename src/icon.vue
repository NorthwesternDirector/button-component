<template>
    <svg v-if="iconName" class="nd-icon">
        <use :xlink:href="`#i-${iconName}`"></use>
    </svg> 
</template>

<script>
import './svg' //导入svg样式，解决用户自己需要添加script标签的问题
export default {
    props:['iconName']
}
</script>

<style lang="scss">
     
    .nd-icon {
        width: 1em;
        height: 1em;
        vertical-align: middle;
    }
   
</style>