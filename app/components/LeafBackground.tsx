import Image from "next/image";

export default function LeafBackground({
  overlayClassName = "bg-forest-dark/60",
}: {
  overlayClassName?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <Image src="/bg-leaf.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
