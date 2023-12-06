<h1 align="center">vue-json-render</h1>

- 通过JSON配置实现页面渲染
- 适用于巨量表单的B端项目
- 面向开发人员，小巧轻便，不失灵活性
- 摆脱巨量表单的cv操作，摆脱重复逻辑，实现代码收敛
- 基于typescirpt，提供完整的类型提示

## 环境支持
- vue3
- ant-design-vue 4.x
## example
```
<script setup lang="ts">
import { JRender, type CJson } from 'vue-json-render';
import { Input, Button, Select, DatePicker, Checkbox } from 'ant-design-vue';
import { ref } from 'vue'
const components: CJson[] = [
  {
    element: Input,
    elementKey: 'inputKey',
    label: '输入框',
    span: 8,
    rules: { required: true, message: '请输入' }
  },
  {
    element: Select,
    elementKey: 'selectKey',
    label: '下拉框',
    span: 8,
    props: {
      options: [
        {
          label: '选项一',
          value: '1',
        },
        {
          label: '选项一',
          value: '2',
        },
        {
          label: '选项一',
          value: '3',
        },
      ]
    },
    rules: { required: true, message: '请输入' }
  },
  {
    element: DatePicker,
    elementKey: 'dateKey',
    label: '日期选择',
    span: 8,
    rules: { required: true, message: '请输入' }
  },
  {
    element: Button,
    elementKey: 'buttonKey',
    span: 4,
    props: {
      type: 'primary',
      danger: true,
    },
    action: ({ setProps, model, components, hide, addAfter, addBefore, del, form }, props, context) => {
      return {
        onclick: () => {
          setProps({ danger: false }, 'buttonKey')
        },
      }
    },
    children: '点我设置按钮属性'
  },
  {
    element: Button,
    elementKey: 'buttonKeyAdd',
    span: 4,
    props: {
      type: 'primary',
      danger: true,
    },
    action: ({ addAfter }, props, context) => {
      return {
        onclick: () => {
          const p:CJson[] = [{
            element: Checkbox,
            elementKey: 'checkBoxKey',
            label: '新标签',
            span: 8,
            rules: [{ required: true, message: '不要忽略我这个新增的'}]
          }]
          addAfter('dateKey', p);
        },
      }
    },
    children: 'addAfter'
  },
  {
    element: Button,
    elementKey: 'buttonKeyAdd',
    span: 4,
    props: {
      type: 'primary',
      danger: true,
    },
    action: ({ addBefore }, props, context) => {
      return {
        onclick: () => {
          const p:CJson[] = [{
            element: Checkbox,
            elementKey: 'checkBoxKey',
            label: '新标签',
            span: 8,
            rules: [{ required: true, message: '不要忽略我这个新增的'}]
          }]
          addBefore('dateKey', p);
        },
      }
    },
    children: 'addBefore'
  },
  {
    element: Button,
    elementKey: 'buttonKeyHide',
    span: 4,
    props: {
      type: 'primary',
      danger: true,
    },
    action: ({ setProps, hide }, props, context) => {
      return {
        onclick: () => {
          hide('dateKey')
        },
      }
    },
    children: '点我隐藏日期组件'
  },
  {
    element: Button,
    elementKey: 'buttonKeyHide',
    span: 4,
    props: {
      type: 'primary',
      danger: true,
    },
    action: ({ setProps, hide }, props, context) => {
      return {
        onclick: () => {
          hide('dateKey')
        },
      }
    },
    children: '点我显示日期组件'
  },
  {
    element: Button,
    elementKey: 'buttonKeyValidate',
    span: 4,
    props: {
      type: 'primary',
      danger: true,
    },
    action: ({ setProps, form }, props, context) => {
      return {
        onclick: () => {
          form.value.validate();
        },
      }
    },
    children: '点我验证表单'
  },
];
const p = ref();
const clickMe = () => {
  p.value.model.inputKey = 888888;
}
</script>
<template>
  <JRender :components="components" ref="p"/>
  <Button type="primary" @click="clickMe">点我从组件外访问内部方法属性</Button>
</template>

```
