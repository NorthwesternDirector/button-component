<template>
    <svg v-if="iconName" class="nd-icon">
        <use :xlink:href="`#i-${iconName}`"></use>
    </svg> 
</template>

<script>
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