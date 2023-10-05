import SignInButton from "@/components/SignInButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to QuizifyGPT</h1>
      <p className="text-lg mb-8">A platform for generating quizzes using AI.</p>
      <SignInButton text={"Start Quizzing Yourself"} />
      <div className="bg-gray-100 dark:bg-gray-800 py-8 px-4 mt-8 rounded-lg shadow-lg w-full max-w-md text-gray-900 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
        <ol className="space-y-6">
          <li className="flex mb-4 animate__animated animate__fadeIn animate__delay-1s">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 dark:bg-blue-900 rounded-full text-white text-2xl font-semibold flex items-center justify-center">
              1
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Enter a Topic</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Begin by entering the topic for your quiz. Our AI will create questions based on your topic.
              </p>
            </div>
          </li>
          <li className="flex mb-4 animate__animated animate__fadeIn animate__delay-2s">
            <div className="flex-shrink-0 w-12 h-12 bg-green-500 dark:bg-green-900 rounded-full text-white text-2xl font-semibold flex items-center justify-center">
              2
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Choose Question Type</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Select the type of questions you want for your quiz, such as multiple-choice or true/false.
              </p>
            </div>
          </li>
          <li className="flex mb-4 animate__animated animate__fadeIn animate__delay-3s">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 dark:bg-yellow-900 rounded-full text-white text-2xl font-semibold flex items-center justify-center">
              3
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Generate the Quiz</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Click the Generate Quiz button, and our AI will create a quiz tailored to your preferences.
              </p>
            </div>
          </li>
          <li className="flex animate__animated animate__fadeIn animate__delay-4s">
            <div className="flex-shrink-0 w-12 h-12 bg-red-500 dark:bg-red-900 rounded-full text-white text-2xl font-semibold flex items-center justify-center">
              4
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Start Quizzing Yourself</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Once your quiz is ready, you can start quizzing yourself and test your knowledge!
              </p>
            </div>
          </li>
        </ol>
      </div>


    </div>
  )
}
