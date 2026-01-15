import { groq } from "next-sanity";

// Get all active properties for homepage
export const propertiesQuery = groq`
  *[_type == "property" && displayOnHomepage == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    images,
    address,
    neighborhood,
    price,
    bedrooms,
    bathrooms,
    squareFeet,
    description,
    agentNote,
    status,
    yearBuilt,
    lotSize
  }
`;

// Get single property by slug
export const propertyBySlugQuery = groq`
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    images,
    address,
    neighborhood,
    price,
    bedrooms,
    bathrooms,
    squareFeet,
    description,
    agentNote,
    status,
    yearBuilt,
    lotSize
  }
`;

// Get all property slugs for static generation
export const propertySlugsQuery = groq`
  *[_type == "property" && defined(slug.current)][].slug.current
`;
