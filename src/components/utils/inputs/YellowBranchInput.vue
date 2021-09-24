<template>
    <div>
        <select @input="selecting" list="branches" class="yellow-input" :style='{"width": width, "height": height}'>
            <option value="" selected disabled hidden>Branche</option>
            <option v-for='(value, name, index) in branches' :key='index' :value='name'>{{ name }}</option>
        </select>
    </div>
</template>

<script>

export default {
    props: ['branches', 'width', 'height', 'selected'],
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
        border: none;
        padding-left: 10px;
        padding-right: 10px;
    }
    option {
        color: #CF8421;
        border: none;
    }
    
</style>
