import { Component, OnInit } from '@angular/core';
import {FormData} from '../data';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
data = [];
menuForm;
formTwo;

  constructor(private formBuilder:FormBuilder) {
    this.data = FormData;
this.menuForm = this.formBuilder.group({
  mainTitle:'',
  choices: this.formBuilder.group({
choiceName:''
  }),
related:formBuilder.group({
  relatedName:'',
  relatedChoices:formBuilder.group({
name:''
  })
})
});
    console.log("form Data" , this.data)

  }

  ngOnInit() {
  }
submit(){

}
onSelected(item : any){
var sec = document.getElementById(item);

if(sec.style.display != 'block'){
  sec.style.display = 'block';
}
else{
  sec.style.display = 'none';
  }
console.log("we are here)");
}


}
