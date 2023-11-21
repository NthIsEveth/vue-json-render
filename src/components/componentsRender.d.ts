import { VNode, PropType } from "vue";
export type ComponentJson = {
    element: string | VNode;
    vmodel: string;
    on?: Function;
    props?: Function;
    attrs?: Record<string, string>;
    span?: number;
    children?: string | VNode[];
    [k: string]: any;
};
declare const _default: import("vue").DefineComponent<{
    components: {
        type: PropType<ComponentJson[]>;
        default: never[];
    };
    needValidate: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    components: {
        type: PropType<ComponentJson[]>;
        default: never[];
    };
    needValidate: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    components: ComponentJson[];
    needValidate: boolean;
}, {}>;
export default _default;
