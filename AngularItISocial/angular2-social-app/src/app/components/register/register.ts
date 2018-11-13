import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/index';
import { UserRegistration } from 'models';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

/**
 * Ajoute un nouvel utilisateur
 */
@Component({
    selector: 'register',
    templateUrl: 'register.html'
})
export class RegisterComponent {
    @ViewChild(NgForm)
    ngForm: NgForm;

    model = new UserRegistration();

    constructor(
        private registrationService: RegistrationService,
        private messageService: NzMessageService,
        private router: Router
    ) { }

    register() {
        if (this.ngForm.form.invalid) {
            console.log('first');
            return;
        }
        // Vérifier si le username est disponible. Informer l'utilisateur de l'indisponibilité d'un username.
        this.registrationService.usernameExists(this.model.username)
        .then((exist) => {
            if (!exist) {
                console.log('not exist');
                this.registrationService.register(this.model)
                    .then(() => {
                        // TODO utiliser this.router.navigate pour rediriger l'utilisateur vers la page de login
                        this.router.navigate(['/login']);
                    })
                    .catch(() => {
                        return;
                    })
            } else {
                this.router.navigate(['/login']);
                console.log('exist');
                return;
            }
        })
    }
}
