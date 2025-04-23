
import { AssessmentIntro } from "@/components/AssessmentIntro";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-6">
        Personality Assessment
      </h1>
      <p className="text-xl text-center text-gray-600 max-w-2xl mb-12">
        Gain insights into your personality traits, emotional intelligence, and decision-making style.
      </p>
      <AssessmentIntro />
    </div>
  );
};

export default Index;
