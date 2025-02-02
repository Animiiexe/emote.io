import { io } from "socket.io-client";

import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { useState } from "react";

const socket = io("https://stunning-space-waddle-w6j694w4p74c5rwr-8000.app.github.dev")

function Emote() {
  const [emoji, setEmoji] = useState("😏");

  return (
    <main className="min-h-screen flex items-center justify-center gap-4 flex-col">
      <h1 className="text-3xl capitalize font-bold">emote.io</h1>
      <Card className="text-8xl p-3">{emoji}</Card>
      <ShowEmotes setEmoji={setEmoji} />
    </main>
  );
}

function ShowEmotes({ setEmoji }) {
  const emojis = ["☠️", "🍕", "👌", "🍔", "🥷", "😎", "😴", "🤑"];

  const handleBtnClick = (emoji) => {
    setEmoji(emoji);
    
  };

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {emojis.map((emoji) => (
        <Button
          key={emoji}
          variant="flat"
          onPress={() => handleBtnClick(emoji)}
        >
          <p className="text-xl">{emoji}</p>
        </Button>
      ))}
    </div>
  );
}

export default Emote;