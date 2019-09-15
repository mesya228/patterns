export abstract class  State {
    protected context: any;
    public abstract config: any;

    public setContext(context: any) {
        this.context = context;
    }

    public abstract formSubmit(): void;
}