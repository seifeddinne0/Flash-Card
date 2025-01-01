import Link from "next/link";
function GoToQuizButton() {
  return (
    <Link href="#">
      <button type="button"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        let&apos;s start
      </button>    
    </Link>
  );
}
export default GoToQuizButton;