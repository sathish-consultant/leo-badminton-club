import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

export interface RegisterData {
  registerName: string;
  registerPhoneNumber: string;
}


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly dialog = inject(MatDialog);
  readonly registerName = signal('');
  readonly registerPhoneNumber = signal('');

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialog, {
      data: {registerName: this.registerName(), registerPhoneNumber: this.registerPhoneNumber()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result);
        // location.href = "mailto:leobadzclub@gmail.com?subject=Register New Player&body=Hi There!%0D%0AI would like to join the club and my details are as below: %0D%0AName:" +this.registerName + "%0D%0APhone Number: "+ this.registerPhoneNumber;
      }
    });
  }
}

@Component({
  selector: 'register-dialog',
  templateUrl: 'register-dialog.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class RegisterDialog {
  readonly dialogRef = inject(MatDialogRef<RegisterDialog>);
  readonly data = inject<RegisterData>(MAT_DIALOG_DATA);
  readonly registerName = model(this.data.registerName);
  readonly registerPhoneNumber = model(this.data.registerPhoneNumber);

  onNoClick(): void {
    this.dialogRef.close();
  }

  register(): void {
    this.dialogRef.close();
    location.href = "mailto:leobadzclub@gmail.com?subject=Register New Player&body=Hi There!%0D%0AI would like to join the club and my details are as below: %0D%0AName:" +this.registerName() + "%0D%0APhone Number: "+ this.registerPhoneNumber();
  }
}

