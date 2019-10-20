<template>
    <div class="nd-button-group">
        <slot></slot>
    </div>   
</template>

<script>
export default {
    mounted(){//异常子元素检测，可能导致样式错误
        for(let node of this.$el.children){
            if(node.nodeName.toLowerCase()!=='button'){
                console.warn(`nd-button-group 的子元素应该为 g-button ，但你使用了 ${node.nodeName.toLowerCase()}`);  
            }
        }
    }
}
</script>

<style lang="scss">
    .nd-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .nd-button{
            border-radius:0; 
            &:not(:first-child) {
                margin-left: -1px;//解决边框重叠加厚问题
            };     
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            };
             &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            };
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
        
      
    }
</style>