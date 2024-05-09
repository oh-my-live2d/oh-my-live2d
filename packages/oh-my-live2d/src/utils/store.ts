export const setStatus = (status: 'sleep' | 'active') => {
  localStorage.setItem('OML2D_STATUS', status);
};

export const getStatus = (): 'sleep' | 'active' | null => {
  const status = localStorage.getItem('OML2D_STATUS') as 'sleep' | 'active' | null;

  return status;
};

export const setModelIndex = (index: number) => {
  localStorage.setItem('OML2D_MODEL_INDEX', index.toString());
};
export const getModelIndex = () => {
  return Number(localStorage.getItem('OML2D_MODEL_INDEX'));
};

export const setModelClothesIndex = (index: number) => {
  localStorage.setItem('OML2D_MODEL_CLOTHES_INDEX', index.toString());
};
export const getModelClothesIndex = () => {
  return Number(localStorage.getItem('OML2D_MODEL_CLOTHES_INDEX'));
};
