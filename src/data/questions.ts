
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
  // Custom written, meaningful questions 11–50
  {
    id: 11,
    text: "How do you typically manage stress at work or in your studies?",
    options: [
      { id: "a", text: "I create a plan and break tasks into manageable pieces", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 3, values: 3 } },
      { id: "b", text: "I often talk to friends or colleagues for advice", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 2, values: 4 } },
      { id: "c", text: "I ignore the stress and push through it", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 4, values: 2 } },
      { id: "d", text: "I struggle to manage stress and become overwhelmed", score: { selfAwareness: 2, emotionalRegulation: 1, decisionMaking: 1, values: 2 } }
    ]
  },
  {
    id: 12,
    text: "When you receive feedback from a supervisor or peer, you…",
    options: [
      { id: "a", text: "Reflect on it and try to improve", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 4, values: 3 } },
      { id: "b", text: "Feel defensive but consider the points raised", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 2 } },
      { id: "c", text: "Disregard it if you disagree", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 3 } },
      { id: "d", text: "Worry about your performance afterward", score: { selfAwareness: 4, emotionalRegulation: 2, decisionMaking: 1, values: 2 } }
    ]
  },
  {
    id: 13,
    text: "How do you react when plans unexpectedly change?",
    options: [
      { id: "a", text: "Stay calm and adapt as needed", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 3 } },
      { id: "b", text: "Feel anxious but try to adjust", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 } },
      { id: "c", text: "Get frustrated and find it hard to cope", score: { selfAwareness: 2, emotionalRegulation: 1, decisionMaking: 2, values: 2 } },
      { id: "d", text: "See it as an opportunity for new experiences", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } }
    ]
  },
  {
    id: 14,
    text: "When setting personal or professional goals, you:",
    options: [
      { id: "a", text: "Create concrete plans and timelines", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Set flexible targets and adapt as you go", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 4, values: 3 } },
      { id: "c", text: "Rarely set goals, taking things as they come", score: { selfAwareness: 2, emotionalRegulation: 3, decisionMaking: 3, values: 2 } },
      { id: "d", text: "Set unrealistic or vague goals", score: { selfAwareness: 1, emotionalRegulation: 2, decisionMaking: 2, values: 1 } }
    ]
  },
  {
    id: 15,
    text: "When you notice a conflict between your values and your actions, what do you do?",
    options: [
      { id: "a", text: "Reflect and make adjustments to align your actions", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 4, values: 5 } },
      { id: "b", text: "Feel guilty but don’t do much about it", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 3 } },
      { id: "c", text: "Adjust your values to fit your behavior", score: { selfAwareness: 2, emotionalRegulation: 3, decisionMaking: 3, values: 2 } },
      { id: "d", text: "Don’t notice or consider it much", score: { selfAwareness: 1, emotionalRegulation: 1, decisionMaking: 1, values: 1 } }
    ]
  },
  {
    id: 16,
    text: "How do you typically handle mistakes at work or in life?",
    options: [
      { id: "a", text: "Own up to them and seek to fix things", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Find someone to talk about it with", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 3, values: 3 } },
      { id: "c", text: "Ignore them and hope nobody notices", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Dwell on your mistakes and feel discouraged", score: { selfAwareness: 3, emotionalRegulation: 1, decisionMaking: 1, values: 2 } }
    ]
  },
  {
    id: 17,
    text: "What motivates you most in your work or daily life?",
    options: [
      { id: "a", text: "Personal growth and learning", score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 3, values: 5 } },
      { id: "b", text: "Financial or material rewards", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 4, values: 2 } },
      { id: "c", text: "Helping and supporting others", score: { selfAwareness: 3, emotionalRegulation: 4, decisionMaking: 3, values: 5 } },
      { id: "d", text: "Recognition and status", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 3 } }
    ]
  },
  {
    id: 18,
    text: "Which statement describes you best during conflicts?",
    options: [
      { id: "a", text: "I try to find common ground and resolve calmly", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 4 } },
      { id: "b", text: "I stand firm on my opinion", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 5, values: 3 } },
      { id: "c", text: "I avoid conflict whenever possible", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 3 } },
      { id: "d", text: "I compromise even if it means my needs don’t get met", score: { selfAwareness: 3, emotionalRegulation: 4, decisionMaking: 2, values: 4 } }
    ]
  },
  {
    id: 19,
    text: "When making decisions, you typically:",
    options: [
      { id: "a", text: "Gather information and consider options logically", score: { selfAwareness: 5, emotionalRegulation: 3, decisionMaking: 5, values: 3 } },
      { id: "b", text: "Go with your feelings and intuitions", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 3, values: 5 } },
      { id: "c", text: "Let others decide for you", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Struggle to make decisions and delay choices", score: { selfAwareness: 1, emotionalRegulation: 1, decisionMaking: 1, values: 1 } }
    ]
  },
  {
    id: 20,
    text: "How do you prioritize your time when responsibilities stack up?",
    options: [
      { id: "a", text: "Create a clear list and work on what's most important", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 3 } },
      { id: "b", text: "Work based on deadlines and urgency only", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 2 } },
      { id: "c", text: "Get distracted and have trouble focusing", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Delegate or ask for support", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 4 } }
    ]
  },
  {
    id: 21,
    text: "To what extent do your core values influence your daily decisions?",
    options: [
      { id: "a", text: "Always – they are my guide in everything", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 5 } },
      { id: "b", text: "Frequently – but not always consciously", score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 4, values: 4 } },
      { id: "c", text: "Only in major life decisions", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 } },
      { id: "d", text: "Rarely", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } }
    ]
  },
  {
    id: 22,
    text: "When feeling strong emotions, you usually:",
    options: [
      { id: "a", text: "Stay aware of your feelings and manage them accordingly", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 4, values: 3 } },
      { id: "b", text: "Express them openly as they come", score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 3, values: 4 } },
      { id: "c", text: "Bottle them up and don’t talk about them", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Try to distract yourself instead", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 3 } }
    ]
  },
  {
    id: 23,
    text: "What’s your approach when you need to learn a new skill?",
    options: [
      { id: "a", text: "Make a detailed plan and follow through", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Jump in and learn by doing", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 3 } },
      { id: "c", text: "Get help from others or take a course", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 } },
      { id: "d", text: "Procrastinate and put it off", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } }
    ]
  },
  {
    id: 24,
    text: "When collaborating on a team, what role best describes you?",
    options: [
      { id: "a", text: "Leader or facilitator", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Supporter who ensures goals are achieved", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 4 } },
      { id: "c", text: "Idea generator", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 4, values: 3 } },
      { id: "d", text: "Observer, usually quiet but willing to help", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 } }
    ]
  },
  {
    id: 25,
    text: "When life becomes unpredictable, you:",
    options: [
      { id: "a", text: "Adapt with a positive outlook", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 4 } },
      { id: "b", text: "Get frustrated but try to cope", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 } },
      { id: "c", text: "Struggle to cope and get anxious", score: { selfAwareness: 2, emotionalRegulation: 1, decisionMaking: 2, values: 2 } },
      { id: "d", text: "See opportunity and excitement in unknowns", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 5 } }
    ]
  },
  {
    id: 26,
    text: "How do you act if someone disagrees with your core beliefs?",
    options: [
      { id: "a", text: "Listen and try to understand their perspective", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 4, values: 5 } },
      { id: "b", text: "Defend your beliefs with evidence", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 4, values: 4 } },
      { id: "c", text: "Avoid the conversation", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Feel threatened and become upset", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 2 } }
    ]
  },
  {
    id: 27,
    text: "When things go wrong, you tend to:",
    options: [
      { id: "a", text: "Look for solutions and stay calm", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Fix blame before fixing the problem", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "c", text: "Seek emotional support", score: { selfAwareness: 3, emotionalRegulation: 4, decisionMaking: 3, values: 4 } },
      { id: "d", text: "Worry about what others will think", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 3, values: 2 } }
    ]
  },
  {
    id: 28,
    text: "How do you usually approach big decisions?",
    options: [
      { id: "a", text: "Gather all information and consider implications", score: { selfAwareness: 5, emotionalRegulation: 3, decisionMaking: 5, values: 3 } },
      { id: "b", text: "Go with what feels right in the moment", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 4 } },
      { id: "c", text: "Ask others to decide", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Delay the decision as long as possible", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 1, values: 2 } }
    ]
  },
  {
    id: 29,
    text: "How do you typically handle pressure situations?",
    options: [
      { id: "a", text: "Stay composed and rely on past experiences", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 4, values: 4 } },
      { id: "b", text: "Feel anxious but power through", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 } },
      { id: "c", text: "Lose focus and feel overwhelmed", score: { selfAwareness: 2, emotionalRegulation: 1, decisionMaking: 1, values: 2 } },
      { id: "d", text: "Look for someone to take over responsibilities", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 2 } }
    ]
  },
  {
    id: 30,
    text: "What is your default approach to workplace or classroom conflicts?",
    options: [
      { id: "a", text: "Try to mediate a solution", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Pick a side and argue strongly", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 3, values: 3 } },
      { id: "c", text: "Stay out of it completely", score: { selfAwareness: 2, emotionalRegulation: 3, decisionMaking: 2, values: 3 } },
      { id: "d", text: "Try to avoid confrontation no matter what", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 2, values: 2 } }
    ]
  },
  {
    id: 31,
    text: "Do you prefer to work independently or as part of a team?",
    options: [
      { id: "a", text: "I can confidently do both", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 4 } },
      { id: "b", text: "Prefer a team but can step up independently", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } },
      { id: "c", text: "Always independently", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 2 } },
      { id: "d", text: "Always as part of a team", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 4, values: 4 } }
    ]
  },
  {
    id: 32,
    text: "Your response to constructive criticism is to:",
    options: [
      { id: "a", text: "Embrace it and act on it", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 3 } },
      { id: "b", text: "Feel slighted but use it for self-improvement", score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 4, values: 2 } },
      { id: "c", text: "Ignore it if you disagree", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Become disheartened and lose confidence", score: { selfAwareness: 3, emotionalRegulation: 1, decisionMaking: 1, values: 1 } }
    ]
  },
  {
    id: 33,
    text: "How do you tend to react to stressful deadlines?",
    options: [
      { id: "a", text: "Prioritize tasks and work systematically", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Work non-stop and neglect self-care", score: { selfAwareness: 4, emotionalRegulation: 2, decisionMaking: 4, values: 2 } },
      { id: "c", text: "Feel paralyzed and procrastinate", score: { selfAwareness: 2, emotionalRegulation: 1, decisionMaking: 2, values: 1 } },
      { id: "d", text: "Ask for extension or assistance", score: { selfAwareness: 3, emotionalRegulation: 4, decisionMaking: 3, values: 3 } }
    ]
  },
  {
    id: 34,
    text: "Your typical approach to a disagreement is:",
    options: [
      { id: "a", text: "Look for compromise", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 4, values: 4 } },
      { id: "b", text: "Stand firm on your views", score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 4, values: 3 } },
      { id: "c", text: "Let others have their way to keep the peace", score: { selfAwareness: 2, emotionalRegulation: 3, decisionMaking: 3, values: 3 } },
      { id: "d", text: "Withdraw from the situation", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 2 } }
    ]
  },
  {
    id: 35,
    text: "How do you best describe your usual attitude towards setbacks?",
    options: [
      { id: "a", text: "Resilient and quick to recover", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 4, values: 4 } },
      { id: "b", text: "Need time but eventually recover", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 3, values: 3 } },
      { id: "c", text: "Dwell on failures and find it hard to move on", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Let setbacks affect my confidence for a long time", score: { selfAwareness: 2, emotionalRegulation: 1, decisionMaking: 1, values: 1 } }
    ]
  },
  {
    id: 36,
    text: "When working toward a tough goal, you are most likely to:",
    options: [
      { id: "a", text: "Persist and seek new strategies if needed", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Depend on others for ongoing motivation", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 4, values: 2 } },
      { id: "c", text: "Give up if progress is slow", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 1 } },
      { id: "d", text: "Take regular breaks and adjust expectations", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 4, values: 4 } }
    ]
  },
  {
    id: 37,
    text: "To what extent do you consider others’ feelings in your decisions?",
    options: [
      { id: "a", text: "Always consider them equally with my own", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 5, values: 5 } },
      { id: "b", text: "Sometimes, but not if it’s inconvenient", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 } },
      { id: "c", text: "Rarely", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Always put others first even at personal cost", score: { selfAwareness: 3, emotionalRegulation: 4, decisionMaking: 3, values: 4 } }
    ]
  },
  {
    id: 38,
    text: "You’re assigned a new project outside your comfort zone. You:",
    options: [
      { id: "a", text: "Embrace the challenge and learn all you can", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Feel nervous but move forward anyway", score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 4, values: 3 } },
      { id: "c", text: "Try to get reassigned or refuse", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 1 } },
      { id: "d", text: "Ask for help and support from others", score: { selfAwareness: 3, emotionalRegulation: 4, decisionMaking: 4, values: 4 } }
    ]
  },
  {
    id: 39,
    text: "When you see someone else in distress, you:",
    options: [
      { id: "a", text: "Offer help or ask if they want to talk", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 3, values: 5 } },
      { id: "b", text: "Notice but don’t intervene", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "c", text: "Don’t notice unless it’s obvious", score: { selfAwareness: 1, emotionalRegulation: 1, decisionMaking: 1, values: 1 } },
      { id: "d", text: "Wait for someone else to help", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 } }
    ]
  },
  {
    id: 40,
    text: "How do you approach feedback or evaluations at school or work?",
    options: [
      { id: "a", text: "Use feedback to improve future performance", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Feel defensive but try to take it in", score: { selfAwareness: 4, emotionalRegulation: 3, decisionMaking: 4, values: 3 } },
      { id: "c", text: "Ignore feedback that feels critical", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Become discouraged by criticism", score: { selfAwareness: 3, emotionalRegulation: 1, decisionMaking: 1, values: 1 } }
    ]
  },
  {
    id: 41,
    text: "When under stress, how do you generally respond?",
    options: [
      { id: "a", text: "Maintain perspective and problem-solve", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Talk to someone about it", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 4, values: 4 } },
      { id: "c", text: "Become self-critical and anxious", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 3, values: 2 } },
      { id: "d", text: "Withdraw socially and become quiet", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } }
    ]
  },
  {
    id: 42,
    text: "When asked to help with a group project, you usually:",
    options: [
      { id: "a", text: "Take initiative and lead tasks", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Help out as needed", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 5 } },
      { id: "c", text: "Do the bare minimum required", score: { selfAwareness: 2, emotionalRegulation: 3, decisionMaking: 3, values: 2 } },
      { id: "d", text: "Avoid participation if possible", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } }
    ]
  },
  {
    id: 43,
    text: "What matters most to you in a workplace environment?",
    options: [
      { id: "a", text: "Alignment with my values", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 4, values: 5 } },
      { id: "b", text: "Recognition and advancement", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 4, values: 3 } },
      { id: "c", text: "Financial stability", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 3, values: 2 } },
      { id: "d", text: "Friendly co-workers", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 4 } }
    ]
  },
  {
    id: 44,
    text: "When you notice someone struggling, you:",
    options: [
      { id: "a", text: "Offer a listening ear or support", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 3, values: 5 } },
      { id: "b", text: "Wait for them to ask for help", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 3 } },
      { id: "c", text: "Do nothing, as it’s not your place", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 1 } },
      { id: "d", text: "Try to intervene and offer solutions", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 4, values: 4 } }
    ]
  },
  {
    id: 45,
    text: "Your most common reaction to stress is to:",
    options: [
      { id: "a", text: "Focus on solutions and self-care", score: { selfAwareness: 4, emotionalRegulation: 5, decisionMaking: 4, values: 5 } },
      { id: "b", text: "Work harder and harder", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 4, values: 2 } },
      { id: "c", text: "Withdraw or feel overwhelmed", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Seek help from others", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } }
    ]
  },
  {
    id: 46,
    text: "How often do you proactively seek new experiences?",
    options: [
      { id: "a", text: "Regularly—I'm always looking for new challenges", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 5, values: 5 } },
      { id: "b", text: "Sometimes, when I feel comfortable to do so", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 4, values: 3 } },
      { id: "c", text: "Rarely, unless necessary", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Not at all—I like routine", score: { selfAwareness: 1, emotionalRegulation: 1, decisionMaking: 1, values: 1 } }
    ]
  },
  {
    id: 47,
    text: "When asked to do something you disagree with, you:",
    options: [
      { id: "a", text: "Assertively explain your position and values", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 4, values: 5 } },
      { id: "b", text: "Comply to avoid conflict", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 3, values: 2 } },
      { id: "c", text: "Negotiate a compromise", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 4, values: 4 } },
      { id: "d", text: "Refuse without explaining", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 2 } }
    ]
  },
  {
    id: 48,
    text: "When you look back on past decisions, you:",
    options: [
      { id: "a", text: "Reflect on both successes and mistakes for growth", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 5, values: 4 } },
      { id: "b", text: "Regret mistakes for a long time", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "c", text: "Feel proud no matter the outcome", score: { selfAwareness: 3, emotionalRegulation: 2, decisionMaking: 2, values: 3 } },
      { id: "d", text: "Prefer not to reflect—move forward instead", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 4, values: 3 } }
    ]
  },
  {
    id: 49,
    text: "What is your attitude toward feedback that contradicts your self-image?",
    options: [
      { id: "a", text: "Consider it carefully and look for growth", score: { selfAwareness: 5, emotionalRegulation: 4, decisionMaking: 4, values: 4 } },
      { id: "b", text: "Defend your self-image", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 3, values: 2 } },
      { id: "c", text: "Dismiss it", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } },
      { id: "d", text: "Feel upset and lose confidence", score: { selfAwareness: 2, emotionalRegulation: 1, decisionMaking: 1, values: 1 } }
    ]
  },
  {
    id: 50,
    text: "What drives your sense of purpose in life?",
    options: [
      { id: "a", text: "Being true to myself and my values", score: { selfAwareness: 5, emotionalRegulation: 5, decisionMaking: 5, values: 5 } },
      { id: "b", text: "Achieving traditional success (status, money, etc.)", score: { selfAwareness: 3, emotionalRegulation: 3, decisionMaking: 4, values: 3 } },
      { id: "c", text: "Helping others and making a difference", score: { selfAwareness: 4, emotionalRegulation: 4, decisionMaking: 4, values: 5 } },
      { id: "d", text: "Finding comfort, security and routine", score: { selfAwareness: 2, emotionalRegulation: 2, decisionMaking: 2, values: 2 } }
    ]
  }
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

