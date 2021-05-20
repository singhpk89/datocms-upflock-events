
 export class  Chat {
    id:string
    username: string;
    name: string;
    message: string;
    time: string;
  
    constructor(id:string, username:string, name:string, message:string,  created_at:string ) {
        
      this.id = id;
      this.username = username;
      this.name = name;
      this.message = message;
      this.time = created_at;
    }
  }
