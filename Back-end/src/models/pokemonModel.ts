export interface Pokemon {
  id: number;
  name: string,
  types: string[],
  image: string
}

export interface TypeWeaknesses {
  [key: string]: string[]; 
}