export const getLocalData = <T>(key: string) => {
  const res = localStorage.getItem(key) as string;
  const data: T = JSON.parse(res);
  return data;
};

export const setLocalData = <T>(key: string, data: T | undefined) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalData = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalData = () => {
  localStorage.clear();
};
