import { CJson } from "./componentsRender";
declare const add: (comp: CJson[], flag: 'before' | 'after', source: CJson[], key?: string) => CJson[];
declare const delByKey: (keys: Array<string | undefined>, source: CJson[]) => CJson[];
export { add, delByKey };
