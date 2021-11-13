import { Component, Input, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserI } from 'src/app/models/user.model';
import { UsersService } from 'src/app/servicios/users.service';


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})

export class ModalFormComponent implements OnInit {
  @Output() updatedEvent = new EventEmitter<boolean>();
  @Input() userId = '';
  public user!: UserI;

  constructor(private modalService: NgbModal, private usersService: UsersService){}

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.usersService.getById(this.userId).subscribe( (res:UserI) => {
      this.user = res;
    })
  }

  update(){
    this.usersService.update(this.userId,this.user).subscribe( res =>{
      console.log(res)
      this.updatedEvent.emit(true);
    })
  }

  public closeResult: string = '';

  open(content:TemplateRef<any>) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
