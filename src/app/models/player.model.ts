export interface Player {
  name: string;
  type: string;
  armor: number;
  count: number;
  perception: any;
  active: boolean;
  class: string;
}

export enum Abilities {
  strength = 'STR',
  dexterity = 'DEX',
  intelligence = 'INT',
  wisdom = 'WIS',
  charisma = 'CHA'
}
