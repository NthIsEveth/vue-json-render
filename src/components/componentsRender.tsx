import { reactive, h, VNode, defineComponent, PropType, SetupContext, Component, ref, Ref } from "vue";
import { Col, Form, FormItem, Row } from 'ant-design-vue';
import { RuleObject } from "ant-design-vue/es/form";
import { add, delByKey } from './tools'
type ToExpose = {
  form: Ref<String>, 
  model: Record<string, any>, 
  addAfter:(key: string, comp: CJson[]) => void ,
  addBefore: (key: string, comp: CJson[]) => void, 
  del: (keys:string[]) => void;
}
export type CJson = {
  element: string | VNode | Component,
  label?: string,
  vmodel?: string,
  props?: (toExpose:ToExpose, props: any, context: SetupContext) => Record<string, any>,
  hidden?: boolean,
  span?: number,
  children?: string | VNode[],
  type?: 'select',
  defaultValue?: any,
  rules?: RuleObject | RuleObject[]
}
export default defineComponent({
  name: 'CRender',
  props: {
    components: {
      type: Object as PropType<CJson[]>,
      default: [],
    },
    needValidate: {
      type: Boolean,
      default: true,
    },
    layout: {
      type: String,
      default: undefined
    },
  },
  emits: ['update:components'],
  setup(props: any, context: SetupContext) {
    const { components, needValidate } = props;
    const { expose } = context;
    const originModel: Record<string, any> = {};
    const form = ref('form');
    components.forEach((item: CJson) => item.vmodel && (originModel[item.vmodel] = item.defaultValue))
    const model = reactive(originModel);
    const del = (keys: Array<string | undefined>) => context.emit('update:components', delByKey(keys, components));
    const addBefore = (key: string, comp: CJson[] ) =>  context.emit('update:components', add(comp,'before',components, key))
    const addAfter = (key: string, comp: CJson[]) => context.emit('update:components', add(comp,'after',components, key));
    const toExpose:ToExpose = { form, model, addAfter, addBefore, del };
    expose({ form, model, addAfter, addBefore, del });
    const onlyInput = ({ element, props: cProps, children, vmodel, type, label }: CJson) => {
      const resolvedProps = cProps ? cProps(toExpose, props, context) : {};
      const placeholderPrefix = type ? '请选择' : '请输入';
      if (vmodel) {
        const defaultOnInput = (e: any) => model[vmodel] = e.target.value;
        const { onInput } = resolvedProps;
        resolvedProps.value = model[vmodel];
        resolvedProps.onInput = (e: any) => {
          defaultOnInput(e);
          if (onInput) onInput(e)
        }
      }
      resolvedProps.placeholder = props.placeholder || `${placeholderPrefix}${label}`;
      return () => h(element, resolvedProps, children)
    }
    const inputWithItem = (component: CJson) => {
      const { label, rules, vmodel } = component;
      return <FormItem label={label} rules={rules} name={vmodel}>{onlyInput(component)}</FormItem>
    }
    const toRender = (item: CJson) => needValidate ? inputWithItem(item) : onlyInput(item)
    return () => {
      const cols = props.components
        .filter((c: CJson) => c.hidden !== true)
        .map((item: CJson) => <Col span={item.span || 24} > {toRender(item)}</Col>);
      const FormView = <Form model={model} layout={props.layout} ref={form}>{cols}</Form>;
      return h(Row, { gutter: 12 }, FormView)
    }
  },
});