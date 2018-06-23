export const addToCart = (item)=>{
  console.log("item is",item);
  return {
    type: 'add',
    item
  };
}
