export interface State {
    name: string;
    shortname: string;
  }
  
  export class City {
    placeId: number;
    name: string;
    state: State;
    shortName: string;
  
    constructor(placeId: number, name: string, state: State) {
      this.placeId = placeId;
      this.name = name;
      this.state = state;
      this.shortName = `${name}, ${state.shortname}`;
    }
  }
  