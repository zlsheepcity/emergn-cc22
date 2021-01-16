<template>
<v-container>
    <div>SAP</div>
</v-container>
</template>

<script>
// ---------------------------- define export

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let watch       = {}
    let data        = {}

// ---------------------------- main logic

    // use router
    computed = { ...computed, Router ()   { return this.$router } }

    // use store
    computed = { ...computed, Store ()    { return this.$store } }

// ---------------------------- ui actions

// ---------------------------- export ready

export default {
    name: 'doc',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
