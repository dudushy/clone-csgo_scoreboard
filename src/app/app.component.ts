/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  timerInterval: any;
  timerDisplay: '0:03';

  constructor() {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    this.startTimer();
  }

  defaultOrder() { return 0; }

  startTimer() {
    console.log(`[${this.title}#startTimer]`, {
      timerInterval: this.timerInterval,
      timerDisplay: this.timerDisplay,
    });

    let [minutes, seconds] = [0, 0];

    this.timerInterval = setInterval(function () {
      console.log(`[${this.title}#startTimer/Interval]`, {
        timerInterval: this.timerInterval,
        timerDisplay: this.timerDisplay,
        seconds: seconds,
        minutes: minutes
      });


      if (minutes === 60 && seconds === 0) {

        this.isTimerActive = false;
        clearInterval(this.timer);

        return;
      }

      if (seconds === 59) {
        minutes++;
        seconds = 0;
      } else {
        seconds++;
      }

      const minutesDisplay = minutes > 0 ? String(minutes).padStart(2, '0') : '0';
      // console.log(`[${this.title}#startTimer/Interval] minutesDisplay`, minutesDisplay);

      const secondsDisplay = String(seconds).padStart(2, '0');
      // console.log(`[${this.title}#startTimer/Interval] secondsDisplay`, secondsDisplay);

      this.timerDisplay = `${minutesDisplay}:${secondsDisplay}`;

      const h1TimerDisplay = document.getElementById('timerDisplay');
      // console.log(`[${this.title}#startTimer/Interval] h1TimerDisplay`, h1TimerDisplay);

      h1TimerDisplay.innerText = this.timerDisplay;

      console.log(`[${this.title}#startTimer/Interval]`, {
        timerInterval: this.timerInterval,
        timerDisplay: this.timerDisplay,
        seconds: seconds,
        minutes: minutes,
      });
    }, 1000);
  }
}
