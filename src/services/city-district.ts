export interface CityProps {
    id: number;
    name: string;
    country: {
      id: number;
      name: string;
    };
  }
  

 export interface DistrictProps {
    id: number;
    name: string;
    region: {
      id: number;
      name: string;
      country: {
        id: number;
        name: string;
      };
    };
  }

  