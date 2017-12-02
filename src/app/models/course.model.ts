import { IFiredata } from './IFireData.model';

export class Course implements IFiredata {
    public title: string;
    public description: string;
    public url: string;

    constructor(private _title?: string, private _description?: string, _url?: string) {
        this.title = _title;
        this.description = _description;
        this.url = _url;
    }
}
