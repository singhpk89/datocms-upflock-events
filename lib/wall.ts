
 export class  WallData {
    id:string
    username: string;
    title: string;
    message: string;
    path: string;
    time: string;
  
    constructor(id:string, username:string, title:string, message:string, path:string, created_at:string ) {
        
      this.id = id;
      this.username = username;
      this.title = title;
      this.message = message;
      this.path = path;
      this.time = created_at;
    }
  }
