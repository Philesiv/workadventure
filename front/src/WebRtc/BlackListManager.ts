import {Subject} from 'rxjs';

class BlackListManager {
    private list: number[] = [];
    public onBlockStream: Subject<number> = new Subject();
    public onUnBlockStream: Subject<number> = new Subject();
    
    isBlackListed(userId: number) {
        return this.list.find((data) => data === userId) !== undefined;
    }
    
    blackList(userName: string, userId: number): void {
        if (this.isBlackListed(userId)) return;
        this.list.push(userId);
        this.onBlockStream.next(userId);
    }

    cancelBlackList(userId: number): void {
        this.list.splice(this.list.findIndex(data => data === userId), 1);
        this.onUnBlockStream.next(userId);
    }
}

export const blackListManager = new BlackListManager();