
export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  thumbnail: string;
  category: string;
}

export interface ServiceTime {
  day: string;
  title: string;
  time: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
