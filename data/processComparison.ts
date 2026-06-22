export interface ProcessItem {
  id: string;
  name: string;
  image: string;
  bestFor: string;
  capability: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  values: string[];
}

export interface ProcessComparisonData {
  title: string;
  comparisonTitle: string;
  comparisonDescription: string;
  processes: ProcessItem[];
  comparisonRows: ComparisonRow[];
}