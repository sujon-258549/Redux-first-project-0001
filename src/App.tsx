import Question from "./Home/Question";
import QuizSummery from "./Home/QuizSummery";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { isCompletedQuiz } = useAppSelector((state) => state.quiz);
  return (
    <>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <h1 className="text-2xl mb-5 md:mb-10 md:text-4xl lg:text-6xl text-center font-bold ">
          Quiz App ln Bangladesh
        </h1>
        {isCompletedQuiz ? <QuizSummery /> : <Question />}
      </div>
    </>
  );
}

export default App;
