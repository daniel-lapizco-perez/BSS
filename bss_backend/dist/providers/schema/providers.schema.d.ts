/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from "mongoose";
export type ProviderDocumen = HydratedDocument<Provider>;
export declare class Provider {
    name: string;
    address: string;
    phone: string;
    email: string;
    company: string;
    status: boolean;
}
export declare const ProviderSchema: import("mongoose").Schema<Provider, import("mongoose").Model<Provider, any, any, any, import("mongoose").Document<unknown, any, Provider> & Provider & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Provider, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Provider>> & import("mongoose").FlatRecord<Provider> & {
    _id: import("mongoose").Types.ObjectId;
}>;
