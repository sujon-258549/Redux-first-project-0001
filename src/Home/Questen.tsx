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
import QuizeControl from "./QuizeControl";

const Questen = () => {
  const dispatch = useAppDispatch();
  const { question, currentIndexForQuize } = useAppSelector(
    (select) => select.quiz
  );
  const currentQiestenData = question[currentIndexForQuize];

  const handelSelectAnswer = (answer: string) => {
    dispatch(setAnswer({ qustionIndex: currentIndexForQuize, answer }));
  };

  return (
    <div className="mx-auto">
      <h1 className="text-2xl mb-5 md:mb-10 md:text-4xl lg:text-6xl text-center font-bold ">
        Qwiz App ln Banglades
      </h1>
      <Card className={cn("w-[380px] mx-auto")}>
        <CardHeader>
          <CardTitle>{currentQiestenData.question}</CardTitle>
          <CardDescription>
            {" "}
            <span className="mr-1">Question</span>
            {currentIndexForQuize + 1} of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          {currentQiestenData.options.map((questenOption, index) => (
            <Button
              key={index}
              onClick={() => handelSelectAnswer(questenOption)}
              className="w-full mt-4"
            >
              {questenOption}
            </Button>
          ))}
        </CardContent>
        <QuizeControl></QuizeControl>
      </Card>
    </div>
  );
};

export default Questen;
