
import { useLocation, Navigate } from "react-router-dom";
import { ResultsSummary } from "@/components/ResultsSummary";
import { AssessmentResult } from "@/data/questions";

const Results = () => {
  const location = useLocation();
  const results = location.state?.results as AssessmentResult;
  
  // If no results found, redirect to home
  if (!results) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <ResultsSummary results={results} />
    </div>
  );
};

export default Results;
