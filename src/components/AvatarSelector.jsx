import { useState } from "react";

const avatars = ["🐼", "🦊", "🐯", "🐸", "🐵"];

const AvatarSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState(avatars[0]);

  return (
    <div className="flex space-x-4 p-4">
      {avatars.map((avatar) => (
        <button
          key={avatar}
          className={`text-3xl p-2 rounded-lg ${selected === avatar ? "bg-blue-300" : "bg-gray-200"}`}
          onClick={() => {
            setSelected(avatar);
            onSelect(avatar);
          }}
        >
          {avatar}
        </button>
      ))}
    </div>
  );
};

export default AvatarSelector;
