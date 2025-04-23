
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AssessmentResult, getResultCategory, getResultDescription } from "@/data/questions";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Download, FileText, Printer, UserRound } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
  
  // Fix: The maximum score for each category is 250 (10 questions x 5 points max x 5 options)
  const maxScorePerCategory = 250;

  const getCategoryColor = (score: number) => {
    const percentage = (score / maxScorePerCategory) * 100;
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-blue-500";
    if (percentage >= 40) return "bg-yellow-500";
    if (percentage >= 20) return "bg-orange-500";
    return "bg-red-500";
  };

  const totalScore =
    results.selfAwareness + results.emotionalRegulation + results.decisionMaking + results.values;
  const maxScore = maxScorePerCategory * 4; // 4 categories total
  const averagePercent = (totalScore / maxScore) * 100;

  // Enhanced recruitment recommendation with more detailed criteria
  let recruitmentRecommendation = "";
  let recruitmentClass = "";
  if (averagePercent >= 80) {
    recruitmentRecommendation = "Strongly Recommend for Recruitment";
    recruitmentClass = "text-green-600 font-bold";
  } else if (averagePercent >= 65) {
    recruitmentRecommendation = "Recommend for Recruitment";
    recruitmentClass = "text-blue-600 font-bold";
  } else if (averagePercent >= 50) {
    recruitmentRecommendation = "Consider with Caution";
    recruitmentClass = "text-yellow-600 font-bold";
  } else {
    recruitmentRecommendation = "Not Recommended for Recruitment";
    recruitmentClass = "text-red-600 font-bold";
  }

  // Generate personality type description based on highest scoring categories
  const topCategories = [...categories].sort((a, b) => b.score - a.score);
  const primaryTraits = topCategories.slice(0, 2).map(c => c.name);
  
  // Company-focused strengths and weaknesses
  const getStrengths = () => {
    const strengths = [];
    if (results.selfAwareness / maxScorePerCategory > 0.6) 
      strengths.push("Self-reflection and personal growth");
    if (results.emotionalRegulation / maxScorePerCategory > 0.6) 
      strengths.push("Emotional stability and resilience");
    if (results.decisionMaking / maxScorePerCategory > 0.6) 
      strengths.push("Logical analysis and thoughtful decision making");
    if (results.values / maxScorePerCategory > 0.6) 
      strengths.push("Strong value alignment and ethical conduct");
    
    return strengths.length > 0 ? strengths : ["Further development needed across all assessment areas"];
  };
  
  const getChallenges = () => {
    const challenges = [];
    if (results.selfAwareness / maxScorePerCategory < 0.4) 
      challenges.push("Self-awareness and personal insight");
    if (results.emotionalRegulation / maxScorePerCategory < 0.4) 
      challenges.push("Emotional management in high-pressure situations");
    if (results.decisionMaking / maxScorePerCategory < 0.4) 
      challenges.push("Decision-making processes and analysis");
    if (results.values / maxScorePerCategory < 0.4) 
      challenges.push("Value alignment with organizational culture");
    
    return challenges.length > 0 ? challenges : ["No significant challenges identified"];
  };

  // Company-specific recommendations
  const getTeamFit = () => {
    if (results.emotionalRegulation / maxScorePerCategory > 0.6 && results.decisionMaking / maxScorePerCategory > 0.6) {
      return "Well-suited for leadership roles requiring emotional stability and sound judgment";
    } else if (results.selfAwareness / maxScorePerCategory > 0.6 && results.values / maxScorePerCategory > 0.6) {
      return "Excellent fit for collaborative teams that value integrity and personal growth";
    } else if (results.decisionMaking / maxScorePerCategory > 0.6) {
      return "May excel in analytical roles requiring strong decision-making abilities";
    } else if (results.emotionalRegulation / maxScorePerCategory > 0.6) {
      return "Suitable for high-pressure environments requiring emotional stability";
    }
    return "Best suited for structured roles with clear guidance and support";
  };

  return (
    <div className="max-w-4xl mx-auto fade-in">
      <Card className="bg-white shadow-lg mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-700">Personality Assessment Report</CardTitle>
          <CardDescription className="text-lg">
            Comprehensive evaluation for recruitment and team placement
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Executive Summary Card */}
          <Card className="mb-8 shadow-sm border-blue-500 border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-blue-600 flex items-center">
                <UserRound className="mr-2 h-6 w-6" /> Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`text-xl ${recruitmentClass}`}>{recruitmentRecommendation}</span>
                <span className="ml-2 text-gray-600">
                  (Overall Score: {Math.round(averagePercent)}%)
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Primary Personality Traits</h4>
                  <p>{primaryTraits.join(" and ")}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700">Team Fit Assessment</h4>
                  <p>{getTeamFit()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Scores */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Assessment Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => {
                const percentage = (category.score / maxScorePerCategory) * 100;
                const categoryLevel = getResultCategory(category.score);
                
                return (
                  <Card key={category.key} className="shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-blue-600">{category.name}</CardTitle>
                      <CardDescription className="font-semibold">{categoryLevel}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">{category.score}/{maxScorePerCategory}</span>
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
          </div>
          
          {/* Company-Focused Analysis */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600 flex items-center">
                <FileText className="mr-2 h-5 w-5" /> Professional Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">Key Strengths</h4>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  {getStrengths().map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-gray-700">Development Areas</h4>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  {getChallenges().map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-gray-700">Working Style</h4>
                <p className="mt-2">
                  {results.selfAwareness > results.emotionalRegulation 
                    ? "Tends to be reflective and introspective, benefiting from opportunities for independent work and thoughtful analysis." 
                    : "Adapts well to dynamic environments and team settings, with a natural ability to navigate interpersonal dynamics."}
                  {results.decisionMaking > results.values 
                    ? " Approaches problems analytically, with a focus on practical outcomes and efficiency." 
                    : " Prioritizes alignment with core values and principles when making decisions or engaging with team objectives."}
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Management Recommendations */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Management Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                {results.selfAwareness < maxScorePerCategory * 0.5 && (
                  <li>Provide regular feedback opportunities and encourage self-reflection practices.</li>
                )}
                {results.emotionalRegulation < maxScorePerCategory * 0.5 && (
                  <li>Consider mentoring in stress management and emotional intelligence development.</li>
                )}
                {results.decisionMaking < maxScorePerCategory * 0.5 && (
                  <li>Implement structured decision frameworks and provide guidance for complex decisions.</li>
                )}
                {results.values < maxScorePerCategory * 0.5 && (
                  <li>Ensure clear communication of organizational values and expectations.</li>
                )}
                <li>
                  {averagePercent >= 70 
                    ? "Consider for roles with increased responsibility and autonomy." 
                    : "Provide structured onboarding and regular check-ins during initial employment period."}
                </li>
                <li>
                  {primaryTraits[0] === "Decision Making" 
                    ? "Engage with challenging projects that require critical thinking and analysis." 
                    : primaryTraits[0] === "Emotional Regulation" 
                      ? "May excel in client-facing or high-pressure roles that require emotional stability." 
                      : "Benefit from roles that allow for personal growth and alignment with core values."}
                </li>
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
            <Printer className="mr-2 h-4 w-4" />
            Print Report
          </Button>
          <Button 
            onClick={() => window.print()}
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-50"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
