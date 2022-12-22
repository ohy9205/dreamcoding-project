import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center">
      <img
        src={photoURL}
        alt={displayName}
        className="w-10 h-10 rounded-full"
      />
      <span className="ml-2 hidden md:block">{displayName}</span>
      {/* 이름은 일반적으로 숨격져있다가 medium-size부터는 이름도 나타남 */}
    </div>
  );
}
