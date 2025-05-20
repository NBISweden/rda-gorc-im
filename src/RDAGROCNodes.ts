export type EssentialElement = IdentifiableEntity & Attributes & {
    type: "essential-element",
    categories: Category[];
} & Questions;

export type Category = IdentifiableEntity & Attributes & {
    type: "category",
    subcategories: Subcategory;
} & Questions;

export type Subcategory = IdentifiableEntity & Attributes & {
    type: "subcategory",
} & Questions;

export type Attribute = IdentifiableEntity & KPIs & {
    type: "attribute",
    features: Feature[];
} & Questions;

export type Feature = IdentifiableEntity & KPIs & {
    type: "feature",
} & Questions;

export type KPI = IdentifiableEntity & {
    type: "kpi",
};

type IdentifiableEntity = {
    id: string;
    name: {
        shortName: string;
        longName: string;
    };
    description: string;
    examples: string[];
    sources: Source[];
    considerationLevel: ConsiderationLevel;
    implementation?: Implementation;
}

type Attributes = {
    attributes: Attribute[];
}

type Questions = {
    questions: Question[];
}

type KPIs = {
    kpis: KPI[];
}

export type Source = {
    name: string;
    url: string;
}

export type ConsiderationLevel = "core" | "desirable" | "optional";

export type Question = {
    id: string;
    label: string;
    description: string;
}

export type Implementation = unknown;
