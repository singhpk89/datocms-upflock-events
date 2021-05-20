
 export class  Leader {
    id:string
    username: string;
    name: string;
    point: string;
    time: string;
  
    constructor(id:string, username:string, name:string, point:string,  created_at:string ) {
        
      this.id = id;
      this.username = username;
      this.name = name;
      this.point = point;
      this.time = created_at;
    }
  }
