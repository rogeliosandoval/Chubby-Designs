//Angular
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

//Pages
import { AppComponent } from './app.component'
import { Home } from './pages/home/home.component'
import { Contact } from './pages/contact/contact.component'

//Components
import { ContactForm } from './components/contact-form/contact-form.component'

//Angular Material
import { MatDividerModule } from '@angular/material/divider'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon'

const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact}
]

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Contact,
    ContactForm
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules }),
    MatDividerModule,
    MatTooltipModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
