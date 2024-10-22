export interface Pokemon {
  id: number;
  name: string,
  types: string[],
  image: string,
  weaknesses: string[]
}

export interface TypeWeaknesses {
  [key: string]: string[]; 
}