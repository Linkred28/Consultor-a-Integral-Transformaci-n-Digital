
import type { ComponentType } from 'react';

export interface Video {
  id: number;
  url: string;
  shareUrl?: string;
  title: string;
  benefit: string;
  summary: string;
  imageId?: number;
  imageUrl?: string;
  description: string;
}

export interface TickerItem {
  icon: ComponentType<{ className?: string }>;
  text: string;
}
