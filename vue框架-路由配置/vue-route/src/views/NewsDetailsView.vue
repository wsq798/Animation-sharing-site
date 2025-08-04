<template>
  <div>
    <h1>News Details View</h1>
    <p>This is the news details view.</p>
    
    <!-- 这里用于显示路由参数中的 "name" 值 -->
    <p>{{ $route.params.name }}</p>
  </div>
</template>