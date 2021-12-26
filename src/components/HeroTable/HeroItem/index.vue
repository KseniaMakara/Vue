<template>
  <div class="heroes">
    <div>Name : {{ heroes.name }}</div>
    <div>Age : {{ heroes.age }}</div>
    <div>Part : {{ heroes.part }}</div>
  </div>
</template>

<script>
export default {
    name: "HeroItem",
    props: {
        heroes: {
            type: Object,
            default: () => ({})
        },
    },
};
</script>

<style lang="scss" scoped></style>
