"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

export function SmartImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  priority,
  sizes,
}: SmartImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-gradient-to-br from-[#4a2d22] via-[#8d2c1f] to-[#c7922f] text-sm text-white/80",
          className,
        )}
      >
        Fresh from the kitchen
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      unoptimized={src.startsWith("http")}
      onError={() => setErrored(true)}
    />
  );
}
