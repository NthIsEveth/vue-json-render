<h1 align="center">vue-json-render</h1>

## 使用方式
```
npm i vue-json-render
```

## 用我来做什么

- 通过JSON配置的方式构建ant-design-vue <b>表单类</b> 页面
- 支持除表单以外的任意其他页面元素渲染
- <b>提供表单联动相关API,可进行高复杂度的表单联动</b>
- <b>聚焦表单类问题</b>

## WHY ME ?

- 将组件逻辑抽象至小粒度的JSON内，方便组件及组件逻辑的抽象;
- 编码回归到js/ts;

## 依赖

- 依赖了ant-design-vue 4.x的 Form, FormItem, Row, Col四个组件
- 表单验证依赖<a>Form</a>及<a>FormItem</a>组件
- 布局依赖<a>Row</a>及<a>Col</a>组件

## vue版本

- vue3

## JRender 组件的API

- components 渲染数据源
- formProps 透传给 <a href="https://www.antdv.com/components/overview-cn/">ant-design-vue 4.x</a> 的 <a href="https://www.antdv.com/components/form/">Form</a> 组件的属性 如layout, etc..
- gutter 透传给 <a href="https://www.antdv.com/components/overview-cn/">ant-design-vue</a> 的 <a href="https://www.antdv.com/components/grid">Row</a> 组件的属性, 控制grid布局下的元素间距
- isForm 组件是否启用<a href="https://www.antdv.com/components/overview-cn/">ant-design-vue 4.x</a> 的 <a href="https://www.antdv.com/components/form/">Form</a> 组件, 设置为<b>false</b>后表单相关的属性失效
- status 组件附加的状态属性，方便业务逻辑扩展，如编辑态、审核态 ect;

## CJson 配置使用说明

- action({setProps, model, components, hide, show, addAfter, addBefore, form, cloneComponents,components }, props, context) 注册组件事件,返用法同render函数的prop参数, 即在事件前加"on"前缀，onClick，onClick,etc... 参考<a href="https://cn.vuejs.org/guide/extras/render-function.html">Vue的render函数章节</a> 
  - setProps({ disabled: false }, elementKey) 设置 component.elementKey = elementKey 组件的props
  - hide(elementKey); 隐藏 component.elementKey = elementKey 的组件
  - show(elementKey); 显示 component.elementKey = elementKey 的组件
  - addAfter(elementKey, components: CJson[]); 在component.elementKey = elementKey 的组件后添加组件;
  - addBefore(elementKey, components: CJson[]); 在component.elementKey = elementKey 的组件前添加组件;
  - <b>model</b> 中存储的是表单数据，通过它可以<b>修改</b>/<b>获取</b>表单数据;
  - form 是ant-design-vue的<a>Form</a>组件的ref属性，用于操作表单验证validate,resetFields etc.. 具体参见官方文档
  - cloneComponents 传入组件的初始配置，用于恢复页面初始状态
  - components JRender组件渲染过程中实际使用的配置，修改components会触发视图渲染
  - props JRender组件的setup的props参数,即JRender的Props属性
  - context JRender组件的setup的context参数，即JRender的上下文

## CJson 类型说明

```
export type CJson = {
  element: string | VNode | Component, // 要渲染的元素
  elementKey: string, // 表单的唯一标识（不能重复）
  hidden?: boolean, // 是否展示当前元素
  label?: string, // 表单名称:即formItem的label;
  props?: Record<string, any>, // 组件的props
  action?: (toExpose: ToExpose, props: any, context: SetupContext) => Record<string, any>, // 绑定事件
  defaultValue?: any, // 表单的默认值
  rules?: RuleObject | RuleObject[], // 表单的校验规则
  mounted?: (component: CJson) => void, // JRender 组件mounted时执行此函数
  placeholder?: string, // 表单 placelhoder
  span?: number, // grid布局的col参数
  offsets?:number, // grid布局的col参数
  children?: string | VNode[], // 当前元素的子组件
  type?: 'select', // 表单类型（设置为'select'后 自动填充的placeholder前缀变为请选择）
  custom?: Record<string, any> // 用户的自定义属性
}
```

### CJson[] 示例

```
const components:CJson[] =  [{
    element: Select,
    elementKey: 'selectKey',
    label: '输入框',
    span: 8,
    offsets: 2,
    defaultValue:  2,
    props: {
      disabled: true,
      options: [{ label: '选项一', value: '1'}],
    },
    type: 'select',
    hidden: false,
    rules: { required: true, message: '请输入' },
    action: ({ setProps, model, components, hide, show, addAfter, addBefore, form }, props, context) => {
      return {
        onChange: () => {
          setProps({ disabled: false }, 'inputKey')
          hide('inputKey');
          show('inputKey');
          addAfter('inputKey', [{element: 'button', elementKey: 'buttonKeyAfter'}])
          addBefore('inputKey', [{element: 'button', elementKey: 'buttonKeyBefore'}])
          form.value.validate();
          form.value.resetFields();
          // ...ect 即antd的form挂载的方法
          model.inputKey = 'new value';
          if (components.value[0] && components.value[0].props)  components.value[0].props.disabled = false;
          props.isForm;
          context.emit('xxx')
        },
      }
    },
    mounted: async (record) => {},
  }];
```
## example
```
// page.vue
<script lang="ts" setup>
import { JRender } from 'vue-json-render';
import { components } from './pageConfig';
</script>
<template>
 <JRender :components="components" ref="p" @JRmounted="() => { console.log('JRender mounted!')}" />
</template>
// pageConfig.ts
import { Select } from 'ant-design-vue';
import type { CJson } from 'vue-json-render';
const components:CJson[] = [
  { 
    element: Select,
    elementKey: 'selectKey',
    label: 'hello',
    span: 8,
    props: {
      options: [{ label: '选项一', value: '我是选项一'}],
    },
    type: 'select',
    rules: { required: true, message: '请输入' },
    action: ({ setProps, model, components, hide, show, addAfter, addBefore, form }, props, context) => {
      return {
        onChange: () => {
          console.log(model.selectKey)
        },
      }
    },
    mounted: async (record) => {}
  }
];
export {
  components,
}

```
