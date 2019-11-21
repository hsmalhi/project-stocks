const getByIndex = function(object: any, index: number) {
  return object[Object.keys(object)[index]];
};

export default getByIndex;