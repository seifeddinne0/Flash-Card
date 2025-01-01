import Link from "next/link";
function GoToQuizButton() {
  return (
    <Link href="pages/quiz/quiz.js">
      <button className="text-center mt-2 inline-block text-white rounded bg-indigo-600 px-6 pb-2 pt-2.5 text-xs font-semibold uppercase leading-normal">Take the Quiz</button>
    </Link>
  );
}
export default GoToQuizButton;