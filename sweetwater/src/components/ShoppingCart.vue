<template>
  <div>
    <div class="cart">
      <!--image(that is a link to item), manufacturer ,product name, itemID,-->
      <!--<div v-repeat="item in itemInfo" class="cartItem">-->
      <!--<img :src="item.image" :alt="item.productName"/>-->
      <!--{{item.manufacturer}}-->
      <!--{{item.productName}}-->
      <!--{{item.itemId}}-->
      <!--{{item.description}}-->
      <!--{{item.quantity}}-->
      <!--{{item.price}}-->
      </div>
      
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
            Manufacturer: {{item.manufacturer}}
            Description: {{item.description}}
          </td>
          <td>
            {{item.quantity}}
          </td>
          <td>
            {{item.price}}
          </td>
        </tr>
        </tbody>
      </table>
    
    
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
