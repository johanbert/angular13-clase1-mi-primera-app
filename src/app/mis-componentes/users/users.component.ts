import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.usersService.get().subscribe( res =>{
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
}
