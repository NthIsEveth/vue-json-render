import { reactive, h, VNode, defineComponent, PropType, SetupContext, Component, ref, Ref, shallowRef, ShallowRef } from "vue";
import { Col, Form, FormItem, Row } from 'ant-design-vue';
import { RuleObject } from "ant-design-vue/es/form";
import { add, delByKey, setPropsInner, toggle } from './tools'

type ToExpose = {
  form: Ref<String>,
  model: Record<string, any>,
  addAfter: (key: string, comp: CJson[]) => void,
  addBefore: (key: string, comp: CJson[]) => void,
  del: (keys: string[]) => void;
  setProps: (props: Record<string, any>, keys: string) => void;
  show: (key: string) => void;
  hide: (key: string) => void;
  components: ShallowRef<CJson[]>
}
export type CJson = {
  element: string | VNode | Component,
  label?: string,
  elementKey: string,
  props?: Record<string, any>,
  action?: (toExpose: ToExpose, props: any, context: SetupContext) => Record<string, (e?: any) => void>,
  hidden?: boolean,
  span?: number,
  children?: string | VNode[],
  type?: 'select',
  defaultValue?: any,
  rules?: RuleObject | RuleObject[]
}
export default defineComponent({
  name: 'JRender',
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
    const { needValidate } = props;
    const originModel: Record<string, any> = {};
    const form = ref('form');
    const components:ShallowRef<CJson[]> = shallowRef(props.components.map((item: CJson) => {
      const { element, label, elementKey, props, action, hidden, span, children, type, defaultValue, rules } = item;
      if (elementKey) originModel[elementKey] = defaultValue
      return { ...reactive({ label, elementKey, props: { ...props }, hidden, span, rules, defaultValue, type }), element, action, children }
    }));
    const { expose } = context;
    const model = reactive(originModel);
    const del = (keys: Array<string | undefined>) => delByKey(keys, components);
    const addBefore = (key: string, comp: CJson[]) => add(comp, 'before', components, key)
    const addAfter = (key: string, comp: CJson[]) => add(comp, 'after', components, key);
    const hide = (key: string) => toggle(true, key, components)
    const show = (key: string) => toggle(false, key, components);
    const setProps = (props: Record<string, any>, key: string) => setPropsInner(props, components, key);
    const toExpose: ToExpose = { form, model, addAfter, addBefore, del, setProps, show, hide, components };
    expose(toExpose);
    // 这里是否可以用解构?
    const onlyInput = ({ element, props: cProps, children, elementKey, type, label, action }: CJson) => {
      const resolvedProps = cProps ? cProps : {};
      const resolvedEvents = action ? action(toExpose, props, context) : {};
      const placeholderPrefix = type ? '请选择' : '请输入';
      resolvedProps.placeholder = props.placeholder || `${placeholderPrefix}${label}`;
      return h(element, { ...resolvedProps, ...resolvedEvents, 'onUpdate:value': (val: any) => model[elementKey] = val }, { default: () => children })
    }
    const inputWithItem = (component: CJson) => {
      const { label, rules, elementKey } = component;
      return h(FormItem, { rules, label, name: elementKey }, () => onlyInput(component))
    }
    const toRender = (item: CJson) => needValidate ? inputWithItem(item) : onlyInput(item)
    return () => {
      const cols = props.components
        .map((item: CJson) => h(Col, { span: item.span, style: { display: item.hidden ? 'none' : 'block' } }, () => toRender(item)));
      return h(Row, { gutter: 12 }, () => h(Form, { model, ref: form, style: { width: '100%' } }, () => cols))
    }
  },
});