import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Member } from './Member';
 
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  list: Member[];
  selectedMember: Member;
  readonly baseURL = 'http://localhost:3000/';
detailForm: FormGroup;
 
constructor(private fb: FormBuilder, private http: HttpClient) {

    this.detailForm = fb.group({
      title : new FormControl(''),
      initials: new FormControl(''),
      firstName : new FormControl(''),
      surname : new FormControl(''),
      idNumber : new FormControl(''),
      dateOfBirth : new FormControl(''),
      gender : new FormControl(''),
      contactNumber : new FormControl(''),
      cellphoneNumber : new FormControl(''),
      address: new FormControl(''),
      grossMonthlyIncome : new FormControl(''),
      relationshipToMember : new FormControl(''),
      isBenefiaryLivesSameAddress : new FormControl(''),
      city : new FormControl(''),
      nameOfGeneralPractiner : new FormControl(''),
      doctorAdddress : new FormControl(''),
      doctorContactNumber :new FormControl(''),
      numOfYearsConsulted : new FormControl(''),
      weight : new FormControl(''),
      height : new FormControl(''),
      employer : new FormControl(''),
      jobTitle : new FormControl(''),
      duration : new FormControl(''),
      refContactNumber : new FormControl(''),
      bankName : new FormControl(''),
      bankCode : new FormControl(''),
      branchName : new FormControl(''),
      accHolderName : new FormControl(''),
      accountNumber : new FormControl(''),
      accountType : new FormControl(''),
      fileUpload : new FormControl('')
   })
   }
  
  

   addMember(){

    var body = {
      title: this.detailForm.value.title,
      initials: this.detailForm.value.initials,
      firstName: this.detailForm.value.firstName,
      surname: this.detailForm.value.surname,
      idNumber: this.detailForm.value.idNumber,
      dateOfBirth: this.detailForm.value.dateOfBirth,
      gender: this.detailForm.value.gender,
      contactNumber: this.detailForm.value.contactNumber,
      cellphoneNumber: this.detailForm.value.cellphoneNumber,
      address: this.detailForm.value.address,
      grossMonthlyIncome: this.detailForm.value.grossMonthlyIncome,
      relationshipToBeneficiary: this.detailForm.value.relationshipToBeneficiary,
      isBenefiaryLivesSameAddress: this.detailForm.value.isBenefiaryLivesSameAddress,
      city: this.detailForm.value.city,
      nameOfGeneralPractiner: this.detailForm.value.nameOfGeneralPractiner,
      doctorAdddress: this.detailForm.value.doctorAdddress,
      doctorContactNumber: this.detailForm.value.doctorContactNumber,
      numOfYearsConsulted: this.detailForm.value.numOfYearsConsulted,
      weight: this.detailForm.value.weight,
      height: this.detailForm.value.height,
      employer: this.detailForm.value.employer,
      jobTitle: this.detailForm.value.jobTitle,
      duration: this.detailForm.value.duration,
      refContactNumber: this.detailForm.value.refContactNumber,
      bankName: this.detailForm.value.bankName,
      bankCode: this.detailForm.value.bankCode,
      branchName: this.detailForm.value.branchName,
      accHolderName: this.detailForm.value.accHolderName,
      accountNumber: this.detailForm.value.accountNumber,
      accountType: this.detailForm.value.accountType,
      fileUpload: this.detailForm.value.fileUpload,

  }
  return this.http.post(this.baseURL,body);
  // postMember(memb: Member) {
  //   return this.http.post(this.baseURL, memb)
  // }
  
  
  
   //modidy parameters of post method point to backend post member endpoint

  }
  editMember(){

    var edited = {
      memberId: this.detailForm.value.memberId,
      title: this.detailForm.value.title,
      initials: this.detailForm.value.initials,
      firstName: this.detailForm.value.firstName,
      surname: this.detailForm.value.surname,
      idNumber: this.detailForm.value.idNumber,
      dateOfBirth: this.detailForm.value.dateOfBirth,
      gender: this.detailForm.value.gender,
      contactNumber: this.detailForm.value.contactNumber,
      cellphoneNumber: this.detailForm.value.cellphoneNumber,
      address: this.detailForm.value.address,
      grossMonthlyIncome: this.detailForm.value.grossMonthlyIncome,
      relationshipToBeneficiary: this.detailForm.value.relationshipToBeneficiary,
      isBenefiaryLivesSameAddress: this.detailForm.value.isBenefiaryLivesSameAddress,
      city: this.detailForm.value.city,
      nameOfGeneralPractiner: this.detailForm.value.nameOfGeneralPractiner,
      doctorAdddress: this.detailForm.value.doctorAdddress,
      doctorContactNumber: this.detailForm.value.doctorContactNumber,
      numOfYearsConsulted: this.detailForm.value.numOfYearsConsulted,
      weight: this.detailForm.value.weight,
      height: this.detailForm.value.height,
      employer: this.detailForm.value.employer,
      jobTitle: this.detailForm.value.jobTitle,
      duration: this.detailForm.value.duration,
      refContactNumber: this.detailForm.value.refContactNumber,
      bankName: this.detailForm.value.bankName,
      bankCode: this.detailForm.value.bankCode,
      branchName: this.detailForm.value.branchName,
      accHolderName: this.detailForm.value.accHolderName,
      accountNumber: this.detailForm.value.accountNumber,
      accountType: this.detailForm.value.accountType,

     
      postMember(memb: Member) {
        return this.http.post(this.baseURL, memb)
      }
    };

   

   //return this.http.post(environment.apiBaseUrl + '/members/post' + this.detailForm.controls.memberId.value, edited)
   //modidy parameters of post method point to backend post member endpoint

  }
  deleteMember(memberId: number){
    return this.http.delete(environment.apiBaseUrl + '/members/:id' + memberId);
  }

  retrieveMembers(){
    this.http.get(environment.apiBaseUrl + '/members/put/:id')
    .toPromise()
    .then(response => this.list = response as Member[]);
  }
}
