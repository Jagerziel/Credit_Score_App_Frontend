export const navItems = [
  {
    name: 'Home',
    navUrl: '/',
  },
  {
    name: 'Profile',
    navUrl: '/Profile',
  },
  {
    name: 'Test',
    navUrl: '/test',
  },
  {
    name: 'Dashboard',
    navUrl: '/Dashboard',
  },
];

export const userInputCategories = [
  {
    title: 'Age',
    description: {
      p1: 'Age plays a role in your credit score primarily through the length of your credit history, which assesses the age of your oldest and newest credit accounts. A longer credit history tends to positively influence your score, as it provides more data for credit scoring models to evaluate your financial behavior and payment habits over time.',
      p2: null,
    },
  },
  {
    title: '# of Dependents',
    description: {
      p1: "The number of dependents can indirectly impact creditworthiness by affecting an individual's overall financial stability and obligations, potentially influencing factors like debt-to-income ratio and spending patterns.",
      p2: null,
    },
  },
  {
    title: 'Monthly Income',
    description: {
      p1: "Monthly income is often considered in credit scoring models to assess an individual's ability to manage and repay debts. A higher monthly income can indicate greater financial capacity, influencing a person's creditworthiness by affecting debt repayment capabilities and credit utilization ratios.",
      p2: null,
    },
  },
  {
    title: 'Monthly Debt',
    description: {
      p1: "Monthly debt is a significant factor in credit scoring as it impacts an individual's credit utilization ratio, which measures the amount of credit being used compared to the monthly available credit. High monthly debt relative to available credit can suggest a higher risk of default, potentially leading to a lower credit score.",
      p2: null,
    },
  },
  {
    title: 'Total Accounts',
    description: {
      p1: 'Creditors want to know you can responsibly manage a mix of credit types.',
      p2: 'Your score considers the type of credit being used and reported such as installment loans and revolving accounts. Your total number of accounts may include both opened and closed accounts.',
    },
  },
  {
    title: 'Revolving Utilization',
    description: {
      p1: 'Revolving Utilization is one indicator of how much you owe on your accounts. The amount you owe lenders is one of the most important factors that impacts your credit.',
      p2: 'Your revolving utilization is determined by two main factors; your total balance owed on your revolving accounts and your total credit line.',
    },
  },
  {
    title: '# of Real Estate Loans',
    description: {
      p1: 'Number of Real Estate Loans or Lines provides insights into an individual’s financial situation and credit management. Real estate loans often have longer terms, successfully paying one off demonstrates a long-term commitment to your financial responsibilities and the capacity for higher credit lines.',
      p2: 'The number of real estate loans can also help lenders assess risk. Multiple loans or lines might suggest a higher level of financial leverage, which could potentially impact your ability to make payments on all your loans during economic downturns or unexpected financial challenges.',
    },
  },
  {
    title: '# of Times 30-59 Days Past Due',
    description: {
      p1: 'The number of times being 30-59 days late on payments affects your credit score by contributing to a negative payment history, indicating inconsistent financial responsibility. Multiple instances of such delinquencies can lead to a higher likelihood of default, resulting in a diminished credit score due to the increased risk perception by lenders and credit scoring models.',
      p2: null,
    },
  },
  {
    title: '# of Times 60-89 Days Past Due',
    description: {
      p1: 'The frequency of being 60-89 days late on payments influences your credit score by highlighting recurring payment issues and potential financial instability. Accumulating instances of this level of delinquency can significantly lower your credit score as it indicates a higher risk of default and challenges in meeting financial commitments.',
      p2: null,
    },
  },
  {
    title: '# of Times 90+ Days Past Due',
    description: {
      p1: 'The frequency of 90-day late payments is a crucial credit score factor as it reflects a person’s payment history reliability. This metric demonstrates the ability to fulfill financial obligations on time and serves as a strong indicator of responsible credit behaviors. A higher count of 90-day delinquencies signals increased risk of lenders and can significantly impact one’s overall credit worthiness.',
      p2: null,
    },
  },
];

export const scoreDetails = {
  logout: {
    title: "What your rating means to lenders",
    description: "Credit score ranges and what they mean will vary based on the score model used to calculate them, but they are generally similar to the following: 300-579 (Poor), 580-669 (Fair), 670-739 (Good), 740-799 (Very Good), and 800-850 (Excellent)."
  },
  Poor: {
    title: "What a Poor rating means to lenders",
    description: "Scores between 300-579 are generally considered Poor. With a score lenders consider to be risky, most lenders consider this a poor score."
  },
  Fair: {
    title: "What a Fair rating means to lenders",
    description: "Scores between 580-669 are generally considered Fair. With a score that aligns with the subprime score range, most lenders consider this a fair score."
  },
  Good: {
    title: "What a Good rating means to lenders",
    description: "Scores between 670-739 are generally considered Good. With a score near or slightly above the U.S. average, most lenders consider this a good score."
  },
  "Very Good": {
    title: "What a Very Good rating means to lenders",
    description: "Scores between 740-799 are generally considered Very Good. With a score that signifies most payments are made on time, most lenders consider this a very good score."
  },
  Excellent: {
    title: "What an Excellent rating means to lenders",
    description: "Scores between 800-850 are generally considered Excellent. With a score that less than 21% of the U.S. population has, most lenders consider this an Excellent score."
  }
}

export const scoringUpperBound = [
  [579, 'Poor'],
  [669, 'Fair'],
  [739, 'Good'],
  [799, 'Very Good'],
  [850, 'Excellent'],
];

export const scoreCard = {
  basepoints: [0, 741.0],
  RevolvingUtilizationOfUnsecuredLines: [
    0.5, 38.0, 1.0, -38.0, 1.5, -90.0, 1000000000, -90.0,
  ],
  age: [
    18.0, -69.0, 26.0, -15.0, 35.0, -15.0, 45.0, -9.0, 65.0, 2.0, 1000000000,
    28.0,
  ],
  'NumberOfTime30-59DaysPastDueNotWorse': [
    1.0, 16.0, 2.0, -27.0, 1000000000, -57.0,
  ],
  DebtRatio: [0.3125, 7.0, 0.625, -3.0, 2.5, -29.0, 1000000000, -29.0],
  MonthlyIncome: [0, 2.0, 5000.0, -3.0, 10000.0, 1.0, 1000000000, 5.0],
  NumberOfTimes90DaysLate: [
    1.0, 12.0, 1.5, -59.0, 5.0, -84.0, 10.0, -100.0, 1000000000, -100.0,
  ],
  NumberRealEstateLoansOrLines: [0.5, -10.0, 3.0, 10.0, 1000000000, 10.0],
  'NumberOfTime60-89DaysPastDueNotWorse': [
    1.0, 9.0, 2.0, -54.0, 1000000000, -82.0,
  ],
  NumberOfDependents: [0, 11.0, 2.0, 2.0, 20.0, -7.0, 1000000000, -66.0],
};
//

export const baseScore = 741;

export const scoreMapping = {
  item_0: 'age', // Age
  item_1: 'NumberOfDependents', // # of Dependents
  item_2: 'MonthlyIncome', // Total Income
  item_3: 'DEBT', // Total Debt
  item_4: 'PASS', // Total Accounts
  item_5: 'RevolvingUtilizationOfUnsecuredLines', // Revolving Utilization
  item_6: 'NumberRealEstateLoansOrLines', // # of Real Estate Loans
  item_7: 'NumberOfTime30-59DaysPastDueNotWorse', // # of Times 30-59 Days Past Due
  item_8: 'NumberOfTime60-89DaysPastDueNotWorse', // # of Times 60-89 Days Past Due
  item_9: 'NumberOfTimes90DaysLate', // # of Times 90+ Days Past Due
};

export const backendMapping = {
  item_0: 'DOB',
  item_1: 'NumberOfDependents',
  item_2: 'MonthlyIncome',
  item_3: 'MonthlyExpenses',
  item_4: 'Accounts',
  item_5: 'RevolvingUtilization',
  item_6: 'RealEstateLoans',
  item_7: 'ThirtyFiftyNinePastDue',
  item_8: 'SixtyEightyNinePastDue',
  item_9: 'NinetyDaysLate',
};
