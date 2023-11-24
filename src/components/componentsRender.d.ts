import { VNode, PropType, SetupContext, Component } from "vue";
import { RuleObject } from "ant-design-vue/es/form";
export type CJson = {
    element: string | VNode | Component;
    label?: string;
    vmodel?: string;
    props?: (data: Record<string, any>, props: any, context: SetupContext) => Record<string, any>;
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
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
