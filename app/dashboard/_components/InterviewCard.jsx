"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function InterviewCard({ l }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    router.push(`/dashboard/interview/${l?.mockId}`);
    setLoading(false);
  };

  const feedback = () => {
    setLoading(true);
    router.push(`/dashboard/interview/${l?.mockId}/feedback`);
    setLoading(false);
  };

  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-darkOrange">{l?.jobPosition}</h2>
      <h2 className="text-sm text-gray-600">
        {l?.jobExperience} Years of Experience
      </h2>
      <h2 className="text-xs text-gray-500">Created At: {l?.createdAt}</h2>

      <div className="flex justify-between mt-2 gap-5">
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={feedback}
          disabled={loading}
        >
          Feedback
        </Button>
        <Button disabled={loading} size="sm" className="w-full" onClick={start}>
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewCard;
