import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";

const QuizSummery = () => {
  const { userAnswer, question } = useAppSelector((state) => state.quiz);
  const isCorrectAnswer = question.reduce((count, qus, index) => {
    console.log(index, userAnswer);
    return qus.correctAnswer === userAnswer[index] ? count + 1 : count;
  }, 0);

  const currentParsentense = parseFloat(
    ((isCorrectAnswer / question.length) * 100).toFixed(2)
  );

  console.log(currentParsentense);

  return (
    <div>
      <div className="mx-auto">
        <Card className={cn("w-[380px] mx-auto")}>
          <CardHeader>
            <CardTitle>
              You got {isCorrectAnswer} out of
              <span className="ml-1"> {question.length}</span>
            </CardTitle>
            <CardDescription>
              {/* progressbar */}
              <div className="mt-5">
                <Progress
                  className="bg-yellow-600 "
                  value={currentParsentense}
                />
              </div>
              <div className="mx-auto pt-5">
                <Button className="bg-green-500">Thank you </Button>
              </div>
              {/* <span className="mr-1">Question</span> */}
              {/* {currentIndexForQuiz + 1} of {question.length} */}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default QuizSummery;
