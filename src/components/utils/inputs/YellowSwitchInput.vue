<template>
    <div>
        <select @input="selecting" :list='name' class="yellow-input" :style='{"width": width, "height": height}'>
            <option value="" selected disabled hidden>{{ name }}</option>
            <option v-for='(el, index) in values' :key='index' :value='el'>{{ el }}</option>
        </select>
    </div>
</template>

<script>

export default {
    props: ['values', 'name', 'width', 'height', 'selected'],
    methods: {
        selecting(e) {
            this.$emit('update:selected', e.target.value)
        }
    }
}
</script>

<style scoped>
    select {
        appearance: none;
        outline: none;
    }
    .yellow-input {
        background-color: #FEEAA5;
        color: #CF8421;
        font-size: 20px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 17px;
        text-align: center;
    }
    option {
        color: #CF8421;
        border: none;
    }
    
</style>
