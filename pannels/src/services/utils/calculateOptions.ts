import * as _ from "lodash";
import { ICategoryRes } from "./api/Admin/models";
import { flattenToArray, notHaveChildren, Tree } from "./treeTravers";

export const calculateLeafs = (data: ICategoryRes[]) => {
  if (data) {
    const notHaveChildrenArray = data.map((d) =>
      Tree.reduce(notHaveChildren, [], d)
    );
    const flattenVersion = _.flatten(notHaveChildrenArray);
    const options = flattenVersion.map((item) => ({
      value: item.id,
      label: item.title,
      // parent_title: item.parent_title,
    }));
    return options;
  }
};
export const calculateFlatten = (data: ICategoryRes[]) => {
  if (data) {
    const flattenTree = data.map((d) => Tree.reduce(flattenToArray, [], d));
    const flattenVersion = _.flatten(flattenTree);
    console.log(flattenVersion);
    const options = flattenVersion.map((item) => ({
      value: item.id,
      label: item.title,
      // parent_title: item.parent_title,
    }));
    return options;
    // return flattenTree
  }
};
