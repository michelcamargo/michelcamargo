import { Component, OnInit } from '@angular/core';
import {User} from "../../../../types/user";
import {userModel} from "../../../../models/user.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public userFormData: User;

  constructor() {
    this.userFormData = userModel(0);
  }

  ngOnInit(): void {
  }

}
