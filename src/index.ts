import { Component, onBeforeMount, reactive, h } from "vue";
export type ComponentJson = {
  element: string | Component,
  vmodel: string,
  on?: Function,
  props?: Function,
  span?: number,
  [k:string]: any,
}

export default {
  name: 'jsonView',
  props: {
    // 父组件传入的组件
    components: {
      type: Array,
      default: [],
    }
  },
  setup() {
    // 初始化表单数据
    const originModel: Record<string, any> = {};
    this.components.forEach((item: ComponentJson) => { originModel[item.vmodel] = undefined })
    const model = reactive(originModel);
    return () => {
      
    }
  },
};