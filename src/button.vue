<template>

    <button class="nd-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="iconName" class="icon">
            <use :xlink:href="`#i-${iconName}`"></use>
        </svg> 
        <div class="icon-content">
            <slot></slot>
        </div>
    </button>
  
</template>

<script>
    export default {
        props:['iconName','iconPosition']
    }
</script>

<style lang="scss" scoped>
    .nd-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 .8em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display:inline-flex;
        justify-content: center;
        align-items:center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon{
            order:1;
            margin-right: .3em;
        }
        > .icon-content{
            order:2;
        }
        &.icon-right{
            > .icon-content{
                order:1;
            }
            > .icon{
                order:2;
                margin-right: 0;
                margin-left: .3em;
            }
        }
    }
</style>