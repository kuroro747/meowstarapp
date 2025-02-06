import React from "react";
import { CatState } from "./useCatState";

interface CatAvatarProps {
  catState: CatState;
}

const CatAvatar: React.FC<CatAvatarProps> = ({ catState }) => {
  return (
    <div className="cat-avatar">
      {/* 根据catState的动作展示不同的猫咪动画 */}
      <img src={catState.avatarUrl} alt="Virtual Cat" />
      <div>{catState.action}</div>
    </div>
  );
};

export default CatAvatar;
