import { Component, OnInit } from '@angular/core';
import { UserI } from '../../models/user.model';
import { UsersService } from '../../servicios/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: UserI[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.get();
  }

  get(yesOrNot:boolean = true){
    if (yesOrNot)
      this.usersService.get().subscribe( (res:UserI[]) =>{
        this.users = res;
      })
  }
  delete(userId:string){
    console.log('component delete',userId);
    this.usersService.delete(userId).subscribe( res =>{
      console.log(res)
      this.get();
    })
  }
  post(){
    
  }
}
