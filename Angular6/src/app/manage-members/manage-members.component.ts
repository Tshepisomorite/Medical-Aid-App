import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-manage-members',
  templateUrl: './manage-members.component.html',
  styleUrls: ['./manage-members.component.css']
})
export class ManageMembersComponent implements OnInit {

  constructor(public service: MemberService) { }

  ngOnInit(): void {
  }

  onViewBeneficiary(memberId: number){

  }

  onDelete(memberId: number){
   this.service.deleteMember(memberId);
  }
  onEdit(member){

  }

}
