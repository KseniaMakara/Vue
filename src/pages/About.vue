<template>
  <div class="about">
    <!-- <div>Something to say</div> -->
    <edit-list/>
    <hero-table/>
  </div>
</template>

<script>
import EditList from '@/components/EditList'
import HeroTable from '@/components/HeroTable'
export default {
    components:{
         HeroTable,
         EditList
    },
    
   
};
</script>

<style lang="scss" scoped></style>
