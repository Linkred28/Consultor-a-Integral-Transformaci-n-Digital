
export interface Video {
  id: number;
  url: string;
  shareUrl?: string;
  title: string;
  benefit: string;
  summary: string;
  imageId: number;
  description: string;
}

export interface TickerItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}
