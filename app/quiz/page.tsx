import React from "react";

import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import CreateQuiz from "@/components/forms/CreateQuiz";

export const metadata = {
  title: "Quiz | QuizfyGPT",
  description: "Quiz yourself on anything!",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

const Quiz = async ({ searchParams }: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }
  return <CreateQuiz topic={searchParams.topic ?? ""} />;
};

export default Quiz;
