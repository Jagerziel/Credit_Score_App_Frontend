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
    title: "Date of Birth",
    description: {
      p1: "Your date of birth is used in credit scoring as part of identity verification to ensure accurate reporting and prevent fraud. It helps credit bureaus and lenders confirm an individual's identity and match credit information to the correct person, enhancing the accuracy and integrity of credit reports and scores",
      p2: null
    }
  },
  {
    title: "# of Dependents",
    description: {
      p1: "The number of dependents can indirectly impact creditworthiness by affecting an individual's overall financial stability and obligations, potentially influencing factors like debt-to-income ratio and spending patterns.",
      p2: null
    }
  },
  {
    title: "Total Income",
    description: {
      p1: "Total income is often considered in credit scoring models to assess an individual's ability to manage and repay debts. A higher total income can indicate greater financial capacity, influencing a person's creditworthiness by affecting debt repayment capabilities and credit utilization ratios.",
      p2: null
    }
  },
  {
    title: "Total Debt",
    description: {
      p1: "Total debt is a significant factor in credit scoring as it impacts an individual's credit utilization ratio, which measures the amount of credit being used compared to the total available credit. High total debt relative to available credit can suggest a higher risk of default, potentially leading to a lower credit score.",
      p2: null
    }
  },
  {
    title: "Total Accounts",
    description: {
      p1: "Creditors want to know you can responsibly manage a mix of credit types.",
      p2: "Your score considers the type of credit being used and reported such as installment loans and revolving accounts. Your total number of accounts may include both opened and closed accounts."
    }
  },
  {
    title: "Revolving Utilization",
    description: {
      p1: "Revolving Utilization is one indicator of how much you owe on your accounts. The amount you owe lenders is one of the most important factors that impacts your credit.",
      p2: "Your revolving utilization is determined by two main factors; your total balance owed on your revolving accounts and your total credit line."
    }
  },
  {
    title: "# of Real Estate Loans",
    description: {
      p1: "Number of Real Estate Loans or Lines provides insights into an individual’s financial situation and credit management. Real estate loans often have longer terms, successfully paying one off demonstrates a long-term commitment to your financial responsibilities and the capacity for higher credit lines.",
      p2: "The number of real estate loans can also help lenders assess risk. Multiple loans or lines might suggest a higher level of financial leverage, which could potentially impact your ability to make payments on all your loans during economic downturns or unexpected financial challenges."
    }
  },
  {
    title: "# of Times 30-59 Days Past Due",
    description: {
      p1: "The number of times being 30-59 days late on payments affects your credit score by contributing to a negative payment history, indicating inconsistent financial responsibility. Multiple instances of such delinquencies can lead to a higher likelihood of default, resulting in a diminished credit score due to the increased risk perception by lenders and credit scoring models.",
      p2: null
    }
  },
  {
    title: "# of Times 60-89 Days Past Due",
    description: {
      p1: "The frequency of being 60-89 days late on payments influences your credit score by highlighting recurring payment issues and potential financial instability. Accumulating instances of this level of delinquency can significantly lower your credit score as it indicates a higher risk of default and challenges in meeting financial commitments.",
      p2: null
    }
  },
  {
    title: "# of Times 90+ Days Past Due",
    description: {
      p1: "The frequency of 90-day late payments is a crucial credit score factor as it reflects a person’s payment history reliability. This metric demonstrates the ability to fulfill financial obligations on time and serves as a strong indicator of responsible credit behaviors. A higher count of 90-day delinquencies signals increased risk of lenders and can significantly impact one’s overall credit worthiness.",
      p2: null
    }
  }
]

export const scoringUpperBound = [
  [579, "Poor"],
  [669, "Fair"],
  [739, "Good"],
  [799, "Very Good"],
  [850, "Excellent"]
]