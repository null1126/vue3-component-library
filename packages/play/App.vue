<script setup lang="ts">
import { defineComponent, ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')

defineComponent({
  name: 'App'
})
</script>

<template>
  <div class="container">
    <h1>Button 按钮</h1>
    <div class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-block">
        <x-button>默认按钮</x-button>
        <x-button type="primary">主要按钮</x-button>
        <x-button type="success">成功按钮</x-button>
        <x-button type="warning">警告按钮</x-button>
        <x-button type="danger">危险按钮</x-button>
        <x-button type="info">信息按钮</x-button>
      </div>
    </div>

    <div class="demo-section">
      <h2>朴素按钮</h2>
      <div class="demo-block">
        <x-button plain>朴素按钮</x-button>
        <x-button type="primary" plain>主要按钮</x-button>
        <x-button type="success" plain>成功按钮</x-button>
        <x-button type="warning" plain>警告按钮</x-button>
        <x-button type="danger" plain>危险按钮</x-button>
        <x-button type="info" plain>信息按钮</x-button>
      </div>
    </div>

    <div class="demo-section">
      <h2>圆角按钮</h2>
      <div class="demo-block">
        <x-button round>圆角按钮</x-button>
        <x-button type="primary" round>主要按钮</x-button>
        <x-button type="success" round>成功按钮</x-button>
        <x-button type="warning" round>警告按钮</x-button>
        <x-button type="danger" round>危险按钮</x-button>
        <x-button type="info" round>信息按钮</x-button>
      </div>
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-block">
        <x-button disabled>禁用按钮</x-button>
        <x-button type="primary" disabled>主要按钮</x-button>
        <x-button type="success" disabled>成功按钮</x-button>
        <x-button type="warning" disabled>警告按钮</x-button>
        <x-button type="danger" disabled>危险按钮</x-button>
        <x-button type="info" disabled>信息按钮</x-button>
      </div>
    </div>

    <div class="demo-section">
      <h2>加载状态</h2>
      <div class="demo-block">
        <x-button loading>加载中</x-button>
        <x-button type="primary" loading>加载中</x-button>
        <x-button type="success" loading>加载中</x-button>
        <x-button type="warning" loading>加载中</x-button>
        <x-button type="danger" loading>加载中</x-button>
        <x-button type="info" loading>加载中</x-button>
      </div>
    </div>

    <div class="demo-section">
      <h2>不同尺寸</h2>
      <div class="demo-block">
        <x-button size="small">小型按钮</x-button>
        <x-button>默认按钮</x-button>
        <x-button size="large">大型按钮</x-button>
      </div>
    </div>

    <h1>Radio 单选框</h1>
    <div class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-block">
        <x-radio v-model="radio1" label="1">选项1</x-radio>
        <x-radio v-model="radio1" label="2">选项2</x-radio>
      </div>
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-block">
        <x-radio v-model="radio2" label="1" disabled>禁用1</x-radio>
        <x-radio v-model="radio2" label="2" disabled>禁用2</x-radio>
      </div>
    </div>

    <div class="demo-section">
      <h2>带边框</h2>
      <div class="demo-block">
        <x-radio v-model="radio3" label="1" border>边框1</x-radio>
        <x-radio v-model="radio3" label="2" border>边框2</x-radio>
      </div>
    </div>

    <div class="demo-section">
      <h2>不同尺寸</h2>
      <div class="demo-block">
        <x-radio v-model="radio4" label="1" border size="large">
          大型单选框
        </x-radio>
        <x-radio v-model="radio4" label="2" border>默认单选框</x-radio>
        <x-radio v-model="radio4" label="3" border size="small">
          小型单选框
        </x-radio>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;

  h2 {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
  }
}

.demo-block {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: #fff;

  .x-button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
