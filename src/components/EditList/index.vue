<template>
  <div>
    <div>
      <label>
        Name:
        <input type="text" v-model="name" />
      </label>
    </div>
    <div>
      <label>
        Age:
        <input type="text" v-model="age" />
      </label>
    </div>
    <div>
      <label>
        Part:
        <input type="text" v-model="part" />
      </label>
    </div>
    <button @click="AddHero">Add hero</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "EditList",
  data() {
    return {
      name: null,
      age: null,
      part: null,
    };
  },
  methods: {

    ...mapActions('heroes', ['addTask']),
    onAdd() {
     
      this.addTask({
        name: this.name,
        age: this.age,
        part: this.part,
      })
    },
  },
};
</script>

<style lang="sass" scoped></style>
