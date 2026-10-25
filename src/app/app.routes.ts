import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { AboutComponent } from './pages/about/about.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContributorsComponent } from './pages/contributors/contributors.component';
import { HelpFeedbackComponent } from './pages/help-feedback/help-feedback.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    title: 'GHOSTINPUT · Smart Dummy Data Filler for QA & Devs' 
  },
  { 
    path: 'features', 
    component: FeaturesComponent, 
    title: 'Features | GHOSTINPUT' 
  },
  { 
    path: 'about', 
    component: AboutComponent, 
    title: 'About | GHOSTINPUT' 
  },
  { 
    path: 'testimonials', 
    component: TestimonialsComponent, 
    title: 'Testimonials | GHOSTINPUT' 
  },
  { 
    path: 'contributors', 
    component: ContributorsComponent, 
    title: 'Contributors | GHOSTINPUT' 
  },
  { 
    path: 'help-feedback', 
    component: HelpFeedbackComponent, 
    title: 'Help & Feedback | GHOSTINPUT' 
  },
  { 
    path: 'privacy', 
    component: PrivacyComponent, 
    title: 'Privacy Policy | GHOSTINPUT' 
  },
  { 
    path: 'terms', 
    component: TermsComponent, 
    title: 'Terms of Service | GHOSTINPUT' 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
