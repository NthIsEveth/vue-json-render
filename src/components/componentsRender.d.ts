import { VNode, PropType, SetupContext, Component, Ref } from "vue";
import { RuleObject } from "ant-design-vue/es/form";
import { FormExpose } from "ant-design-vue/es/form/Form";
import { Gutter } from "ant-design-vue/es/grid/Row";
type ToExpose = {
    form: Ref<FormExpose>;
    model: Record<string, any>;
    addAfter: (key: string, comp: CJson[]) => void;
    addBefore: (key: string, comp: CJson[]) => void;
    setProps: (props: Record<string, any>, keys: string) => void;
    show: (key: string) => void;
    hide: (key: string) => void;
    components: Ref<CJson[]>;
    cloneComponents: CJson[];
};
export type CJson = {
    element: string | VNode | Component;
    label?: string;
    placeholder?: string;
    elementKey: string;
    props?: Record<string, any>;
    action?: (toExpose: ToExpose, props: any, context: SetupContext) => Record<string, any>;
    hidden?: boolean;
    span?: number;
    children?: string | VNode[];
    type?: 'select';
    defaultValue?: any;
    rules?: RuleObject | RuleObject[];
    mounted?: (component: CJson) => void;
    custom?: Record<string, any>;
};
declare const _default: import("vue").DefineComponent<{
    components: {
        type: PropType<CJson[]>;
        default: never[];
    };
    formProps: {
        type: PropType<Omit<Partial<import("vue").ExtractPropTypes<{
            layout: import("vue-types").VueTypeDef<string>;
            labelCol: {
                type: PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    sm: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    md: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    lg: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xxl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes>;
                default: Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    sm: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    md: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    lg: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xxl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes;
            };
            wrapperCol: {
                type: PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    sm: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    md: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    lg: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xxl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes>;
                default: Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    sm: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    md: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    lg: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xxl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes;
            };
            colon: {
                type: BooleanConstructor;
                default: boolean;
            };
            labelAlign: {
                type: PropType<import("ant-design-vue/es/form/interface").FormLabelAlign>;
                default: import("ant-design-vue/es/form/interface").FormLabelAlign;
            };
            labelWrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            prefixCls: StringConstructor;
            requiredMark: {
                type: PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
                default: "" | import("ant-design-vue/es/form/Form").RequiredMark;
            };
            hideRequiredMark: {
                type: BooleanConstructor;
                default: boolean;
            };
            model: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            rules: {
                type: PropType<{
                    [k: string]: RuleObject | RuleObject[];
                }>;
                default: {
                    [k: string]: RuleObject | RuleObject[];
                };
            };
            validateMessages: {
                type: PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
                default: import("ant-design-vue/es/form/interface").ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToFirstError: {
                default: boolean | import("scroll-into-view-if-needed").Options<any>;
                type: PropType<boolean | import("scroll-into-view-if-needed").Options<any>>;
            };
            onSubmit: {
                type: PropType<(e: Event) => void>;
                default: (e: Event) => void;
            };
            name: StringConstructor;
            validateTrigger: {
                type: PropType<string | string[]>;
                default: string | string[];
            };
            size: {
                type: PropType<import("ant-design-vue/es/button").ButtonSize>;
                default: import("ant-design-vue/es/button").ButtonSize;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            onValuesChange: {
                type: PropType<(changedValues: any, values: any) => void>;
                default: (changedValues: any, values: any) => void;
            };
            onFieldsChange: {
                type: PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
                default: (changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void;
            };
            onFinish: {
                type: PropType<(values: any) => void>;
                default: (values: any) => void;
            };
            onFinishFailed: {
                type: PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
                default: (errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void;
            };
            onValidate: {
                type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
            };
        }>>, "model" | "ref">>;
        default: undefined;
    };
    gutter: {
        type: PropType<Gutter>;
        default: number[];
    };
    isForm: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "JRmounted", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    components: {
        type: PropType<CJson[]>;
        default: never[];
    };
    formProps: {
        type: PropType<Omit<Partial<import("vue").ExtractPropTypes<{
            layout: import("vue-types").VueTypeDef<string>;
            labelCol: {
                type: PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    sm: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    md: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    lg: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xxl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes>;
                default: Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    sm: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    md: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    lg: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xxl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes;
            };
            wrapperCol: {
                type: PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    sm: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    md: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    lg: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xxl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes>;
                default: Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    sm: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    md: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    lg: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    xxl: {
                        type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes;
            };
            colon: {
                type: BooleanConstructor;
                default: boolean;
            };
            labelAlign: {
                type: PropType<import("ant-design-vue/es/form/interface").FormLabelAlign>;
                default: import("ant-design-vue/es/form/interface").FormLabelAlign;
            };
            labelWrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            prefixCls: StringConstructor;
            requiredMark: {
                type: PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
                default: "" | import("ant-design-vue/es/form/Form").RequiredMark;
            };
            hideRequiredMark: {
                type: BooleanConstructor;
                default: boolean;
            };
            model: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            rules: {
                type: PropType<{
                    [k: string]: RuleObject | RuleObject[];
                }>;
                default: {
                    [k: string]: RuleObject | RuleObject[];
                };
            };
            validateMessages: {
                type: PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
                default: import("ant-design-vue/es/form/interface").ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToFirstError: {
                default: boolean | import("scroll-into-view-if-needed").Options<any>;
                type: PropType<boolean | import("scroll-into-view-if-needed").Options<any>>;
            };
            onSubmit: {
                type: PropType<(e: Event) => void>;
                default: (e: Event) => void;
            };
            name: StringConstructor;
            validateTrigger: {
                type: PropType<string | string[]>;
                default: string | string[];
            };
            size: {
                type: PropType<import("ant-design-vue/es/button").ButtonSize>;
                default: import("ant-design-vue/es/button").ButtonSize;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            onValuesChange: {
                type: PropType<(changedValues: any, values: any) => void>;
                default: (changedValues: any, values: any) => void;
            };
            onFieldsChange: {
                type: PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
                default: (changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void;
            };
            onFinish: {
                type: PropType<(values: any) => void>;
                default: (values: any) => void;
            };
            onFinishFailed: {
                type: PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
                default: (errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void;
            };
            onValidate: {
                type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
            };
        }>>, "model" | "ref">>;
        default: undefined;
    };
    gutter: {
        type: PropType<Gutter>;
        default: number[];
    };
    isForm: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    components: CJson[];
    formProps: Omit<Partial<import("vue").ExtractPropTypes<{
        layout: import("vue-types").VueTypeDef<string>;
        labelCol: {
            type: PropType<Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                sm: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                md: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                lg: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                xl: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                xxl: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes>;
            default: Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                sm: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                md: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                lg: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                xl: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                xxl: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes;
        };
        wrapperCol: {
            type: PropType<Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                sm: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                md: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                lg: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                xl: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                xxl: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes>;
            default: Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                sm: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                md: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                lg: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                xl: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                xxl: {
                    type: PropType<string | number | import("ant-design-vue/es/grid").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes;
        };
        colon: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelAlign: {
            type: PropType<import("ant-design-vue/es/form/interface").FormLabelAlign>;
            default: import("ant-design-vue/es/form/interface").FormLabelAlign;
        };
        labelWrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        prefixCls: StringConstructor;
        requiredMark: {
            type: PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
            default: "" | import("ant-design-vue/es/form/Form").RequiredMark;
        };
        hideRequiredMark: {
            type: BooleanConstructor;
            default: boolean;
        };
        model: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        rules: {
            type: PropType<{
                [k: string]: RuleObject | RuleObject[];
            }>;
            default: {
                [k: string]: RuleObject | RuleObject[];
            };
        };
        validateMessages: {
            type: PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
            default: import("ant-design-vue/es/form/interface").ValidateMessages;
        };
        validateOnRuleChange: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollToFirstError: {
            default: boolean | import("scroll-into-view-if-needed").Options<any>;
            type: PropType<boolean | import("scroll-into-view-if-needed").Options<any>>;
        };
        onSubmit: {
            type: PropType<(e: Event) => void>;
            default: (e: Event) => void;
        };
        name: StringConstructor;
        validateTrigger: {
            type: PropType<string | string[]>;
            default: string | string[];
        };
        size: {
            type: PropType<import("ant-design-vue/es/button").ButtonSize>;
            default: import("ant-design-vue/es/button").ButtonSize;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        onValuesChange: {
            type: PropType<(changedValues: any, values: any) => void>;
            default: (changedValues: any, values: any) => void;
        };
        onFieldsChange: {
            type: PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
            default: (changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void;
        };
        onFinish: {
            type: PropType<(values: any) => void>;
            default: (values: any) => void;
        };
        onFinishFailed: {
            type: PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
            default: (errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void;
        };
        onValidate: {
            type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
            default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
        };
    }>>, "model" | "ref">;
    gutter: Gutter;
    isForm: boolean;
}, {}>;
export default _default;
