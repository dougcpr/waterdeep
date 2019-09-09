export interface User {
  username: string;
  role: string;
  class: string;
  level: number;
  XP: number;
  characterName: string;
  AC: number;
  HP: number;
  maxHealth: number;
  hitDie: string;
  passive: {
    perception: number;
    initiative: number;
    proficiency: string;
    wisdom: number;
  };
}
