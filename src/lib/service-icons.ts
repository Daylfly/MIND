import { Activity, Brain, Eye, HeartPulse, Stethoscope, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  heart: HeartPulse,
  brain: Brain,
  eye: Eye,
  activity: Activity,
  stethoscope: Stethoscope,
};

export function getServiceIcon(key: string): LucideIcon {
  return ICON_MAP[key] ?? Stethoscope;
}

export const SERVICE_ICON_KEYS = Object.keys(ICON_MAP);
