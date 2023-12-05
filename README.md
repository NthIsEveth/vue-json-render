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
import { JRender, type CJson } from 'vue-json-render';
const components: CJson[] = [
  {
    element: Input,
    elementKey: 'inputKey',
    label: 'World',
    span: 8,
    props: () => {
      return {

      }
    },
    action: ({ setProps, model, components, hide, addAfter, addBefore, del, form }, props, context) => {
      return {
        onChange: (e) => {
          form.value.validate();
        },
        onblur: () => {
          hide('inputKey2');
          // const options = [{ label: 'aaaa', value: 'bbbb'}];
          // setProps({ options}, 'inputKey2')
          // const m = {
          //   element: Button,
          //   elementKey: 'inputKey3',
          //   label: 'World',
          //   span: 8,
          // };
          // addBefore('inputKey', [m])
        }
      }
    },
    rules: { required: true, message: '请输入' }
  },

  // {
  //   element: Select,
  //   elementKey: 'inputKey2',
  //   label: 'hide',
  //   span: 8,
  //   // props: {
  //   //   // options: [
  //   //   //   {
  //   //   //     label: '标签一',
  //   //   //     value: '值一'
  //   //   //   }]
  //   // },
  //   rules: { required: true, message: '请输入k2' }
  // },
  {
    element: Input,
    elementKey: 'inputKey3',
    label: 'k3',
    span: 8,
    props: {
      options: [
        {
          label: '标签一',
          value: '值一'
        }]
    },
    action: ({ show }, props, context) => {
      return {
        onChange: () => {
          show('inputKey2');
          // const options = [{ label: 'aaaa', value: 'bbbb'}];
          // setProps({ options}, 'inputKey2')
          // const m = {
          //   element: Button,
          //   elementKey: 'inputKey3',
          //   label: 'World',
          //   span: 8,
          // };
          // addBefore('inputKey', [m])
        }
      }
    },
    rules: { required: true, message: '请输入' }
  },
  {
    element: Select,
    elementKey: 'inputKey5',
    label: 'World',
    span: 8,
    props: {
      options: [
        {
          label: '标签一',
          value: '值一'
        }]
    },
    rules: { required: true, message: '请输入' }
  },
  {
    element: Select,
    elementKey: 'inputKey4',
    label: 'World',
    span: 8,
    props: {
      options: [
        {
          label: '标签一',
          value: '值一'
        }]
    },
    rules: { required: true, message: '请输入' }
  },
  // {
  //   element: markRaw(Tag),
  //   elementKey: 'smc',
  //   children: 'Hello World',
  //   // hidden: true,
  //   props: ({ model }, props, context) => {
  //     return {

  //     }
  //   },
  // },
];
```
