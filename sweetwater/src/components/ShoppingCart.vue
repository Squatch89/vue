<template>
  <div>
    <div v-for="item in itemInfo" class="cart">
      <!--image(that is a link to item), manufacturer ,product name, itemID,-->
      
      <img :src="item.image"/>
      {{item.manufacturer}}
      {{item.productName}}
      {{item.itemId}}
    
    </div>
    <div v-for="item in itemInfo" class="itemInfo">
      <!--description of item-->
      {{item.description}}
    </div>
    <div v-for="item in intemInfo" class="Quan">
      <!--shows quanity of item-->
      {{item.quantity}}
    
    </div>
    <div v-for="item in intemInfo" class="Price">
      <!--shows price of item-->
      {{item.price}}
    
    </div>
    <div class="subTotal">
      <!--shows price of all items in cart-->
    </div>
  </div>
</template>

<script>
  import itemInfo from '../../items.json'
  
  export default {
    name: "ShoppingCart",
    data() {
      return {
        itemInfo
      };
    }
  }
</script>

<style scoped>

</style>
