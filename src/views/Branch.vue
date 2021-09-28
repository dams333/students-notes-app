<template>
  <div>
  </div>
</template>

<script>

export default {
    props: ['id'],
    data() {
        return {
            average: "4,5",
            categories: [
                {
                    name: "Notes complètes",
                    notes: [
                        {
                            date: "01/05/21",
                            note: "4,5",
                            name: "Dissertation",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: true
                        },
                        {
                            date: "01/05/21",
                            note: "4,5",
                            name: "Dissertation",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "4,5",
                            name: "Dissertation",
                            disabled: true
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        }
                    ]
                },
                {
                    name: "Tests de vocabulaire",
                    notes: [
                        {
                            date: "01/05/21",
                            note: "4,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "4,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        }
                    ]
                },
                {
                    name: "Tests de vocabulaire",
                    notes: [
                        {
                            date: "01/05/21",
                            note: "4,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "4,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        }
                    ]
                },
                {
                    name: "Tests de vocabulaire",
                    notes: [
                        {
                            date: "01/05/21",
                            note: "4,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "4,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        },
                        {
                            date: "01/05/21",
                            note: "3,5",
                            name: "",
                            disabled: false
                        }
                    ]
                }
            ]
        }
    },
    created() {
        this.$store.commit('setHeaderName', this.id);
    }
}

</script>

<style>
</style>
