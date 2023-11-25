import { CJson } from "./componentsRender";

const add = (comp: CJson[], flag: 'before' | 'after', source: CJson[], key?: string) => {
  if (!key) return [...source,...comp];
  const idx = source.findIndex((p: CJson) => p.vmodel === key);
  const breakPoint = flag === 'after' ? idx + 1 : idx;
  const left = source.slice(0, breakPoint);
  const right = source.slice(idx, source.length)
  return [...left, ...comp, ...right];
}
const delByKey = (keys: Array<string | undefined>, source: CJson[]) => source.filter((p: CJson) => !keys.includes(p.vmodel));
export {
  add,
  delByKey
}