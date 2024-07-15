"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import { LoaderCircleIcon } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [inputs, setInputs] = useState({
    jobPosition: "",
    jobDescription: "",
    jobExperience: "",
  });
  const [loading, setLoading] = useState(false);
  const [JsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(inputs);

    try {
      const inputPrompt =
        "Job Position: " +
        inputs.jobPosition +
        ", Job Description: " +
        inputs.jobDescription +
        ", Years of Experience: " +
        inputs.jobExperience +
        ", Depends on this information please give me " +
        process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
        " Interview question with Answered in JSON Format, Give Question and Answered as field in JSON,dont give extra notes";

      const result = await chatSession.sendMessage(inputPrompt);

      const MockJsonResp = result.response
        .text()
        .replace("```json", "")
        .replace("```", "");

      if (!MockJsonResp) throw new Error("MockJsonResp not getted");

      console.log(JSON.parse(MockJsonResp));

      setJsonResponse(MockJsonResp);

      const res = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: inputs.jobPosition,
          jobDescription: inputs.jobDescription,
          jobExperience: inputs.jobExperience,
          createdBy: user.primaryEmailAddress.emailAddress,
          createdAt: moment().format("DD--MM--yyyy"),
        })
        .returning({ mockId: MockInterview.mockId });

      console.log("Inserted Id:", res);
      setInputs({
        jobPosition: "",
        jobDescription: "",
        jobExperience: "",
      });
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
      setOpenDialog(!openDialog);
      router.push(`/dashboard/interview/${res}`);
    }
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(!openDialog)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add Details about your job position/role, Job description
                    and years of experience
                  </h2>

                  <div className="mt-7 my-3">
                    <label>Job Role/Job Position</label>
                    <Input
                      placeholder="Ex. Full Stack Developer"
                      value={inputs.jobPosition}
                      onChange={(e) =>
                        setInputs({ ...inputs, jobPosition: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className=" my-3">
                    <label>Job Description/Tech Stack</label>
                    <Textarea
                      placeholder="Ex. Next Js, React, Node Js, etc..."
                      value={inputs.jobDescription}
                      onChange={(e) =>
                        setInputs({ ...inputs, jobDescription: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label>Years of experience</label>
                    <Input
                      placeholder="Ex. 2"
                      type="number"
                      min="0"
                      max="20"
                      value={inputs.jobExperience}
                      onChange={(e) =>
                        setInputs({ ...inputs, jobExperience: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <Button
                    variant="ghost"
                    onClick={() => setOpenDialog(!openDialog)}
                    type="button"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        {" "}
                        <LoaderCircleIcon className="animate-spin" /> Generating
                        Questions{" "}
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
