import { ClientRequestService } from '../../../services/client-request.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ClientRequest } from '../../../models/ClientRequest';
import { MustMatch } from '../../../validators/must-match';
@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private clientRequestService: ClientRequestService
  ) {}

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   email: ['', [Validators.email, Validators.required]],
    //   description: ['', Validators.required]
    // });
  }
  onSubmit(): void {
    if (this.form.invalid) {
      window.alert('Some fields are invalid');
      return;
    }
    const req: ClientRequest = {
      description: this.desc.value,
      email: this.name.value
    };
    this.clientRequestService.postTestData(req).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

    window.alert('submitted');
    this.onReset();
  }
  onReset() {
    this.form.reset();
  }
  get name() {
    return this.form.get('email');
  }
  get desc() {
    return this.form.get('description');
  }
}
