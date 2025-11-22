import { NavItem, Doctor, HealthPlan, DiagnosticTest, NGO } from "@/types/home";

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Consultation", href: "/consultation" },
  { name: "Health Plans", href: "/health-plans" },
  { name: "Diagnostics", href: "/diagnostics" },
  { name: "NGOs", href: "/ngos" },
];

export const DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Emily Chen",
    specialty: "Cardiology",
    image: "https://picsum.photos/200/200?random=1",
    availability: "Available Today",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Dr. Michael Ross",
    specialty: "Dermatology",
    image: "https://picsum.photos/200/200?random=2",
    availability: "Available Tomorrow",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrics",
    image: "https://picsum.photos/200/200?random=3",
    availability: "Available Today",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Dr. David Kim",
    specialty: "Orthopedics",
    image: "https://picsum.photos/200/200?random=4",
    availability: "Next Available: Mon",
    rating: 4.7,
  },
  {
    id: "5",
    name: "Dr. Jessica Williams",
    specialty: "General Medicine",
    image: "https://picsum.photos/200/200?random=5",
    availability: "Available Today",
    rating: 5.0,
  },
  {
    id: "6",
    name: "Dr. Robert Wilson",
    specialty: "Neurology",
    image: "https://picsum.photos/200/200?random=6",
    availability: "Next Available: Tue",
    rating: 4.9,
  },
];

export const PLANS: HealthPlan[] = [
  {
    name: "Basic",
    price: "$29/mo",
    features: ["General Consultation (2/mo)", "Basic Blood Work", "App Support"],
    recommended: false,
  },
  {
    name: "Standard",
    price: "$59/mo",
    features: ["Specialist Consultation (4/mo)", "Full Body Checkup", "Priority Support", "Diet Plan"],
    recommended: true,
  },
  {
    name: "Premium",
    price: "$99/mo",
    features: ["Unlimited Consultations", "Advanced Diagnostics", "24/7 Concierge", "Family Coverage (up to 4)"],
    recommended: false,
  },
];

export const DIAGNOSTICS: DiagnosticTest[] = [
  { id: "1", name: "Complete Blood Count (CBC)", category: "Blood Test", price: "$20", turnaroundTime: "24 Hours" },
  { id: "2", name: "Lipid Profile", category: "Blood Test", price: "$35", turnaroundTime: "24 Hours" },
  { id: "3", name: "Chest X-Ray", category: "Imaging", price: "$50", turnaroundTime: "Same Day" },
  { id: "4", name: "Abdominal Ultrasound", category: "Imaging", price: "$80", turnaroundTime: "Same Day" },
  { id: "5", name: "Thyroid Profile", category: "Blood Test", price: "$30", turnaroundTime: "24 Hours" },
  { id: "6", name: "MRI Scan (Brain)", category: "Imaging", price: "$250", turnaroundTime: "48 Hours" },
];

export const NGOS: NGO[] = [
  {
    id: "1",
    name: "Heart Care Foundation",
    focus: "Cardiovascular Health",
    description: "Providing free heart surgeries for underprivileged children.",
    logo: "https://picsum.photos/100/100?random=10",
  },
  {
    id: "2",
    name: "Vision for All",
    focus: "Eye Care",
    description: "Conducting free cataract surgeries and distributing glasses.",
    logo: "https://picsum.photos/100/100?random=11",
  },
  {
    id: "3",
    name: "Diabetes Awareness",
    focus: "Preventive Care",
    description: "Educating rural communities about diabetes management and diet.",
    logo: "https://picsum.photos/100/100?random=12",
  },
];
