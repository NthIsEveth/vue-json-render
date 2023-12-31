import { h, VNode, defineComponent, PropType, SetupContext, Component, ref, Ref, markRaw, isRef, unref, isReactive, toRaw, computed, onMounted, reactive } from "vue";
import { Col, Form, FormItem, Row } from 'ant-design-vue';
import { RuleObject } from "ant-design-vue/es/form";
import { add, setPropsInner, toggle } from './tools'
import { FormExpose, FormProps } from "ant-design-vue/es/form/Form";
import { Gutter } from "ant-design-vue/es/grid/Row";

type ToExpose = {
  form: Ref<FormExpose>,
  model: Record<string, any>,
  addAfter: (key: string, comp: CJson[]) => void,
  addBefore: (key: string, comp: CJson[]) => void,
  setProps: (props: Record<string, any>, keys: string) => void;
  show: (key: string) => void;
  hide: (key: string) => void;
  components: Ref<CJson[]>,
  cloneComponents: CJson[],
}
export type CJson = {
  element: string | VNode | Component,
  label?: string,
  placeholder?: string,
  elementKey: string,
  props?: Record<string, any>,
  action?: (toExpose: ToExpose, props: any, context: SetupContext) => Record<string, any>,
  hidden?: boolean,
  span?: number,
  offsets?:number,
  children?: string | VNode[],
  type?: 'select',
  defaultValue?: any,
  rules?: RuleObject | RuleObject[],
  mounted?: (component: CJson) => void,
  custom?: Record<string, any>
}
export default defineComponent({
  name: 'JRender',
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
  },
  emits: ['JRmounted'],
  setup(props: any, context: SetupContext) {
    const originModel: Record<string, any> = {};
    const form = ref();
    let unwrap = props.components;
    const cloneComponents = unwrap.map((item:CJson) => ({ ...item }) )
    if (isRef(unwrap)) unwrap = unref(unwrap);
    if (isReactive(unwrap)) unwrap = toRaw(unwrap);
    const components: Ref<CJson[]> = ref(unwrap.map((item: CJson) => {
      const { element, label, elementKey, props: p, action, hidden, span, children, type, defaultValue, rules, mounted } = item;
      if (elementKey) originModel[elementKey] = defaultValue
      if (mounted) onMounted(() => mounted(item))
      const rawElement = typeof element !== 'string' ? markRaw(element) : element;
      const rawChildren = typeof children !== 'string' && children ? markRaw(children) : children;
      return { element: rawElement, children: rawChildren, action, elementKey, span, type, defaultValue, label, props: p, hidden, rules };
    }));
    const { expose } = context;
    const model = reactive(originModel);
    const addBefore = (key: string, comp: CJson[]) => add(comp, 'before', components, key)
    const addAfter = (key: string, comp: CJson[]) => add(comp, 'after', components, key);
    const hide = (key: string) => toggle(true, key, components, model)
    const show = (key: string) => toggle(false, key, components, model);
    const setProps = (props: Record<string, any>, key: string) => setPropsInner(props, components, key);
    const toExpose: ToExpose = { form, model, addAfter, addBefore, setProps, show, hide, components, cloneComponents };
    expose(toExpose);
    const renderElement = (comp: CJson) => {
      const { action, element, children } = comp;
      const resolvedEvents = action ? action(toExpose, props, context) : {};
      const placeholderPrefix = comp.type ? '请选择' : '请输入';
      const vmodel = { 'onUpdate:value': (val: any) => model[comp.elementKey] = val, value: model[comp.elementKey] }
      if (comp.props) comp.props.placeholder = comp.props.placeholder || `${placeholderPrefix}${comp.label}`;
      return h(element, { ...comp.props, ...resolvedEvents, ...vmodel }, () => children)
    }
    const renderFormItem = (component: CJson) => {
      const { label, rules, elementKey } = component;
      return h(FormItem, { rules, label, name: elementKey }, () => renderElement(component))
    }
    const { isForm } = props;
    const cols = computed(() => components.value.filter(({ hidden }: CJson) => hidden !== true)
      .map((item: CJson) => h(Col, { span: item.span }, () => isForm ? renderFormItem(item) : renderElement(item))))
    const row = h(Row, { gutter: props.gutter }, () => cols.value);
    onMounted(() => context.emit('JRmounted'));
    return () => isForm ? h(Form, { model: model, ref: form, ...props.formProps }, row) : h('div', {}, row)
  },
});