const updateObjectInArray = (items, itemID, objPropName, newObjProps) => {
  return items.map((item) => {
    if (item[objPropName] === itemID) {
      return {...item, ...newObjProps};
    }
    return item;
  });
};

export {updateObjectInArray};