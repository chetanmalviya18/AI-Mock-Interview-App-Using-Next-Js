import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function Questions({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Sorry, your browser does not support text to speech functionality"
      );
    }
  };

  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((q, i) => (
              <>
                <h2
                  className={`p-2 border rounded-full text-xs md:text-sm text-center cursor-pointer ${
                    activeQuestionIndex === i && "bg-darkOrange text-white"
                  }`}
                >
                  Question {i + 1}
                </h2>
              </>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg font-bold mt-10">
          {mockInterviewQuestion[activeQuestionIndex]?.Question}
        </h2>
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
          }
        />

        <div className="border rounded-lg p-5 bg-blue-100 mt-16">
          <h2 className="flex gap-2 items-center text-darkBlue">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-small text-darkBlue my-2">
            Click on Record Answer when you want to answer the question. At the
            end of interview we will give you feedback along with correct answer
            for each of question and your answer to compare it.
          </h2>
        </div>
      </div>
    )
  );
}

export default Questions;
