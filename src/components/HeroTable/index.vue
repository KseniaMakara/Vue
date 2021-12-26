<template>
  <div>
    <hero-item v-for="heroes in getTaskList" :key="heroes.id" :heroes="heroes" />
  </div>
</template>

<script>
import HeroItem from "./HeroItem";
import { mapGetters } from 'vuex'


export default {
  name: "HeroTable",
  components: {
    HeroItem,
  },
  computed: {
    ...mapGetters("heroes", ["getTaskList"]),
  },
};
</script>

<style lang="scss" scoped></style>
