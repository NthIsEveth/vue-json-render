import { ShallowRef } from "vue";
import { CJson } from "./componentsRender";
declare const add: (comp: CJson[], flag: 'before' | 'after', source: ShallowRef<CJson[]>, key?: string) => void;
declare const delByKey: (keys: Array<string | undefined>, source: ShallowRef<CJson[]>) => CJson[];
declare const setPropsInner: (props: Record<string, any>, source: ShallowRef<CJson[]>, key: string) => void;
declare const toggle: (hidden: true | false, key: string, source: ShallowRef<CJson[]>) => void;
export { add, delByKey, setPropsInner, toggle };
