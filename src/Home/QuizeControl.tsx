import { Button } from "@/components/ui/button";
import {
  completedQuiz,
  nextQuestion,
  prevQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { CardFooter } from "@/components/ui/card";

const QuizControl = () => {
  const { question, currentIndexForQuiz, userAnswer } = useAppSelector(
    (select) => select.quiz
  );
  const isExistNotSelectQuestion = userAnswer[currentIndexForQuiz] === null;
  const isCompletedQuiz =
    isExistNotSelectQuestion || currentIndexForQuiz !== question.length - 1;
  const dispatch = useAppDispatch();
  const handelPrevious = () => {
    dispatch(prevQuestion());
  };
  const handledNext = () => {
    dispatch(nextQuestion());
  };
  const handleQuizCompleted = () => {
    dispatch(completedQuiz());
  };
  return (
    // <CardFooter>
    <div className="flex justify-between px-6 pb-5">
      <Button
        disabled={currentIndexForQuiz === 0}
        onClick={handelPrevious}
        className=""
      >
        Pre
      </Button>
      {currentIndexForQuiz < question.length - 1 && (
        <Button
          disabled={isExistNotSelectQuestion}
          onClick={handledNext}
          className=""
        >
          Next
        </Button>
      )}
      {currentIndexForQuiz === question.length - 1 && (
        <Button
          disabled={isCompletedQuiz}
          onClick={handleQuizCompleted}
          className=""
        >
          Completed quiz
        </Button>
      )}
    </div>
    // </CardFooter>
  );
};

export default QuizControl;
