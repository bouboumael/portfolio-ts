export interface Violation {
    propertyPath: string;
    message: string;
    code: string;
}

export interface Social {
    id: number,
    name: string,
    url: string,
    icon: string
    isActive: boolean
}
