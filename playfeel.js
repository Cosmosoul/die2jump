/* =====================================================
   拼死跳跃 · 手感文件  playfeel.js
   -----------------------------------------------------
   游戏启动时自动读取本文件，作为全部关卡的默认手感。
   若某个关卡（lvN.js）内自带 feel 字段，则以关卡自带为准。
   参数含义与编辑器「手感」面板完全一致。
   ===================================================== */
window.DTJ_FEEL = {
  maxWalkSpeed: 1.6,
  groundAccel: 0.7,
  airAccel: 0.55,
  stopFriction: 0.80,
  jumpMinHeight: 10,
  jumpMaxHeight: 34,
  jumpMaxHoldTime: 0.5,
  gravity: 0.42,
  maxFallSpeed: 7.5,
  coyoteTime: 0.10,
  jumpBufferTime: 0.12,
  edgeSnapDist: 6
};
