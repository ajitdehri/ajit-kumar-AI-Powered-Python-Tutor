import { useState } from "react";
import AvatarSelector from "./AvatarSelector";

const Home = () => {
  const [avatar, setAvatar] = useState("🐼");

  return (
    <div className="text-center p-8 w-full h-6">
      <h1 className="text-4xl font-bold text-blue-600">AI Python Tutor</h1>
      <p className="mt-4 text-lg">Learn Python interactively!</p>
      <AvatarSelector onSelect={setAvatar} />
      <p className="mt-4 text-xl">Your Tutor: {avatar}</p>
    </div>
  );
};

export default Home;

