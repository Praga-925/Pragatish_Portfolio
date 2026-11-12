export interface HackathonJourneyItem {
  id: string;
  journeyNumber: string;
  hackathon: string;
  collaboration?: string;
  venueOrLocation: string;
  projectTitle: string;
  projectSlug: string;
  coverImage?: string;
  summary: string;
  emphasizedAspects: string[];
}

export const HACKATHON_JOURNEY_DATA: HackathonJourneyItem[] = [
  {
    id: "iisf-hackathon-2025",
    journeyNumber: "01",
    hackathon: "IISF S&T Hackathon 2025",
    venueOrLocation: "Panchkula, Haryana",
    projectTitle: "eDNA – Marine Biodiversity Intelligence System",
    projectSlug: "edna-marine-biodiversity",
    coverImage: "/projects/edna/cover.jpg",
    summary: "Developed an AI-powered solution focused on marine biodiversity monitoring using environmental DNA (eDNA) concepts and intelligent taxonomic sequence analysis.",
    emphasizedAspects: [
      "Innovation",
      "Team Collaboration",
      "AI Solution Design",
      "Research-Based Development"
    ]
  },
  {
    id: "aise-hack-2026",
    journeyNumber: "02",
    hackathon: "ANRF – AISE Hack 2026",
    collaboration: "IBM × IIT Delhi",
    venueOrLocation: "IIIT Hyderabad",
    projectTitle: "Flood Mapping from Satellite Imagery Using Deep Learning",
    projectSlug: "flood-mapping-satellite-deep-learning",
    coverImage: "/projects/flood-mapping/cover.jpg",
    summary: "Developed a deep learning-based flood mapping solution using satellite imagery and UNet++ semantic segmentation techniques to support disaster management and environmental monitoring.",
    emphasizedAspects: [
      "Deep Learning",
      "Computer Vision",
      "Remote Sensing",
      "Geospatial Intelligence",
      "Semantic Segmentation"
    ]
  }
];
