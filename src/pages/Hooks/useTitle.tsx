import { useEffect } from 'react';

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return <>磨脚</>;
};
export default useTitle;
