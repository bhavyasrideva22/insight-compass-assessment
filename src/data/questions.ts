// Questions for the personality assessment
export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    score: {
      selfAwareness: number;
      emotionalRegulation: number;
      decisionMaking: number;
      values: number;
    };
  }[];
}

export interface AssessmentResult {
  selfAwareness: number;
  emotionalRegulation: number;
  decisionMaking: number;
  values: number;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "When faced with a difficult decision, I typically:",
    options: [
      {
        id: "a",
        text: "Make a pros and cons list to analyze options logically",
        score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 5, values: 2 }
      },
      {
        id: "b",
        text: "Go with what feels right based on my gut instinct",
        score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 4 }
      },
      {
        id: "c",
        text: "Seek advice from others before deciding",
        score: { selfAwareness: 2, emotionalRegulation: 4, decisionMaking: 3, values: 3 }
      },
      {
        id: "d",
        text: "Postpone the decision until I'm absolutely sure",
        score: { selfAwareness: 1, emotionalRegulation: 1, decisionMaking: 1, values: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "When I receive criticism, my first reaction is to:",
    options: [
      {
        id: "a",
        text: "Carefully consider if there's truth to it",
        score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 3, values: 3 }
      },
      {
        id: "b",
        text: "Defend myself and explain my actions",
        score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 3, values: 3 }
      },
      {
        id: "c",
        text: "Feel hurt but keep it to myself",
        score: { selfAwareness: 3, emotionalRegulation: 1, decisionMaking: 2, values: 2 }
      },
      {
        id: "d",
        text: "Ask for specific examples to better understand",
        score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 4, values: 3 }
      }
    ]
  },
  {
    id: 3,
    text: "In a group project, I prefer to:",
    options: [
      {
        id: "a",
        text: "Take the lead and organize everyone's tasks",
        score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 5, values: 2 }
      },
      {
        id: "b",
        text: "Focus on my assigned tasks and contribute quietly",
        score: { selfAwareness: 3, emotionalRegulation: 4, decisionMaking: 2, values: 3 }
      },
      {
        id: "c",
        text: "Ensure everyone's voice is heard and facilitate collaboration",
        score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 3, values: 5 }
      },
      {
        id: "d",
        text: "Adapt to whatever role is needed at the time",
        score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 4 }
      }
    ]
  },
  {
    id: 4,
    text: "When I'm feeling overwhelmed, I usually:",
    options: [
      {
        id: "a",
        text: "Break tasks down into smaller steps and tackle them one by one",
        score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 5, values: 3 }
      },
      {
        id: "b",
        text: "Take a break and engage in a relaxing activity",
        score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 2, values: 4 }
      },
      {
        id: "c",
        text: "Power through until everything is completed",
        score: { selfAwareness: 1, emotionalRegulation: 1, decisionMaking: 3, values: 2 }
      },
      {
        id: "d",
        text: "Talk to someone about how I'm feeling",
        score: { selfAwareness: 5, emotionalRegulation: 3, decisionMaking: 2, values: 5 }
      }
    ]
  },
  {
    id: 5,
    text: "When it comes to my career choices, the most important factor is:",
    options: [
      {
        id: "a",
        text: "Financial stability and security",
        score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 4, values: 2 }
      },
      {
        id: "b",
        text: "Doing work that aligns with my passions and values",
        score: { selfAwareness: 5, emotionalRegulation: 3, decisionMaking: 3, values: 5 }
      },
      {
        id: "c",
        text: "Work-life balance and personal wellbeing",
        score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 3, values: 4 }
      },
      {
        id: "d",
        text: "Opportunities for growth and advancement",
        score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 5, values: 3 }
      }
    ]
  },
  {
    id: 6,
    text: "When someone disagrees with me, I typically:",
    options: [
      {
        id: "a",
        text: "Listen carefully to understand their perspective",
        score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 4 }
      },
      {
        id: "b",
        text: "Try to convince them that my view is correct",
        score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 3, values: 2 }
      },
      {
        id: "c",
        text: "Consider whether there's merit to both perspectives",
        score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 3 }
      },
      {
        id: "d",
        text: "Feel uncomfortable and try to change the subject",
        score: { selfAwareness: 1, emotionalRegulation: 1, decisionMaking: 1, values: 2 }
      }
    ]
  },
  {
    id: 7,
    text: "When I make a mistake, I usually:",
    options: [
      {
        id: "a",
        text: "Take responsibility and learn from it",
        score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 4, values: 4 }
      },
      {
        id: "b",
        text: "Worry about how it makes me look to others",
        score: { selfAwareness: 2, emotionalRegulation: 1, decisionMaking: 2, values: 2 }
      },
      {
        id: "c",
        text: "Try to fix it quickly and move on",
        score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 }
      },
      {
        id: "d",
        text: "Analyze what went wrong in detail",
        score: { selfAwareness: 4, emotionalRegulation: 2, decisionMaking: 5, values: 3 }
      }
    ]
  },
  {
    id: 8,
    text: "I feel most fulfilled when I:",
    options: [
      {
        id: "a",
        text: "Achieve a difficult goal I set for myself",
        score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 4, values: 3 }
      },
      {
        id: "b",
        text: "Help others succeed or overcome challenges",
        score: { selfAwareness: 3, emotionalRegulation: 4, decisionMaking: 3, values: 5 }
      },
      {
        id: "c",
        text: "Learn something new or gain a new perspective",
        score: { selfAwareness: 5, emotionalRegulation: 3, decisionMaking: 4, values: 4 }
      },
      {
        id: "d",
        text: "Get recognition for my work and contributions",
        score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 3, values: 2 }
      }
    ]
  },
  {
    id: 9,
    text: "In a conflict situation, I tend to:",
    options: [
      {
        id: "a",
        text: "Seek compromise and middle ground",
        score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 3, values: 4 }
      },
      {
        id: "b",
        text: "Stand firm on my position if I believe I'm right",
        score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 4, values: 3 }
      },
      {
        id: "c",
        text: "Try to accommodate others' needs first",
        score: { selfAwareness: 2, emotionalRegulation: 3, decisionMaking: 2, values: 5 }
      },
      {
        id: "d",
        text: "Analyze the situation objectively before responding",
        score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 5, values: 3 }
      }
    ]
  },
  {
    id: 10,
    text: "When planning my future, I prioritize:",
    options: [
      {
        id: "a",
        text: "Stability and predictability",
        score: { selfAwareness: 3, emotionalRegulation: 4, decisionMaking: 3, values: 2 }
      },
      {
        id: "b",
        text: "Following my passions, even with uncertainty",
        score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 3, values: 5 }
      },
      {
        id: "c",
        text: "Balancing practical needs with personal fulfillment",
        score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 }
      },
      {
        id: "d",
        text: "Maximizing success and achievement",
        score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 4, values: 3 }
      }
    ]
  },
  // Add questions 11–50
  ...Array.from({ length: 40 }, (_, i) => {
    const id = i + 11;
    return {
      id,
      text: `Placeholder Question ${id}: How do you respond in common situation ${id}?`,
      options: [
        {
          id: "a",
          text: "I always remain calm and focused.",
          score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 4, values: 4 }
        },
        {
          id: "b",
          text: "I usually try to adapt and seek solutions.",
          score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 4, values: 3 }
        },
        {
          id: "c",
          text: "I get a bit stressed but manage okay.",
          score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 2 }
        },
        {
          id: "d",
          text: "I struggle and need support.",
          score: { selfAwareness: 2, emotionalRegulation: 1, decisionMaking: 2, values: 1 }
        }
      ]
    };
  })
];

// Helper functions for results interpretation
export const getResultCategory = (score: number): string => {
  if (score >= 40) return "Very High";
  if (score >= 30) return "High";
  if (score >= 20) return "Moderate";
  if (score >= 10) return "Low";
  return "Very Low";
};

export const getResultDescription = (category: string, trait: string): string => {
  const descriptions: { [key: string]: { [key: string]: string } } = {
    selfAwareness: {
      "Very High": "You have exceptional self-awareness, easily recognizing your emotions, strengths, weaknesses, and how these affect your actions and decisions.",
      "High": "You have good self-awareness, generally recognizing your emotions and understanding how they influence your behavior.",
      "Moderate": "You have moderate self-awareness, sometimes recognizing your emotions and their impact on your behavior.",
      "Low": "You may have difficulty recognizing your emotions and understanding how they affect your actions.",
      "Very Low": "You often struggle to identify your emotions and may be unaware of how your feelings influence your behavior."
    },
    emotionalRegulation: {
      "Very High": "You excel at managing your emotions, rarely becoming overwhelmed even in highly stressful situations.",
      "High": "You generally manage your emotions well, bouncing back relatively quickly from setbacks.",
      "Moderate": "You have moderate emotional regulation skills, sometimes managing stress effectively but occasionally becoming overwhelmed.",
      "Low": "You may struggle to regulate your emotions, especially during stressful situations.",
      "Very Low": "You often find it difficult to manage your emotions and may become easily overwhelmed by stress."
    },
    decisionMaking: {
      "Very High": "You make decisions deliberately and thoughtfully, weighing multiple factors and considering long-term consequences.",
      "High": "You make decisions effectively, generally considering important factors and potential outcomes.",
      "Moderate": "Your decision-making process is moderately effective, sometimes thorough but occasionally impulsive.",
      "Low": "You may make decisions quickly without fully weighing all factors or considering consequences.",
      "Very Low": "Your decision-making tends to be impulsive, often driven by immediate emotions rather than careful consideration."
    },
    values: {
      "Very High": "You have very clear personal values that strongly guide your actions and decisions across all areas of life.",
      "High": "You have well-defined personal values that generally guide your important decisions.",
      "Moderate": "You have some defined values that occasionally guide your decisions in important areas.",
      "Low": "Your personal values may not be clearly defined, or they may not consistently influence your decisions.",
      "Very Low": "You may be unclear about your core values or rarely consider them when making decisions."
    }
  };

  return descriptions[trait]?.[category] || "No description available.";
};
