
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions, Question, AssessmentResult } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; optionId: string }[]>([]);
  
  const currentQuestion: Question = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleAnswer = (optionId: string) => {
    const newAnswers = [
      ...answers,
      { questionId: currentQuestion.id, optionId }
    ];
    
    setAnswers(newAnswers);
    
    if (isLastQuestion) {
      // Calculate results and navigate to results page
      const results = calculateResults(newAnswers);
      navigate("/results", { state: { results } });
    } else {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const calculateResults = (userAnswers: { questionId: number; optionId: string }[]): AssessmentResult => {
    const initialResults: AssessmentResult = {
      selfAwareness: 0,
      emotionalRegulation: 0,
      decisionMaking: 0,
      values: 0
    };
    
    return userAnswers.reduce((results, answer) => {
      const question = questions.find(q => q.id === answer.questionId);
      if (!question) return results;
      
      const selectedOption = question.options.find(o => o.id === answer.optionId);
      if (!selectedOption) return results;
      
      return {
        selfAwareness: results.selfAwareness + selectedOption.score.selfAwareness,
        emotionalRegulation: results.emotionalRegulation + selectedOption.score.emotionalRegulation,
        decisionMaking: results.decisionMaking + selectedOption.score.decisionMaking,
        values: results.values + selectedOption.score.values
      };
    }, initialResults);
  };
  
  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
        <QuestionCard 
          question={currentQuestion} 
          onAnswer={handleAnswer}
          isLast={isLastQuestion}
        />
      </div>
    </div>
  );
};

export default Assessment;
