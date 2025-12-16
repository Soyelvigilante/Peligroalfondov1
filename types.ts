export interface MenuItem {
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
}

export interface Review {
  text: string;
  author: string;
}

export interface ScheduleItem {
  day: string;
  hours: string;
}