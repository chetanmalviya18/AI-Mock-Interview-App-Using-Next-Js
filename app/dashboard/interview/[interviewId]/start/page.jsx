"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import Questions from "./_components/Questions";
import RecordAnswer from "./_components/RecordAnswer";

function StratInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchInterviewData = async () => {
      await GetInterviewDetails();
    };
    fetchInterviewData();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);

    // console.log(jsonMockResp);

    setMockInterviewQuestion(jsonMockResp);

    setInterviewData(result[0]);
  };

  // console.log(interviewData);
  // console.log(mockInterviewQuestion);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/*Questions*/}
        <Questions
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestion={mockInterviewQuestion}
        />

        {/*Video/ Audio Recording*/}
        <RecordAnswer />
      </div>
    </div>
  );
}

export default StratInterview;
