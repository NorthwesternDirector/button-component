<template>

    <button class="nd-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <nd-icon class="icon" v-if="iconName && !loading" :iconName="iconName" ></nd-icon>
        <nd-icon class="loading icon" v-if="loading" iconName="loading" ></nd-icon>
        <div class="icon-content">
            <slot></slot>
        </div>
    </button>
  
</template>

<script>
    export default {
        // props:['iconName','iconPosition']
        props:{
            iconName:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(val){
                    return (val==="left" || val==="right")
                }
            },
            loading:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
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
        .loading{
            animation: spin 1.2s infinite linear;
        }
    }
</style>