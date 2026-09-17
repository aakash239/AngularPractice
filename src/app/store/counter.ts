import { Service, signal } from '@angular/core';

@Service()
export class Counter {
    count = signal(0);

    decrement(){
        this.count.update(c => c - 1);
    }
    
    increment () {
        this.count.update(c => c + 1);
    }

    reset () {
        this.count.set(0);
    }
}
