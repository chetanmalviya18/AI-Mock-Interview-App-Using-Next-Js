"use client";

import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    const res = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(res);
    setFeedbackList(res);
  };

  return (
    <div className="p-10">
      {feedbackList.length == 0 ? (
        <>
          <h2 className="font-bold text-xl text-gray-500">
            No Interview Record Found
          </h2>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-darkOrange">
            Congratulation!
          </h2>
          <h2 className="font-bold text-2xl">
            Here is your interview feedback
          </h2>
{/*           <h2 className="text-darkBlue text-lg my-3`">
            Your overall interview rating: <strong>9/10</strong>
          </h2> */}

          <h2 className="text-sm text-gray-500">
            Find below interview question with answer, YOur answer and feedback
            for improvement
          </h2>
          {feedbackList &&
            feedbackList.map((f, i) => (
              <Collapsible key={i} className="mt-7">
                <CollapsibleTrigger className=" flex justify-between p-2 w-full gap-7 bg-secondary rounded-lg my-2 text-left">
                  {f.question} <ChevronsUpDownIcon className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating:</strong> {f.rating}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                      <strong>Your Answer:</strong> {f.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                      <strong>Correct Answer:</strong> {f.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-darkBlue">
                      <strong>Feedback:</strong> {f.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}

      <Button className="mt-7" onClick={() => router.replace("/dashboard")}>
        Go Home
      </Button>
    </div>
  );
}

export default Feedback;
