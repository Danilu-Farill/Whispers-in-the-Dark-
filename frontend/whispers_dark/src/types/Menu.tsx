export interface MenuItem {
  label: string;
  href: string;
}

export interface IFilter {
  label: string;
  value: string;
}

export interface IOrder {
  label: string;
  value: string;
}

export interface StoryCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  onClick: () => void;
}