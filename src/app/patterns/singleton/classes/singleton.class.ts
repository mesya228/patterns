export class Singleton {
    private static instance: Singleton;
    private dataArr = [];

    /**
     * Конструктор Одиночки всегда должен быть скрытым, чтобы предотвратить
     * создание объекта через оператор new.
     */
    private constructor() { }

    /**
     * Статический метод, управляющий доступом к экземпляру одиночки.
     *
     * Эта реализация позволяет вам расширять класс Одиночки, сохраняя повсюду
     * только один экземпляр каждого подкласса.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public logData(data: any) {
        this.dataArr.push(data);

        console.log(data);
        console.log(this.dataArr);
        
    }
}