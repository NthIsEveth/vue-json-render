import { ShallowRef } from "vue";
import { CJson } from "./componentsRender";

const add = (comp: CJson[], flag: 'before' | 'after', source: ShallowRef<CJson[]>, key?: string) => {
  if (!key) return;
  const idx = source.value.findIndex((p: CJson) => p.elementKey === key);
  const breakPoint = flag === 'after' ? idx + 1 : idx;
  const left = source.value.slice(0, breakPoint);
  const right = source.value.slice(idx, source.value.length)
  source.value = [...left, ...comp, ...right];
}
const delByKey = (keys: Array<string | undefined>, source: ShallowRef<CJson[]>) => (source.value = source.value.filter((item) => !keys.includes(item.elementKey)));
const setPropsInner = (props: Record<string, any>, source: ShallowRef<CJson[]>, key:string) => {
  const idx = source.value.findIndex((item) => item.elementKey === key);
  if (idx<=-1) {
    console.warn('当前设置的key不存在');
    return;
  }
  const { props: oldProps } = source.value[idx];
  source.value[idx].props = oldProps ? { ...oldProps, ...props } : props;
};
const toggle = (hidden: true | false, key:string,source: ShallowRef<CJson[]>) => {
  const idx = source.value.findIndex((item) => item.elementKey === key);
  if (idx<=-1) {
    console.warn('当前设置的key不存在');
    return;
  }
  source.value[idx].hidden = hidden;
};
export {
  add,
  delByKey,
  setPropsInner,
  toggle
}