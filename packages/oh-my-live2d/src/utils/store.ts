export const setStatus = (status: 'sleep' | 'active') => {
  localStorage.setItem('OML2D_STATUS', status);
};

export const getStatus = (): 'sleep' | 'active' | null => {
  const status = localStorage.getItem('OML2D_STATUS') as 'sleep' | 'active' | null;

  return status;
};
