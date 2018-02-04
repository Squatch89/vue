<template>
  <div>
    <div v-for="item in itemInfo" class="cart">
      <!--image(that is a link to item), manufacturer ,product name, itemID,-->
      <div v-repeat="item in itemInfo" class="cartItem">
        <img :src="item.image" :alt="item.productName"/>
        {{item.manufacturer}}
        {{item.productName}}
        {{item.itemId}}
        {{item.description}}
        {{item.quantity}}
        {{item.price}}
      </div>
    </div>
    <!--<div v-for="item in itemInfo" class="itemInfo">-->
      <!--&lt;!&ndash;description of item&ndash;&gt;-->
      <!--{{item.description}}-->
    <!--</div>-->
    <!--<div v-for="item in intemInfo" class="Quan">-->
      <!--&lt;!&ndash;shows quanity of item&ndash;&gt;-->
      <!--{{item.quantity}}-->
    <!---->
    <!--</div>-->
    <!--<div v-for="item in intemInfo" class="Price">-->
      <!--&lt;!&ndash;shows price of item&ndash;&gt;-->
      <!--{{item.price}}-->
    <!---->
    <!--</div>-->
    <!--<div class="subTotal">-->
      <!--&lt;!&ndash;shows price of all items in cart&ndash;&gt;-->
    <!--</div>-->
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
