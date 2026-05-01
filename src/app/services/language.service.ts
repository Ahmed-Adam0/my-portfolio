import { Injectable, signal, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'portfolio-language';
  private currentLanguage = signal<Language>(this.getInitialLanguage());
  public language$ = this.currentLanguage.asReadonly();

  constructor(private translateService: TranslateService) {
    this.setupLanguage();
  }

  private getInitialLanguage(): Language {
    const saved = localStorage.getItem(this.LANGUAGE_KEY) as Language | null;
    return saved || this.getBrowserLanguage();
  }

  private getBrowserLanguage(): Language {
    const browserLang = this.translateService.getBrowserLang();
    return browserLang?.startsWith('ar') ? 'ar' : 'en';
  }

  private setupLanguage(): void {
    effect(() => {
      const lang = this.currentLanguage();
      this.applyLanguage(lang);
    });
  }

  private applyLanguage(lang: Language): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use(lang);
    
    const htmlElement = document.documentElement;
    htmlElement.lang = lang;
    htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    localStorage.setItem(this.LANGUAGE_KEY, lang);
  }

  public setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
  }

  public toggleLanguage(): void {
    const newLang = this.currentLanguage() === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
  }

  public getLanguage(): Language {
    return this.currentLanguage();
  }

  public getCurrentLanguageName(): string {
    return this.currentLanguage() === 'en' ? 'English' : 'العربية';
  }

  public isRTL(): boolean {
    return this.currentLanguage() === 'ar';
  }
}
