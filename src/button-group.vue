<template>
    <div class="nd-button-group">
        <slot></slot>
    </div>   
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .nd-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .nd-button{
            border-radius:0;  
            margin-left: -1px;//解决边框重叠加厚问题
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