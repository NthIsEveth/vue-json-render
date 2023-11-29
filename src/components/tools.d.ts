import { Ref } from "vue";
import { CJson } from "./componentsRender";
declare const add: (comp: CJson[], flag: 'before' | 'after', source: Ref<CJson[]>, key?: string) => void;
declare const delByKey: (keys: Array<string | undefined>, source: Ref<CJson[]>) => CJson[];
declare const setPropsInner: (props: Record<string, any>, source: Ref<CJson[]>, key: string) => void;
declare const toggle: (hidden: true | false, key: string, source: Ref<CJson[]>) => void;
export { add, delByKey, setPropsInner, toggle, };
