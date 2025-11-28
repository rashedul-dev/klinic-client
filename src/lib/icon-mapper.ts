import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

export const getIconByName = (iconName: string): LucideIcon => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  if (!IconComponent) {
    return Icons.HelpCircle; // default icon if not found
  }
  return IconComponent as LucideIcon;
};
