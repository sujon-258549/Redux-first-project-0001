import { Button } from "@/components/ui/button";
import { nextQuestion, prevQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";
// import { CardFooter } from "@/components/ui/card";

const QuizControl = () => {
  const dispatch = useAppDispatch();
  const handelPrevious = () => {
    dispatch(prevQuestion());
  };
  const handledNext = () => {
    dispatch(nextQuestion());
  };
  return (
    // <CardFooter>
    <div className="flex justify-between px-6 pb-5">
      <Button onClick={handelPrevious} className="">
        Pre
      </Button>
      <Button onClick={handledNext} className="">
        Next
      </Button>
    </div>
    // </CardFooter>
  );
};

export default QuizControl;
