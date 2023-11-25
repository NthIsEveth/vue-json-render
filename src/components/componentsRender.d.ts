import { VNode, PropType, SetupContext, Component, Ref } from "vue";
import { RuleObject } from "ant-design-vue/es/form";
type ToExpose = {
    form: Ref<String>;
    model: Record<string, any>;
    addAfter: (key: string, comp: CJson[]) => void;
    addBefore: (key: string, comp: CJson[]) => void;
    del: (keys: string[]) => void;
};
export type CJson = {
    element: string | VNode | Component;
    label?: string;
    vmodel?: string;
    props?: (toExpose: ToExpose, props: any, context: SetupContext) => Record<string, any>;
    hidden?: boolean;
    span?: number;
    children?: string | VNode[];
    type?: 'select';
    defaultValue?: any;
    rules?: RuleObject | RuleObject[];
};
declare const _default: import("vue").DefineComponent<{
    components: {
        type: PropType<CJson[]>;
        default: never[];
    };
    needValidate: {
        type: BooleanConstructor;
        default: boolean;
    };
    layout: {
        type: StringConstructor;
        default: undefined;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:components", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    components: {
        type: PropType<CJson[]>;
        default: never[];
    };
    needValidate: {
        type: BooleanConstructor;
        default: boolean;
    };
    layout: {
        type: StringConstructor;
        default: undefined;
    };
}>>, {
    components: CJson[];
    needValidate: boolean;
    layout: string;
}, {}>;
export default _default;
