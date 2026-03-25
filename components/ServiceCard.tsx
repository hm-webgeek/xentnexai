import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        className="card-dark"
        style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {/* Icon */}
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "0.75rem",
            backgroundColor: "rgba(45, 212, 191, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2DD4BF",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          style={{
            color: "#F0F4F8",
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: "1.4",
            transition: "color 0.15s",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: "#94A3B8",
            fontSize: "0.9375rem",
            lineHeight: "1.65",
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Arrow link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            color: "#E8A020",
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >
          Learn More
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
