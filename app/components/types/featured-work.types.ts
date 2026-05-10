export interface FeaturedWorkItem {
  id: number;
  title: string;
  category: string;
  background: string;
  image: string;
}
export interface FeaturedWorkProps {
  items?: FeaturedWorkItem[];
}