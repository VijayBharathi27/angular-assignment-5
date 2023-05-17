import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
@Injectable()
export class UserService {
  constructor(private counterService: CounterService) {}
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToInactive(id: number) {
    this.counterService.incrementActiveToInactive();
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.counterService.incrementInactiveToActive();
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
