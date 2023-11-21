import { reactive, h, VNode, defineComponent, PropType } from "vue";
import { Col, Form, FormItem, Row } from 'ant-design-vue';
export type ComponentJson = {
  element: string | VNode,
  vmodel: string,
  on?: Function,
  props?: Function,
  attrs?: Record<string, string>
  span?: number,
  children?: string | VNode[],
  [k: string]: any,
}

export default defineComponent({
  name: 'JsonView',
  props: {
    // 父组件传入的组件
    components: {
      type: Object as PropType<ComponentJson[]>,
      default: [],
    },
    needValidate: {
      type: Boolean,
      default: true,
    }
  },
  setup(props:any, { expose }: any) {
    // 初始化表单数据
    const { components, needValidate } = props;
    const originModel: Record<string, any> = {};
    components.forEach((item: ComponentJson) => { originModel[item.vmodel] = undefined })
    const model = reactive(originModel);
    const SpanedForm = components
      .map(({ element, props, on, span, vmodel, children }: ComponentJson) => 
      <Row>
        <Col span={ span || 24 }> { 
          needValidate
          ? (<Form model={model[vmodel]}><FormItem>{h(element, { props, on }, children)}</FormItem></Form>)
          : h(element, { props, on})
          }
          </Col>
      </Row>
      );
    return () => h('div', [SpanedForm])
  },
});