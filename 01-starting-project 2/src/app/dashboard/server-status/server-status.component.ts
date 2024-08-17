import { Component, DestroyRef, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

export class ServerStatusComponent implements OnInit{
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);

  //implement ngOnInit (runs when all inputs are initialized but before template rendered)

  ngOnInit(){
    const interval = setInterval(()=> {
        const random = Math.random(); //number between 0 - 1
        if(random <= 0.5){
            this.currentStatus === 'online'
        }else if(random < 0.9 ){
          this.currentStatus === 'offline'
        }else {
          this.currentStatus === 'unknown'
        }
    }, 5000)
    this.destroyRef.onDestroy(()=> {
      clearInterval(interval)
    })
  }
}
