export interface FeaturedWorkItem {
  id: number;
  title: string;
  category: string;
  background: string;
}

export interface FeaturedWorkProps {
  items: FeaturedWorkItem[];
}