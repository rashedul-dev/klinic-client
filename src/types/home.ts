export interface NavItem {
  name: string;
  href: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  availability: string;
  rating: number;
}

export interface HealthPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface DiagnosticTest {
  id: string;
  name: string;
  category: string;
  price: string;
  turnaroundTime: string;
}

export interface NGO {
  id: string;
  name: string;
  focus: string;
  description: string;
  logo: string;
}