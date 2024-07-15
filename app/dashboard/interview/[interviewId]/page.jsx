"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnable, setWebCamEnable] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]);
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col my-5 gap-5 ">
          <div className="flex flex-col my-5 gap-5  p-5 rounded-lg border">
            <h2 className="text-lg">
              <strong>Job Role/Job Position: </strong>
              {interviewData.jobPosition}
            </h2>

            <h2 className="text-lg">
              <strong>Job Description/Tech Stack: </strong>
              {interviewData.jobDescription}
            </h2>

            <h2 className="text-lg">
              <strong>Years of Experience: </strong>
              {interviewData.jobExperience} years
            </h2>
          </div>

          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-500">
              <Lightbulb />
              <strong>Infromation</strong>
            </h2>
            <h2 className="mt-3">
              Enable Video Web Cam and Microphone to Start your AI Generated
              Mock Interview, it has 8 questions which you can answer and the
              last you will get the report on the basis of your answer. <br />
              <strong>NOTE: </strong> We never record your video, web cam access
              you can disable at any time if you want.
            </h2>
          </div>
        </div>

        <div>
          {webCamEnable ? (
            <>
              <Webcam
                onUserMedia={() => setWebCamEnable(true)}
                onUserMediaError={() => setWebCamEnable(false)}
                mirrored={true}
                style={{
                  height: 300,
                  width: 300,
                }}
              />
              <Button
                className="w-full"
                variant="ghost"
                onClick={() => setWebCamEnable(false)}
              >
                Disabled Web Cam and Microphone{" "}
              </Button>
            </>
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
              <Button
                className="w-full"
                variant="ghost"
                onClick={() => setWebCamEnable(true)}
              >
                Enable Web Cam and Microphone{" "}
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end items-end">
        <Button>Start Interview</Button>
      </div>
    </div>
  );
}

export default Interview;
