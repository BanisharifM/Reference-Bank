interface IIndexSyc {
  [index: string]: any;
}
export const objectComparison = <T extends IIndexSyc>(
  initialObj: T,
  newObj: T
) => {
  return Object.entries(initialObj).reduce<any>((acc, curr) => {
    //curr : ["name" :"ali"]
    if (curr[1] !== newObj[curr[0]])
      return { ...acc, [curr[0]]: newObj[curr[0]] };
    return acc;
  }, {});
};
