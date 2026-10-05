import {
  Phone,
  Mail,
  MessageCircle,
  AudioLines,
  Building2,
  Cloud,
  Layers,
  UserRound,
  Network,
} from "lucide-react";
// Authored SVG illustration; not generated media and never used as a logo.
export function SignalArt({ staticView = false }: { staticView?: boolean }) {
  return (
    <div
      className={`signal-art${staticView ? " signal-art--static" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 700 620" fill="none" className="signal-art__svg">
        <defs>
          <radialGradient id="signal-halo">
            <stop stopColor="#CFEAF4" stopOpacity=".75" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="signal-stroke"
            x1="50"
            y1="0"
            x2="600"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#009BD7" />
            <stop offset="1" stopColor="#0866FF" />
          </linearGradient>
        </defs>
        <circle cx="355" cy="305" r="280" fill="url(#signal-halo)" />
        <g className="signal-art__opening">
          <circle
            cx="355"
            cy="305"
            r="243"
            stroke="#DCE9F1"
            strokeDasharray="2 11"
          />
          <ellipse
            cx="355"
            cy="305"
            rx="270"
            ry="150"
            transform="rotate(-32 355 305)"
            stroke="#DCE9F1"
          />
          <ellipse
            cx="355"
            cy="305"
            rx="220"
            ry="120"
            transform="rotate(35 355 305)"
            stroke="#DCE9F1"
          />
          <g
            stroke="url(#signal-stroke)"
            strokeWidth="2"
            className="signal-art__paths"
          >
            <path pathLength="1" d="M130 180 C290 180 190 305 355 305" />
            <path pathLength="1" d="M125 410 C240 410 205 305 355 305" />
            <path pathLength="1" d="M535 155 C425 155 520 305 355 305" />
            <path pathLength="1" d="M570 415 C410 415 515 305 355 305" />
          </g>
          <g fill="#fff" stroke="#BCE3F5">
            <circle cx="130" cy="180" r="39" />
            <circle cx="125" cy="410" r="39" />
            <circle cx="535" cy="155" r="39" />
            <circle cx="570" cy="415" r="39" />
          </g>
          <Phone
            x="115"
            y="165"
            width="30"
            height="30"
            stroke="#009BD7"
            strokeWidth="1.7"
          />
          <MessageCircle
            x="110"
            y="395"
            width="30"
            height="30"
            stroke="#0866FF"
            strokeWidth="1.7"
          />
          <Mail
            x="520"
            y="140"
            width="30"
            height="30"
            stroke="#009BD7"
            strokeWidth="1.7"
          />
          <UserRound
            x="555"
            y="400"
            width="30"
            height="30"
            stroke="#0866FF"
            strokeWidth="1.7"
          />
          <g fill="#081746" fontSize="15" textAnchor="middle">
            <text x="130" y="242">
              Voice
            </text>
            <text x="125" y="472">
              Messaging
            </text>
            <text x="535" y="217">
              Email
            </text>
            <text x="570" y="477">
              People
            </text>
          </g>
        </g>
        <g className="signal-art__workspace">
          <rect
            x="142"
            y="139"
            width="425"
            height="336"
            rx="18"
            fill="white"
            stroke="#BCE3F5"
          />
          <path d="M142 191 H567 M226 191 V475" stroke="#E2EBF3" />
          <g fill="#CFEAF4">
            <circle cx="164" cy="165" r="4" />
            <circle cx="181" cy="165" r="4" />
            <circle cx="198" cy="165" r="4" />
          </g>
          <text x="255" y="171" fill="#081746" fontSize="16" fontWeight="600">
            One customer. Full context.
          </text>
          <Phone x="169" y="225" width="26" height="26" stroke="#009BD7" />
          <MessageCircle
            x="169"
            y="293"
            width="26"
            height="26"
            stroke="#0866FF"
          />
          <Mail x="169" y="361" width="26" height="26" stroke="#009BD7" />
          <rect x="252" y="222" width="282" height="60" rx="8" fill="#F1F8FD" />
          <rect x="252" y="302" width="218" height="60" rx="8" fill="#F1F8FD" />
          <path
            d="M274 245 H441 M274 261 H385 M274 325 H431 M274 341 H350"
            stroke="#A8C6D9"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <rect x="252" y="393" width="282" height="49" rx="8" fill="#081746" />
          <text x="393" y="423" textAnchor="middle" fill="white" fontSize="16">
            The conversation continues.
          </text>
        </g>
        <g className="signal-art__choice">
          <path
            d="M350 220 V305 M350 305 C350 350 142 300 142 391 M350 305 V391 M350 305 C350 350 558 300 558 391"
            stroke="url(#signal-stroke)"
            strokeWidth="2"
          />
          <circle cx="350" cy="202" r="60" fill="white" stroke="#BCE3F5" />
          <Network
            x="326"
            y="178"
            width="48"
            height="48"
            stroke="#009BD7"
            strokeWidth="1.2"
          />
          <g fill="white" stroke="#BCE3F5">
            <circle cx="142" cy="412" r="46" />
            <circle cx="350" cy="412" r="46" />
            <circle cx="558" cy="412" r="46" />
          </g>
          <Cloud
            x="122"
            y="392"
            width="40"
            height="40"
            stroke="#009BD7"
            strokeWidth="1.4"
          />
          <Building2
            x="330"
            y="392"
            width="40"
            height="40"
            stroke="#009BD7"
            strokeWidth="1.4"
          />
          <Layers
            x="538"
            y="392"
            width="40"
            height="40"
            stroke="#009BD7"
            strokeWidth="1.4"
          />
          <g fill="#081746" fontSize="19" textAnchor="middle">
            <text x="142" y="490">
              Cloud
            </text>
            <text x="350" y="490">
              On premises
            </text>
            <text x="558" y="490">
              Hybrid
            </text>
          </g>
        </g>
        <g className="signal-art__core">
          <circle cx="355" cy="305" r="82" fill="white" stroke="#CFEAF4" />
          <circle
            cx="355"
            cy="305"
            r="65"
            stroke="#009BD7"
            strokeDasharray="1 8"
          />
          <AudioLines
            x="324"
            y="274"
            width="62"
            height="62"
            stroke="#009BD7"
            strokeWidth="1.7"
          />
        </g>
        <g className="signal-art__traveller">
          <circle cx="355" cy="305" r="26" fill="#009BD7" fillOpacity=".1" />
          <circle cx="355" cy="305" r="9" fill="#009BD7" />
          <circle cx="355" cy="305" r="3" fill="white" />
        </g>
      </svg>
      <p className="signal-art__caption">
        PEOPLE <span>↔</span> TECHNOLOGY <span>↔</span> BETTER OUTCOMES
      </p>
    </div>
  );
}
