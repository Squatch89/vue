<template>
  <div class="cart">
    
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Item</th>
        <th scope="col">Info</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in itemInfo">
        <th scope="row">{{index + 1}}</th>
        <td><img :src="item.image" :alt="item.productName"/></td>
        <td>
          Product Name: {{item.productName}}
          <br/>
          Manufacturer: {{item.manufacturer}}
          <br/>
          Description: {{item.description}}
        </td>
        <td>
          {{item.quantity}}
          <!--add buttons to increase and decrease quantity-->
          <!--have buttons check their current count against the quantity avaliable for each item-->
          <!--do not allow more quantity to be added than there is avaliable-->
          <!--if button count is === to item.quantity do not add any more-->
          <!--if button count is < item.quantity you can add or subtract more-->
          <!--if button count is === to 0 then do not remove any more but can add more-->
        </td>
        <td>
          {{item.price}}
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Subtotal: {{$store.state.total}}</td>
        <!--update total to show the amount of all items added together taking into account their quantity-->
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import itemInfo from '../../items.json'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  
  export default {
    name: "ShoppingCart",
    data() {
      return {
        itemInfo,
        computed: {
          ...mapGetters([
            'getTotal'
          ])
        },
        methods: {
          increment() {
            store.commit('increment', itemInfo.price)
          },
          decrement() {
            store.commit('decrement', itemInfo.price)
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
