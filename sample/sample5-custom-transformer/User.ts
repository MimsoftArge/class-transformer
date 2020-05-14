import {Type, Transform} from "../../src/decorators";
import * as moment from "moment";

export class User {

    id: number;

    name: string;

    @Type(() => Date)
    @Transform(params => params.value.toString(), { toPlainOnly: true })
    @Transform(params => moment(params.value), { toClassOnly: true })
    date: Date;

}
