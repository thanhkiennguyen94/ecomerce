import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import icVisibility from "@iconify/icons-ic/twotone-visibility";
import icVisibilityOff from "@iconify/icons-ic/twotone-visibility-off";
import { fadeInUp400ms } from "../../../@vex/animations/fade-in-up.animation";
import { TokenStorageService } from "../auth/token-storage.service";
import { AuthJwtService } from "../auth/auth-jwt.service";
import { AuthLogin } from "../auth/auth-login";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @ViewChild('myInput') myInput: any;
  errStatus: number;
  inputType = "password";
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private tokenStorage: TokenStorageService,
    private cd: ChangeDetectorRef,
    private authService: AuthJwtService
  ) {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(["/dashboard"]);
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  send() {
    this.authenticate(
      new AuthLogin(
        this.form.get("username").value,
        this.form.get("password").value
      )
    );
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = "password";
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = "text";
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  public authenticate(userInfo) {
    this.authService
      .authenticate(userInfo)
      .then((data) => {
        this.tokenStorage.saveToken(data.accessToken, data.accessToken);
        this.router.navigate(["/dashboard"]);
      })
      .catch((error) => {
        this.errStatus = error.status;
        this.myInput.nativeElement.focus();
      });
  }
}
