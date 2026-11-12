"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_BRAND } from "@/data/portfolioData";
import { Activity, ShieldCheck, Cpu, Database, Server, Check } from "lucide-react";

export function SystemMetricsHUD() {
  const [vramUsage, setVramUsage] = useState(4.2);
  const [throughput, setThroughput] = useState(1420);
  const [latency, setLatency] = useState(11.8);

  useEffect(() => {
    // Micro jitter for live telemetry authenticity
    const interval = setInterval(() => {
      setVramUsage((prev) => +(4.2 + Math.random() * 0.3 - 0.15).toFixed(2));
      setThroughput((prev) => Math.floor(1420 + Math.random() * 80 - 40));
      setLatency((prev) => +(11.8 + Math.random() * 0.4 - 0.2).toFixed(1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto my-12 px-4">
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(0,229,255,0.03)] relative overflow-hidden">
        {/* Subtle Ambient Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

        {/* HUD Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#242424] mb-6 gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#00E5FF]">
            <Server className="w-4 h-4" />
            <span className="tracking-widest uppercase font-semibold">
              PRODUCTION TELEMETRY & SYSTEM SLA HUD
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              SYSTEM OPERATIONAL
            </span>
            <span className="text-[#94A3B8]">SLA 99.99%</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#111111] border border-[#242424] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#94A3B8] mb-2">
              <span className="text-[11px] font-mono uppercase">Inference P99</span>
              <Activity className="w-4 h-4 text-[#00E5FF]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-mono font-bold text-[#F8FAFC]">{latency}</span>
              <span className="text-xs font-mono text-[#00E5FF]">ms</span>
            </div>
            <span className="text-[10px] font-mono text-[#94A3B8] mt-1">TensorRT FP16</span>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-[#242424] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#94A3B8] mb-2">
              <span className="text-[11px] font-mono uppercase">GPU VRAM</span>
              <Cpu className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-mono font-bold text-[#F8FAFC]">{vramUsage}</span>
              <span className="text-xs font-mono text-[#D4AF37]">/ 16 GB</span>
            </div>
            <span className="text-[10px] font-mono text-[#94A3B8] mt-1">NVIDIA RTX 4090</span>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-[#242424] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#94A3B8] mb-2">
              <span className="text-[11px] font-mono uppercase">eBPF Telemetry</span>
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-mono font-bold text-[#F8FAFC]">2.4M</span>
              <span className="text-xs font-mono text-[#10B981]">pps</span>
            </div>
            <span className="text-[10px] font-mono text-[#94A3B8] mt-1">Zero Overhead</span>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-[#242424] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#94A3B8] mb-2">
              <span className="text-[11px] font-mono uppercase">Vector Query Rate</span>
              <Database className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-mono font-bold text-[#F8FAFC]">{throughput}</span>
              <span className="text-xs font-mono text-purple-400">qps</span>
            </div>
            <span className="text-[10px] font-mono text-[#94A3B8] mt-1">Qdrant HNSW Cluster</span>
          </div>
        </div>
      </div>
    </div>
  );
}
