import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizeControl";

const Question = () => {
  const dispatch = useAppDispatch();
  const { question, currentIndexForQuiz, userAnswer } = useAppSelector(
    (select) => select.quiz
  );
  const currentQuestedData = question[currentIndexForQuiz];
  const currentAnswer = userAnswer[currentIndexForQuiz];
  const handelSelectAnswer = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentIndexForQuiz, answer }));
  };

  return (
    <div className="mx-auto">
      <Card className={cn("w-[380px] mx-auto")}>
        <CardHeader>
          <CardTitle>{currentQuestedData.question}</CardTitle>
          <CardDescription>
            {" "}
            <span className="mr-1">Question</span>
            {currentIndexForQuiz + 1} of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          {currentQuestedData.options.map((questedOption, index) => (
            <Button
              key={index}
              onClick={() => handelSelectAnswer(questedOption)}
              className="w-full mt-4"
              variant={questedOption === currentAnswer ? "default" : "outline"}
            >
              {questedOption}
            </Button>
          ))}
        </CardContent>
        <QuizControl></QuizControl>
      </Card>
    </div>
  );
};

export default Question;
