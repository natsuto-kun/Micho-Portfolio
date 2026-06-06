interface Tag {
  label: string;
}

interface WorkCardProps {
  thumbnail: string;
  tags: Tag[];
  title: string;
  category?: string;
  href?: string;
}

export function WorkCard({ thumbnail, tags, title, href = '#' }: WorkCardProps) {
  return (
    <div
      className="bg-white border border-[#0022ff] relative flex flex-col"
      style={{ boxShadow: '4px 8px 0px 0px #0022ff' }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        />
        <div
          className="absolute inset-0"
          style={{ boxShadow: 'inset 2px 4px 0px 0px #0022ff' }}
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-4 mx-4">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className="bg-[#0022ff] text-white px-3 py-1 text-xs"
            style={{ fontFamily: "'MOBO', sans-serif" }}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Title */}
      <p
        className="mx-4 mt-3 mb-6 text-[#0022ff] text-sm"
        style={{ fontFamily: "'MOBO', sans-serif", fontWeight: 300 }}
      >
        {title}
      </p>

      {/* MORE link */}
      <div className="mt-auto mx-4 mb-4 flex items-center justify-end gap-2">
        <a
          href={href}
          className="text-[#0022ff] text-sm tracking-widest flex items-center gap-3"
          style={{ fontFamily: "'MOBO', sans-serif" }}
        >
          MORE
          <svg width="50" height="10" viewBox="0 0 50 10" fill="none">
            <line x1="0" y1="5" x2="42" y2="5" stroke="#0022ff" strokeWidth="1.5" />
            <path d="M38 1L46 5L38 9" stroke="#0022ff" strokeWidth="1.5" fill="none" />
          </svg>
        </a>
      </div>
    </div>
  );
}
