// Sources: supplied September 2026 company profile, SmartHotel and OmniCX brochures.
export const storyChapters = [
  {
    number: "01",
    label: "Connected people",
    title: "Intelligence in every interaction.",
    accent: "every interaction.",
    body: "Enterprise communications and customer experience. Connecting people, conversations, and the systems behind them.",
    action: "Explore our solutions",
    href: "#solutions",
  },
  {
    number: "02",
    label: "Connected conversations",
    title: "Every channel. One conversation.",
    accent: "One conversation.",
    body: "Bring service channels, customer information, and AI into the same working environment with OmniCX.",
    action: "Discover OmniCX",
    href: "/products/omnicx",
  },
  {
    number: "03",
    label: "Connected enterprises",
    title: "Modernization with choice.",
    accent: "with choice.",
    body: "Cloud, on premises, or hybrid. Connect existing and new environments with a deployment model that fits your organization.",
    action: "Talk to Tadiran",
    href: "/contact",
  },
] as const;
export const brandSolutions = [
  {
    number: "01",
    name: "Enterprise communications",
    product: "Aeonix",
    body: "Connect offices, mobile teams, and control rooms with voice, video, and collaboration built for continuity.",
    href: "/products/aeonix",
    icon: "network",
  },
  {
    number: "02",
    name: "Customer experience",
    product: "OmniCX",
    body: "Voice and digital channels. Routing and automation. Customer context that stays with the conversation.",
    href: "/products/omnicx",
    icon: "conversation",
  },
  {
    number: "03",
    name: "Hospitality communications",
    product: "SmartHotel",
    body: "Connect guest services, staff mobility, and hotel systems in one flexible communications platform.",
    href: "/industries/hospitality",
    icon: "hotel",
  },
] as const;
export const brandIndustries = [
  {
    name: "Transportation & utilities",
    detail: "Control rooms, field teams, and sites. Connected when it matters.",
    href: "/industries/transportation",
  },
  {
    name: "Healthcare & senior care",
    detail: "Communication that supports the people delivering care.",
    href: "/industries/healthcare",
  },
  {
    name: "Hospitality",
    detail: "Better guest service starts with connected hotel teams.",
    href: "/industries/hospitality",
  },
  {
    name: "Education",
    detail: "Campus communication, paging, and emergency readiness.",
    href: "/industries/education",
  },
] as const;
export const brandFacts = [
  { value: "60+", label: "years of experience" },
  { value: "41", label: "countries served" },
  { value: "4", label: "regional offices" },
  { value: "2", label: "R&D centers" },
] as const;
export const brandTokens = [
  { name: "Deep blue", value: "#081746" },
  { name: "Tadiran cyan", value: "#009BD7" },
  { name: "OmniCX blue", value: "#0866FF" },
  { name: "Ice", value: "#CFEAF4" },
  { name: "White", value: "#FFFFFF" },
] as const;

export const homeEditorial = {
  intro: {
    kicker: "01 / What we make possible",
    title: "Technology connects.",
    accent: "People make it matter.",
    body: "From the first customer conversation to the call that keeps an operation moving. Tadiran brings communications, customer experience, and integration together.",
  },
  proof: {
    kicker: "02 / Experience behind every connection",
    title: "A global company.",
    accent: "A human connection.",
    body: "Regional teams. Local partners. Dedicated R&D. Enterprise technology supported by people who understand your market.",
    action: "Get to know Tadiran",
    offices: "Regional offices: USA, Israel, India, and China.",
    research: "R&D: Israel and China.",
  },
  industries: {
    kicker: "03 / Built around your world",
    title: "Different industries.",
    accent: "Shared ambition.",
    body: "Keep people connected. Make service simpler. Help the operation move forward.",
    action: "Explore all industries",
  },
  closing: {
    kicker: "Let’s connect",
    title: "Your next chapter.",
    accent: "Simply done right.",
    body: "Tell us what you want to connect.",
    support: "We’ll help you find the right way forward.",
    action: "Start a conversation",
  },
} as const;
