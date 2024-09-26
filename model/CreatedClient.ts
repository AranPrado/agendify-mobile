enum Gender {
    male = "male",
    female = "female",
    other = "other",
  }
  
 export interface CreatedClient {
    email: string;
    password: string;
    name: string;
    gender: Gender;
    age: number;
  }

  export interface CreatedProvider {
    email: string;
    password: string;
    name: string;
    gender: Gender;
    age: number;
    aboutMe:string
  }
  
  
  