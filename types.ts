export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  iconColorClass: string;
}

export interface PlatformProps {
  icon: string;
  label: string;
  colorClass: string;
  disabled?: boolean;
}