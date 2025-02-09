import { useState } from 'react';

export interface CatState {
  avatarUrl: string;
  action: string;
  greeting: string;
}

export const useCatState = () => {
  const [catState] = useState<CatState>({
    avatarUrl: '../public/lucy2.0.jpg', // 这里放置猫咪的静态图像路径
    action: 'Purring',
    greeting: 'Meow!',
  });

  //const addChat = (message: string) => {
    // 根据对话内容调整猫咪的状态
    //const newCatState = { ...catState, greeting: 'Purring' }; // 这里只是一个示例
    //setCatState(newCatState);
  //};

  return { catState};
  //return { catState, addChat };

};
