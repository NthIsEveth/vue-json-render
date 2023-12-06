<h1 align="center">vue-json-render</h1>

- 通过JSON配置实现页面渲染
- 适用于巨量表单的B端项目
- 面向开发人员，小巧轻便，不失灵活性
- 摆脱巨量表单的cv操作，摆脱重复逻辑，实现代码收敛
- 基于typescirpt，提供完整的类型提示
## 环境支持
- vue3
- ant-design-vue 4.x
## CJson类型说明
```
export type CJson = {
  element: string | VNode | Component, // 要渲染的组件
  label?: string, // 表单名称 (props.isForm 为true模式下生效)
  placeholder?: string, // 表单placelhoder
  elementKey: string, // 表单的唯一标识（不能重复）
  props?: Record<string, any>, // 组件的props
  action?: (toExpose: ToExpose, props: any, context: SetupContext) => Record<string, any>, // 事件集合
  hidden?: boolean, // 组件是否显示
  span?: number, // grid布局的col参数
  offsets?:number, // grid布局的col参数
  children?: string | VNode[], // 当前组件的子组件
  type?: 'select', // 表单类型（区分placeholder的自动前缀）
  defaultValue?: any, // 表单的默认值
  rules?: RuleObject | RuleObject[], // 表单的校验规则
  mounted?: (component: CJson) => void, // JRender 组件挂载时的钩子函数
  custom?: Record<string, any> // 用户的自定义属性
}
// 单个组件的 example
const component =  {
    element: Select,
    elementKey: 'inputKey',
    label: '输入框',
    span: 8,
    offsets: 2,
    defaultValue:  2,
    props: {
      disabled: true,
      options: [
        {
          label: '选项一',
          value: '1'
        },
        {
          label: '选项二',
          value: '1'
        },
    ],
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
    mounted: async (record) => {
      console.log(record);
    },
  };

```
## api说明
- setProps({ disabled: false }, elementKey) 通过elementKey 设置对应组件的props
- hide(elementKey); 隐藏对应的组件
- show(elementKey); 显示对应的组件

## Props
组件共有5个props属性
```
 props: {
    components: {
      type: Object as PropType<CJson[]>,
      default: [],
    },
    formProps: {
      type: Object as PropType<Omit<FormProps, 'model' | 'ref'>>,
      default: undefined
    },
    gutter: {
      type: Object as PropType<Gutter>,
      default: [12, 12]
    },
    isForm: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      default: '',
    },
  }
```
- components 即CJson组件构成的数组
- formProps 透传给 <a>ant-design-vue</a> 的 <a>Form</a> 组件的属性
- gutter 透传给 <a>ant-design-vue</a> 的 <a>Row</a> 组件的属性
- isForm 组件是否启用<a>ant-design-vue</a> 的 <a>Form</a> 组件, 设置为<b>false</b>后表单相关的属性失效
- status 组件附加的状态属性，方便业务逻辑扩展，如编辑态、审核态 ect;

