
interface blockedUser {
    id: number;
    name: string;
}

class BlackListManager {
    private list: blockedUser[] = [];
    
    getList() {
        return this.list;
    }
    
    isBlackListed(userId: number) {
        return this.list.find((data) => data.id === userId) !== undefined;
    }
    
    blackList(userName: string, userId: number): void {
        console.log('blackList', userId)
        if (this.isBlackListed(userId)) return;
        this.list.push({id: userId, name: userName});
    }

    cancelBlackList(userId: number): void {
        console.log('cancel blackList', userId)
        this.list.splice(this.list.findIndex(data => data.id === userId), 1);
    }
}

export const blackListManager = new BlackListManager();