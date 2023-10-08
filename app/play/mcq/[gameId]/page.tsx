import MCQ from "@/components/MCQ";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    gameId: string;
  };
};

/**
 * Renders the MCQ (Multiple Choice Questions) page with the provided game data.
 * 
 * @param {Object} props - The props object.
 * @param {Object} props.params - The params object.
 * @param {string} props.params.gameId - The ID of the game to be fetched from the database.
 * @returns {JSX.Element} The rendered MCQ component with the game data.
 */
const MCQPage = async ({ params: { gameId } }: Props) => {
  // Retrieve the authenticated session
  const session = await getAuthSession();
  // Check if the user is logged in
  if (!session?.user) {
    return redirect("/");
  }

  // Fetch the game data from the database based on the provided game ID
  const game = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      questions: {
        select: {
          id: true,
          question: true,
          options: true,
        },
      },
    },
  });

  // Check if the game exists and is not an open-ended game
  if (!game || game.gameType === "open_ended") {
    return redirect("/quiz");
  }

  // Render the MCQ component with the game data
  return <MCQ game={game} />;
};

export default MCQPage;
