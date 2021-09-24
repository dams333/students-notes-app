<template>
    <div>
        <select @input="selecting" list="branches" class="yellow-input" :style='{"width": width, "height": height}'>
            <option value=1>1</option>
            <option value=1.5>1.5</option>
            <option value=2>2</option>
            <option value=2.5>2.5</option>
            <option value=3>3</option>
            <option value=3.5>3.5</option>
            <option value=4 selected>4</option>
            <option value=4.5>4.5</option>
            <option value=5>5</option>
            <option value=5.5>5.5</option>
            <option value=6>6</option>
        </select>
    </div>
</template>

<script>

export default {
    props: ['width', 'height', 'selected'],
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
        text-align: center;
    }
    option {
        color: #CF8421;
        border: none;
    }
    
</style>
