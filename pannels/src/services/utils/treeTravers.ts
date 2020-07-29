import * as _ from "lodash";
import { ICategoryRes } from "./api/Admin/models";

interface ITree {
  reduce: any;
  map: any;
  mapChangeChildrenName: any;
}
function hasChildren(node: any) {
  return (
    typeof node === "object" &&
    typeof node.children !== "undefined" &&
    node.children.length > 0
  );
}

function hasSubRows(node: any) {
  return (
    typeof node === "object" &&
    typeof node.subRows !== "undefined" &&
    node.subRows.length > 0
  );
}

export function notHaveChildren(arr: any, data: any) {
  if (!data.children.length) {
    return arr.concat([{ ...data }]);
  }
  return arr;
}
export function renameProp(node: any) {
  const { children, ...rest } = node;
  return {
    ...rest,
    subRows: children,
  };
}

export const Tree: ITree = {
  reduce: _.curry<any, any, any, any>(function reduce(reducerFn, init, node) {
    const acc = reducerFn(init, node);
    if (!hasChildren(node)) {
      return acc;
    }
    return node.children.reduce(Tree.reduce(reducerFn), acc);
  }),
  map: _.curry<any, any, any>(function map(mapFn, node) {
    const newNode = mapFn(node);
    if (hasChildren(node)) {
      return newNode;
    }
    newNode.children = node.children.map(Tree.map(mapFn));
    return newNode;
  }),
  mapChangeChildrenName: _.curry<any, any, any>(function map(mapFn, node) {
    const newNode = mapFn(node);
    if (hasSubRows(node)) {
      return newNode;
    }
    newNode.subRows = node.children.map(Tree.mapChangeChildrenName(mapFn));
    return newNode;
  }),
};
