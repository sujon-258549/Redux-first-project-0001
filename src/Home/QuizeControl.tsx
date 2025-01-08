import { Button } from "@/components/ui/button";
import { nextQuesten } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";
// import { CardFooter } from "@/components/ui/card";

const QuizeControl = () => {
  const dispatch = useAppDispatch();
  const handeldelprevuous = () => {
    dispatch(nextQuesten());
  };
  const handeldelNext = () => {
    dispatch(nextQuesten());
  };
  return (
    // <CardFooter>
    <div className="flex justify-between px-6 pb-5">
      <Button className="">Pre</Button>
      <Button onClick={handeldelNext} className="">
        Next
      </Button>
    </div>
    // </CardFooter>
  );
};

export default QuizeControl;
