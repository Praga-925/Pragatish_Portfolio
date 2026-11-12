import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, Inbox, Layers } from "lucide-react";
import { Button } from "./Button";

export interface StateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  title = "No Data Records Found",
  description = "No items match the currently selected filter parameters.",
  actionLabel,
  onAction,
  className,
}: StateProps) {
  return (
    <div
      className={cn(
        "w-full py-12 px-6 rounded-2xl bg-[#1A1A1A] border border-[#333333] flex flex-col items-center text-center gap-3",
        className
      )}
    >
      <div className="p-3 rounded-xl bg-[#111111] border border-[#333333] text-[#94A3B8]">
        <Inbox className="w-6 h-6" />
      </div>
      <h4 className="text-base font-bold text-[#F8FAFC]">{title}</h4>
      <p className="text-xs font-mono text-[#94A3B8] max-w-md">{description}</p>
      {actionLabel && onAction && (
        <Button variant="outline" size="sm" onClick={onAction} className="mt-2">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export function ErrorState({
  title = "System Interface Exception",
  description = "An unexpected error occurred while loading this component resource.",
  actionLabel = "Retry Operation",
  onAction,
  className,
}: StateProps) {
  return (
    <div
      className={cn(
        "w-full py-12 px-6 rounded-2xl bg-[#1A1A1A] border border-[#EF4444]/40 flex flex-col items-center text-center gap-3",
        className
      )}
    >
      <div className="p-3 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444]">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h4 className="text-base font-bold text-[#F8FAFC]">{title}</h4>
      <p className="text-xs font-mono text-[#CBD5E1] max-w-md">{description}</p>
      {onAction && (
        <Button variant="primary" size="sm" onClick={onAction} className="mt-2">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export function SectionPlaceholder({ title, sectionId }: { title: string; sectionId: string }) {
  return (
    <div
      id={sectionId}
      className="w-full py-20 px-6 rounded-2xl bg-[#1A1A1A] border border-[#333333] flex flex-col items-center justify-center text-center gap-2"
    >
      <Layers className="w-6 h-6 text-[#00E5FF]" />
      <h3 className="text-lg font-bold text-[#F8FAFC]">{title}</h3>
      <span className="text-xs font-mono text-[#94A3B8]">SECTION FOUNDATION INITIALIZED</span>
    </div>
  );
}
