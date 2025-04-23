
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionId: string) => void;
  isLast: boolean;
}

export function QuestionCard({ question, onAnswer, isLast }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };
  
  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
      setSelectedOption(null);
    }
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg fade-in">
      <CardHeader className="text-center">
        <h2 className="text-xl font-semibold text-blue-700">{question.text}</h2>
      </CardHeader>
      <CardContent>
        <RadioGroup className="space-y-4">
          {question.options.map(option => (
            <div 
              key={option.id} 
              className={`flex items-center p-4 rounded-lg border-2 transition-all
                ${selectedOption === option.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300'}
              `}
              onClick={() => handleOptionSelect(option.id)}
            >
              <RadioGroupItem 
                value={option.id} 
                id={`option-${option.id}`} 
                checked={selectedOption === option.id}
                className="mr-3"
              />
              <Label 
                htmlFor={`option-${option.id}`} 
                className="flex-grow cursor-pointer text-base"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-center pb-6 pt-4">
        <Button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-2 rounded-full"
        >
          {isLast ? 'Complete Assessment' : 'Next Question'}
        </Button>
      </CardFooter>
    </Card>
  );
}
