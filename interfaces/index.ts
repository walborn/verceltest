export type User = {
  id: number;
  name: string;
}

export type Master = {
  id: string;
  name: string;
  avatar?: string;
  description: string;
}

export type Lesson = {
  id: string;
  user: {
    id: string;
    name: string;
    picture: string;
  },
  day: number;
  time: number;
  duration: number;
  category: string;
  title: string;
  master: string;
  alternate: string;
  disabled: boolean;
  hidden: boolean;
  level: string;
  room: number;
  note?: string;
}
