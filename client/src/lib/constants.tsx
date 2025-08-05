import { Database, Cloud, FileSpreadsheet, BarChart3, Leaf, DollarSign, Users, Factory, BookOpen, TrendingUp, Target, Eye, Brain, Rocket, Shield } from "lucide-react";

export const DATA_SOURCES = [
  {
    id: 'excel',
    name: 'Excel Files',
    icon: FileSpreadsheet,
    description: 'CSV, XLSX data files',
    color: 'bg-green-500'
  },
  {
    id: 'database',
    name: 'Database',
    icon: Database,
    description: 'SQL, NoSQL databases',
    color: 'bg-blue-500'
  },
  {
    id: 'api',
    name: 'Web Applications',
    icon: Cloud,
    description: 'REST APIs, webhooks',
    color: 'bg-purple-500'
  }
];

export const DATA_LAKES = [
  { id: 'azure', name: 'Azure', color: 'bg-blue-600' },
  { id: 'mongodb', name: 'MongoDB', color: 'bg-green-600' },
  { id: 'iceberg', name: 'Iceberg', color: 'bg-cyan-600' },
  { id: 's3', name: 'Amazon S3', color: 'bg-orange-600' },
  { id: 'gcs', name: 'Google Cloud', color: 'bg-red-600' }
];

export const DATA_WAREHOUSES = [
  { id: 'aws', name: 'AWS', color: 'bg-yellow-600' },
  { id: 'snowflake', name: 'Snowflake', color: 'bg-blue-500' },
  { id: 'oracle', name: 'Oracle', color: 'bg-red-600' },
  { id: 'ibm', name: 'IBM', color: 'bg-blue-700' }
];

export const BUSINESS_APPLICATIONS = [
  {
    id: 'esg',
    title: 'ESG',
    description: 'Streamline ESG data collection and reporting with AI-driven analytics',
    icon: Leaf,
    color: 'from-green-400 to-emerald-600',
    features: [
      'Centralized ESG Data Repository',
      'AI/ML-Driven Data Cleaning & Transformation',
      'Real-Time Dashboards & Forecasting Tools',
      'Smart Integration with Existing Systems'
    ]
  },
  {
    id: 'finance',
    title: 'Corporate Finance',
    description: 'Consolidate business finance into a single source of truth',
    icon: DollarSign,
    color: 'from-blue-400 to-indigo-600',
    features: [
      'Real-Time Financial Insights',
      'Unified Financial Dashboard',
      'Predictive Financial Forecasting',
      'Anomaly Detection and Alerts'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Minimize defects and reduce errors through big data analytics',
    icon: Factory,
    color: 'from-purple-400 to-violet-600',
    features: [
      'Sensor Data Analytics',
      'Pattern Recognition',
      'Quality Control Automation',
      'Operational Efficiency Optimization'
    ]
  },
  {
    id: 'knowledge',
    title: 'Internal Knowledge Base',
    description: 'AI-chatbot integration with internal documentation',
    icon: BookOpen,
    color: 'from-teal-400 to-cyan-600',
    features: [
      'Document Integration',
      'Conversational AI Access',
      'Knowledge Discovery',
      'Team Productivity Enhancement'
    ]
  }
];

export const PROBLEM_CARDS = [
  {
    icon: FileSpreadsheet,
    title: "Teams relying on Excel sheets",
    description: "for daily operations and planning",
    color: "bg-green-600"
  },
  {
    icon: Users,
    title: "Multiple systems",
    description: "across departments with no single source of truth",
    color: "bg-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Difficult to generate",
    description: "real-time, accurate and consistent reports",
    color: "bg-yellow-500"
  },
  {
    icon: BarChart3,
    title: "No clear data audit trail",
    description: "or smart automation",
    color: "bg-blue-500"
  },
  {
    icon: Users,
    title: "Manual work slows",
    description: "decision-making and creates errors",
    color: "bg-red-500"
  }
];

export const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Faster Reporting",
    description: "Reduce report generation from days to minutes with automated data processing and AI insights.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Target,
    title: "Improved Accuracy",
    description: "Minimize manual errors through intelligent automation and machine learning algorithms.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Eye,
    title: "Better Visibility",
    description: "Unified view across all departments with real-time dashboards and comprehensive analytics.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Brain,
    title: "Smart Insights",
    description: "AI detects trends, forecasts outcomes and flags anomalies for proactive decision making.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Rocket,
    title: "Increased Productivity",
    description: "Free your teams from spreadsheet chaos with centralized, automated data management.",
    color: "from-indigo-400 to-purple-500"
  },
  {
    icon: Shield,
    title: "Secure File Transfer",
    description: "OCR technology extracts key info from contracts and invoices with secure departmental transfer.",
    color: "from-teal-400 to-blue-500"
  }
];

export const MOCK_ESG_DATA = [
  { name: 'Environmental', score: 85, change: '+15%' },
  { name: 'Social', score: 92, change: '+2%' },
  { name: 'Governance', score: 78, change: '+8%' }
];

export const MOCK_FINANCIAL_DATA = [
  { metric: 'Monthly Revenue', value: '$2.4M', change: '+12.5%', positive: true },
  { metric: 'Cash Flow Health', value: '94.2%', change: '+2.1%', positive: true }
];

export const MOCK_TABLE_DATA = [
  {
    id: 1,
    department: 'Operations',
    score: 94.2,
    trend: '+12.5%',
    status: 'Excellent',
    statusColor: 'bg-green-100 text-green-800',
    positive: true
  },
  {
    id: 2,
    department: 'Finance',
    score: 87.8,
    trend: '+8.3%',
    status: 'Good',
    statusColor: 'bg-blue-100 text-blue-800',
    positive: true
  },
  {
    id: 3,
    department: 'HR',
    score: 76.5,
    trend: '-3.2%',
    status: 'Needs Attention',
    statusColor: 'bg-yellow-100 text-yellow-800',
    positive: false
  },
  {
    id: 4,
    department: 'Marketing',
    score: 91.3,
    trend: '+15.7%',
    status: 'Excellent',
    statusColor: 'bg-green-100 text-green-800',
    positive: true
  },
  {
    id: 5,
    department: 'IT',
    score: 83.1,
    trend: '+5.9%',
    status: 'Good',
    statusColor: 'bg-blue-100 text-blue-800',
    positive: true
  },
  {
    id: 6,
    department: 'Procurement',
    score: 69.4,
    trend: '-7.8%',
    status: 'Critical',
    statusColor: 'bg-red-100 text-red-800',
    positive: false
  }
];

export const MOCK_CHAT_MESSAGES = [
  {
    id: 1,
    message: "Show me our Q3 ESG performance trends",
    isUser: true,
    timestamp: "2024-01-01T10:00:00Z"
  },
  {
    id: 2,
    message: "I've analyzed your Q3 ESG data. Your Environmental score improved by 15%, Social metrics are stable at 92%, and Governance shows a 8% increase. Would you like to see the detailed breakdown?",
    isUser: false,
    timestamp: "2024-01-01T10:00:30Z"
  },
  {
    id: 3,
    message: "Yes, show environmental details",
    isUser: true,
    timestamp: "2024-01-01T10:01:00Z"
  }
];
