import Image from "next/image";
import { Cloud, Network, Building2, Layers, Radio, Code2 } from "lucide-react";

const mediaFiles: Record<string, string> = {
  company: "/brand/cinema/sections/company.png",
  resources: "/brand/cinema/sections/resources.png",
  "enterprise-hero": "/brand/reference-assets/omnicx-workspace.webp",
  heritage: "/brand/reference-assets/communications-devices.webp",
  healthcare: "/brand/reference-assets/connolly-hospital.webp",
  transportation: "/brand/reference-assets/tel-aviv-red-line.webp",
  hospitality: "/brand/reference-assets/norman-hotel.webp",
};

function ContextIllustration({ name }: { name: string }) {
  const Icon = name.includes("cloud")
    ? Cloud
    : name.includes("carrier")
      ? Radio
      : name.includes("oem")
        ? Code2
        : name.includes("distributor")
          ? Layers
          : name.includes("education")
            ? Building2
            : Network;
  return (
    <div className="context-illustration" aria-hidden="true">
      <svg viewBox="0 0 500 350" fill="none">
        <ellipse
          cx="250"
          cy="175"
          rx="205"
          ry="105"
          stroke="currentColor"
          opacity=".15"
        />
        <path
          d="M45 175 H455 M250 70 V280"
          stroke="currentColor"
          opacity=".25"
          strokeDasharray="3 7"
        />
        <circle
          cx="250"
          cy="175"
          r="70"
          fill="white"
          fillOpacity=".07"
          stroke="currentColor"
          opacity=".5"
        />
        <circle cx="45" cy="175" r="9" fill="currentColor" />
        <circle cx="455" cy="175" r="9" fill="currentColor" />
        <circle cx="250" cy="70" r="6" fill="currentColor" />
        <circle cx="250" cy="280" r="6" fill="currentColor" />
        <Icon x="220" y="145" width="60" height="60" strokeWidth="1" />
      </svg>
    </div>
  );
}

export const homeMedia: Record<string, string> = {
  heritage: "/media/heritage.webp",
  "cap-voice": "/media/home/cap-voice-v4.webp",
  "cap-cloud": "/media/home/cap-cloud-v4.webp",
  "cap-cx": "/media/home/cap-cx-v4.webp",
  "cap-collab": "/media/home/cap-collab-v4.webp",
  "cap-critical": "/media/home/cap-critical-v4.webp",
  "sol-enterprise": "/media/home/sol-enterprise-v4.webp",
  "sol-cx": "/media/home/sol-cx-v4.webp",
  "sol-ai": "/media/home/sol-ai-v4.webp",
  "sol-critical": "/media/home/sol-critical-v4.webp",
  "dep-cloud": "/media/home/dep-cloud-v4.webp",
  "dep-hybrid": "/media/home/dep-hybrid-v4.webp",
  "dep-onprem": "/media/home/dep-onprem-v4.webp",
  "ind-healthcare": "/media/home/ind-healthcare-v4.webp",
  "ind-utilities": "/media/home/ind-utilities-v4.webp",
  "ind-transport": "/media/home/ind-transport-v4.webp",
  "ind-hospitality": "/media/home/ind-hospitality-v4.webp",
  "res-it": "/media/home/res-it-v4.webp",
  "res-cx": "/media/home/res-cx-v4.webp",
  "res-ops": "/media/home/res-ops-v4.webp",
  "partner-stage": "/media/partners/stage.webp",
  "partner-cloud": "/media/partners/cloud.webp",
  "partner-carrier": "/media/partners/carrier.webp",
  "partner-distributor": "/media/partners/distributor.webp",
  "partner-integrator": "/media/partners/integrator.webp",
  "partner-oem": "/media/partners/oem.webp",
};

export function MediaFrame({
  name,
  alt,
  priority = false,
  ratio = "landscape",
}: {
  name: string;
  alt: string;
  priority?: boolean;
  ratio?: "landscape" | "portrait" | "wide";
}) {
  const src = mediaFiles[name] || homeMedia[name] || (name.includes("education") ? "/media/education.webp" : name.includes("utilities") ? "/media/utilities.webp" : "/brand/cinema/enterprise.png");

  return (
    <figure
      className={`media-frame media-frame--${ratio} media-frame--${name}${name === "heritage" || name === "enterprise-hero" ? " media-frame--product" : ""}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 760px) 100vw, 60vw"
          quality={88}
        />
      ) : (
        <ContextIllustration name={name} />
      )}
    </figure>
  );
}

export function HomeMedia({
  name,
  alt,
  ratio = "landscape",
  sizes = "(max-width: 479px) 100vw, (max-width: 939px) 50vw, 33vw",
  priority = false,
  cover = false,
}: {
  name: string;
  alt: string;
  ratio?: "portrait" | "landscape";
  sizes?: string;
  priority?: boolean;
  cover?: boolean;
}) {
  const src = homeMedia[name];


  return (
    <div
      className={`home-media home-media--${ratio}${cover ? " home-media--cover" : ""}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={88}
        />
      ) : null}
    </div>
  );
}
