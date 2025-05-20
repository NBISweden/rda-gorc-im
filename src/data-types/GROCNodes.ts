export type GORCNode = EssentialElement | Category | Subcategory | Attribute | Feature;

export type EssentialElement = IdentifiableEntity & Attributes & {
    type: "essential-element",
    categories: Category[];
};

export type Category = IdentifiableEntity & Attributes & {
    type: "category",
    subcategories: Subcategory;
};

export type Subcategory = IdentifiableEntity & Attributes & {
    type: "subcategory",
};

export type Attribute = IdentifiableEntity & KPIs & {
    type: "attribute",
    features: Feature[];
};

export type Feature = IdentifiableEntity & KPIs & {
    type: "feature",
};

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

type KPIs = {
    kpis: KPI[];
}

type Source = {
    name: string;
    url: string;
}

type ConsiderationLevel = "core" | "desirable" | "optional";

type Implementation = unknown;
