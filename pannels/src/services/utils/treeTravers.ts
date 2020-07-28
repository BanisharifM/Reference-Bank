import * as _ from "lodash";
import { ICategoryRes } from "./api/Admin/models";

interface ITree {
  reduce: any;
}
function hasChildren(node: any) {
  return (
    typeof node === "object" &&
    typeof node.children !== "undefined" &&
    node.children.length > 0
  );
}

export function notHaveChildren(arr: any, data: any) {
  if (!data.children.length) {
    return arr.concat([{ ...data }]);
  }
  return arr;
}
export const Tree: ITree = {
  reduce: _.curry<any, any, any, any>(function reduce(reducerFn, init, node) {
    const acc = reducerFn(init, node);
    if (!hasChildren(node)) {
      return acc;
    }
    return node.children.reduce(Tree.reduce(reducerFn), acc);
  }),
};
