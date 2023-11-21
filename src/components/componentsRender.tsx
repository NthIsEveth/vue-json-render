import { reactive, h, VNode, defineComponent, PropType, SetupContext, Component } from "vue";
import { Col, Form, FormItem, Row } from 'ant-design-vue';
export type ComponentJson = {
  element: string | VNode | Component,
  vmodel: string,
  props?: (data: Record<string, any>, props: any, context: SetupContext ) => Record<string, any>,
  hiden?: boolean,
  span?: number,
  children?: string | VNode[],
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
  setup(props: any, context: SetupContext) {
    // 初始化表单数据
    const { components, needValidate } = props;
    const originModel: Record<string, any> = {};
    components.forEach((item: ComponentJson) => { originModel[item.vmodel] = undefined })
    const model = reactive(originModel);
    const SpanedForm = components
      .map(({ element, props: cProps, span, vmodel, children }: ComponentJson) => 
      <Row>
        <Col span={ span || 24 }> { 
          needValidate
          ? (<Form model={model[vmodel]}><FormItem>{h(element, cProps && cProps({ model }, props, context), children) }</FormItem></Form>)
          : h(element, cProps && cProps({ model }, props, context), children)
          }
          </Col>
      </Row>
      );
    return () => h('div', [SpanedForm])
  },
});