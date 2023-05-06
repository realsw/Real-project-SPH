<template>
  <div>我是search
    <h1>parms: {{$route.params.keyword}}</h1>
    <h1>query:{{$route.query.k}}</h1>
  </div>

</template>

<script>
export default {
  name:'search'

}
</script>

<style>

</style>