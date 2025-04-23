import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AssessmentResult, getResultCategory, getResultDescription } from "@/data/questions";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";

interface ResultsSummaryProps {
  results: AssessmentResult;
}

export function ResultsSummary({ results }: ResultsSummaryProps) {
  const navigate = useNavigate();

  const categories = [
    { name: "Self-Awareness", score: results.selfAwareness, key: "selfAwareness" },
    { name: "Emotional Regulation", score: results.emotionalRegulation, key: "emotionalRegulation" },
    { name: "Decision Making", score: results.decisionMaking, key: "decisionMaking" },
    { name: "Personal Values", score: results.values, key: "values" }
  ];

  const getCategoryColor = (score: number) => {
    if (score >= 200) return "bg-green-500";
    if (score >= 150) return "bg-blue-500";
    if (score >= 100) return "bg-yellow-500";
    if (score >= 50) return "bg-orange-500";
    return "bg-red-500";
  };

  const totalScore =
    results.selfAwareness + results.emotionalRegulation + results.decisionMaking + results.values;
  const maxScore = 50 * 4 * 5;
  const averagePercent = (totalScore / maxScore) * 100;

  let recruitmentRecommendation = "";
  if (averagePercent >= 80) {
    recruitmentRecommendation = "Strongly Recommend for Recruitment";
  } else if (averagePercent >= 65) {
    recruitmentRecommendation = "Recommend for Recruitment";
  } else if (averagePercent >= 50) {
    recruitmentRecommendation = "Consider with Caution";
  } else {
    recruitmentRecommendation = "Not Recommended for Recruitment";
  }

  return (
    <div className="max-w-4xl mx-auto fade-in">
      <Card className="bg-white shadow-lg mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-700">Your Personality Assessment Results</CardTitle>
          <CardDescription className="text-lg">
            Based on your responses, here's a summary of your personality profile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <Card className="mb-8 shadow-sm border-blue-500 border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Recruitment Recommendation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">{recruitmentRecommendation}</span>
                <span className="ml-2 text-gray-600">
                  (Overall: {Math.round(averagePercent)}%)
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                This recommendation is based on the total scores achieved across all assessment categories.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const percentage = (category.score / 50) * 100;
              const categoryLevel = getResultCategory(category.score);
              
              return (
                <Card key={category.key} className="shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-blue-600">{category.name}</CardTitle>
                    <CardDescription className="font-semibold">{categoryLevel}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium">{category.score}/50</span>
                      <span>{Math.round(percentage)}%</span>
                    </div>
                    <Progress value={percentage} className={`h-2 ${getCategoryColor(category.score)}`} />
                    <p className="text-sm mt-4">
                      {getResultDescription(categoryLevel, category.key)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Overall Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Your assessment results reveal a unique personality profile with particular strengths in 
                {categories.sort((a, b) => b.score - a.score).slice(0, 2).map((c, i, arr) => 
                  i === 0 ? ` ${c.name}` : i === arr.length - 1 ? ` and ${c.name}` : `, ${c.name}`
                )}.
              </p>
              <p>
                The combination of these traits suggests you likely thrive in environments that 
                {results.selfAwareness > 30 ? " value introspection and personal growth," : ""}
                {results.emotionalRegulation > 30 ? " require emotional stability and resilience," : ""}
                {results.decisionMaking > 30 ? " involve thoughtful decision-making and analysis," : ""}
                {results.values > 30 ? " align with your personal values and principles." : ""}
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Based on your results, here are some recommendations for personal development:</p>
              <ul className="list-disc pl-5 space-y-2">
                {results.selfAwareness < 30 && (
                  <li>Practice regular self-reflection through journaling or mindfulness meditation.</li>
                )}
                {results.emotionalRegulation < 30 && (
                  <li>Develop emotional regulation techniques such as deep breathing or stress management routines.</li>
                )}
                {results.decisionMaking < 30 && (
                  <li>Try structured decision-making frameworks when facing important choices.</li>
                )}
                {results.values < 30 && (
                  <li>Spend time clarifying your core values and how they align with your life choices.</li>
                )}
                <li>Leverage your strengths in {categories.sort((a, b) => b.score - a.score)[0].name} when approaching challenges.</li>
                <li>Consider seeking feedback from trusted colleagues or friends to enhance your self-awareness.</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4 pb-6">
          <Button 
            onClick={() => navigate("/")}
            variant="outline" 
            className="border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
          <Button 
            onClick={() => window.print()}
            className="bg-blue-500 hover:bg-blue-700 text-white"
          >
            Download Results
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
