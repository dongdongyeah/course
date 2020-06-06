<template>
  <div>
    <index-header></index-header>
    <body class='container'>
      <introduce class='item-1' />
      <vvideo class='item-2' />
      <team class='item-3' />
      <courseware class='item-4' />
      <reference class='item-5' />
      <news class='item-6' />
    </body>
    <index-footer></index-footer>
  </div>
</template>

<script>
import indexHeader from './headerFooter/indexHeader'
import indexFooter from './headerFooter/indexFooter'
import introduce from './bodyComponents/introduce'
import team from './bodyComponents/team'
import courseware from './bodyComponents/courseware'
import vvideo from './bodyComponents/vvideo'
import reference from './bodyComponents/reference'
import news from './bodyComponents/news'
export default {
  components: {
    indexHeader,
    indexFooter,
    introduce,
    team,
    courseware,
    vvideo,
    reference,
    news
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(9, 11%);
    grid-template-rows: repeat(2, 350px);
    width: 85%;
    margin: auto;
    padding-top: 10px;
  }
  .item-1 {
    grid-column-start: 1;
    grid-column-end: 5;
  }
  .item-2 {
    grid-column-start: 5;
    grid-column-end: 8;
  }
  .item-3 {
    grid-column-start: 8;
    grid-column-end: 10;
  }
  .item-4 {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .item-5 {
    grid-column-start: 4;
    grid-column-end: 7;
  }
  .item-6 {
    grid-column-start: 7;
    grid-column-end: 10;
  }
</style>
