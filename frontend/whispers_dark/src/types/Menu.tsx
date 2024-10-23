export interface MenuItem {
  label: string;
  href: string;
}

export interface IFilter {
  label: string;
  valor: string;
}

export interface IOrder {
  label: string;
  valor: string;
}

export interface StoryCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  onClick: () => void;
}