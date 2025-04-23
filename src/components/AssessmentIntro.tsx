
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function AssessmentIntro() {
  const navigate = useNavigate();
  
  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg fade-in">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-blue-700">Personality and Emotional Assessment</CardTitle>
        <CardDescription className="text-lg mt-4">
          Discover insights about your personality traits, emotional intelligence, and decision-making style.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-blue-500">What You'll Discover</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your unique self-perception and emotional awareness</li>
            <li>Your approach to decision-making and problem-solving</li>
            <li>Your core values and what matters most to you</li>
            <li>How you respond to challenges and emotional triggers</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-blue-500">How It Works</h3>
          <p>This assessment consists of 10 multiple-choice questions. For each question, select the option that most accurately reflects your typical thoughts, feelings, or behaviors.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-blue-500">Tips for Best Results</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Answer honestly - there are no right or wrong answers</li>
            <li>Go with your first instinct rather than overthinking</li>
            <li>Consider how you actually behave, not how you wish you would behave</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-8">
        <Button 
          onClick={() => navigate("/assessment")} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full text-lg"
        >
          Start Assessment
        </Button>
      </CardFooter>
    </Card>
  );
}
