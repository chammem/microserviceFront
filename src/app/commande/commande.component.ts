import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-commande',
  imports: [       ReactiveFormsModule
  ],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.scss'
})
export class CommandeComponent implements OnInit {
  f!: FormGroup;


  constructor(
    private fb: FormBuilder,

  ) {}

  ngOnInit(): void {
    this.f = this.fb.group({
      title: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]],  
      coverPicture: ['', [Validators.minLength(5)]],
    });
  }
  
  onSubmit(){}
  

}
