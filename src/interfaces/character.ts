export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

export type Action =
  | { type: 'FETCH_SUCCESS'; payload: Character[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'FETCH_INIT' };

export interface State {
  data: Character[];
  loading: boolean;
  error: string | null;
}