<template>
  <div class="bg">
    <div class="contentAxios">
      <button  class="btn" @click="loadInformation">Click</button>
      <div>
      {{ getInformation }}

      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions('axObj',["loadInformation"]),
  },
  computed: {
    ...mapGetters('axObj', ["getInformation"]),
  },
};
</script>

<style lang="scss" scoped>

</style>
