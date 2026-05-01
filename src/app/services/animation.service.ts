import { Injectable } from '@angular/core';
import gsap from 'gsap';
import AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() {
    this.initializeAOS();
  }

  private initializeAOS(): void {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: false,
        mirror: true,
        offset: 200
      });
    }
  }

  /**
   * Animate an element with a fade-in and slide-up effect
   */
  public animateElementIn(element: HTMLElement, delay: number = 0): gsap.core.Tween {
    return gsap.to(element, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      delay: delay,
      ease: 'power4.out'
    });
  }

  /**
   * Animate number counter
   */
  public animateCounter(
    element: HTMLElement,
    from: number,
    to: number,
    duration: number = 2
  ): gsap.core.Tween {
    return gsap.to({ value: from }, {
      value: to,
      duration: duration,
      ease: 'power2.out',
      onUpdate: function () {
        element.textContent = Math.round((this as any).targets()[0].value).toString();
      }
    });
  }

  /**
   * Animate progress bar
   */
  public animateProgress(
    element: HTMLElement,
    toValue: number,
    duration: number = 1.5
  ): gsap.core.Tween {
    return gsap.to(element, {
      width: `${toValue}%`,
      duration: duration,
      ease: 'power2.out'
    });
  }

  /**
   * Stagger animation for multiple elements
   */
  public animateStagger(
    elements: HTMLElement[],
    fromVars: any,
    toVars: any,
    staggerDelay: number = 0.1
  ): void {
    gsap.fromTo(elements, fromVars, {
      ...toVars,
      stagger: staggerDelay,
      ease: 'power3.out'
    });
  }

  /**
   * Parallax scroll effect
   */
  public setupParallax(element: HTMLElement, speed: number = 0.5): void {
    window.addEventListener('scroll', () => {
      const yPos = window.scrollY;
      element.style.transform = `translateY(${yPos * speed}px)`;
    });
  }

  /**
   * Refresh AOS animations
   */
  public refreshAOS(): void {
    AOS.refresh();
  }
}
