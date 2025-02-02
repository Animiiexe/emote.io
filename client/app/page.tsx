"use client";

import { HeroUIProvider } from "@heroui/react";
import Emote from "@/components/Emotes"

export default function Home() {
  return (
    <div>
      <HeroUIProvider>
        <Emote />
      </HeroUIProvider>
    </div>
  );
}