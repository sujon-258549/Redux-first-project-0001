import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";

const QuizSummery = () => {
  const { userAnswer, question } = useAppSelector((state) => state.quiz);
  const isCorrectAnswer = question.reduce((count, qus, index) => {
    console.log(index, userAnswer);
    return qus.correctAnswer === userAnswer[index] ? count + 1 : count;
  }, 0);

  console.log(isCorrectAnswer);

  return (
    <div>
      <div className="mx-auto">
        <Card className={cn("w-[380px] mx-auto")}>
          <CardHeader>
            <CardTitle>
              You got {isCorrectAnswer} out of
              {question.length}
            </CardTitle>
            <CardDescription>
              {" "}
              <span className="mr-1">Question</span>
              {/* {currentIndexForQuiz + 1} of {question.length} */}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default QuizSummery;
