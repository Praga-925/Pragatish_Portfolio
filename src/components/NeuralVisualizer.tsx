"use client";

import React, { useState, useEffect } from "react";
import { Cpu, ShieldCheck, Activity, Zap, RefreshCw } from "lucide-react";

interface Node {
  id: number;
  x: number;
  y: number;
  label: string;
  type: "AI Model" | "Vector DB" | "eBPF Observer" | "Zero Trust Shield" | "Inference Gateway";
  status: "ACTIVE" | "INSPECTING" | "ENCRYPTED";
  metric: string;
}

export function NeuralVisualizer() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [activeNode, setActiveNode] = useState<Node | null>(null);
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    // Generate deterministic neural network topology nodes
    const generatedNodes: Node[] = [
      { id: 1, x: 20, y: 30, label: "Llama-3 LLM Core", type: "AI Model", status: "ACTIVE", metric: "TensorRT FP16" },
      { id: 2, x: 50, y: 20, label: "Qdrant Vector Cluster", type: "Vector DB", status: "ACTIVE", metric: "512d HNSW" },
      { id: 3, x: 80, y: 35, label: "eBPF Packet Monitor", type: "eBPF Observer", status: "INSPECTING", metric: "2.4M pps" },
      { id: 4, x: 35, y: 70, label: "Prompt Sanitizer Sentinel", type: "Zero Trust Shield", status: "ENCRYPTED", metric: "100% Injection Blocked" },
      { id: 5, x: 70, y: 75, label: "FastAPI gRPC Router", type: "Inference Gateway", status: "ACTIVE", metric: "<12ms Latency" },
    ];
    setNodes(generatedNodes);
    setActiveNode(generatedNodes[0]);

    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % generatedNodes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-[#1A1A1A] border border-[#333333] p-6 overflow-hidden shadow-2xl group border-wire-hover">
      {/* Background SVG Grid & Connections */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full">
          <line x1="20%" y1="30%" x2="50%" y2="20%" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="20%" x2="80%" y2="35%" stroke="#00E5FF" strokeWidth="1" />
          <line x1="20%" y1="30%" x2="35%" y2="70%" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="35%" y1="70%" x2="70%" y2="75%" stroke="#00E5FF" strokeWidth="1" />
          <line x1="80%" y1="35%" x2="70%" y2="75%" stroke="#D4AF37" strokeWidth="1" />
        </svg>
      </div>

      {/* Header HUD Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#242424] mb-6 relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs text-[#00E5FF]">
          <Activity className="w-4 h-4 animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">
            LIVE NEURAL TOPOLOGY & OBSERVER
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-[#94A3B8]">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span> AI DATA FLOW
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> SECURE FILTER
          </span>
        </div>
      </div>

      {/* Interactive Topology Container */}
      <div className="relative h-64 w-full flex items-center justify-center">
        {nodes.map((node, index) => {
          const isSelected = activeNode?.id === node.id;
          const isPulsing = pulseIndex === index;

          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              onMouseEnter={() => setActiveNode(node)}
              className={`absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 rounded-xl p-3 border text-left cursor-pointer z-20 ${
                isSelected
                  ? "bg-[#242424] border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.2)] scale-105"
                  : "bg-[#111111]/90 border-[#333333] hover:border-[#555555]"
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    node.type.includes("Zero Trust") || node.type.includes("eBPF")
                      ? "bg-[#D4AF37]"
                      : "bg-[#00E5FF]"
                  } ${isPulsing ? "animate-ping" : ""}`}
                />
                <span className="text-xs font-mono font-medium text-[#F8FAFC]">
                  {node.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Telemetry Drawer */}
      {activeNode && (
        <div className="mt-4 p-4 rounded-xl bg-[#111111] border border-[#333333] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#1A1A1A] border border-[#333333]">
              {activeNode.type.includes("Zero Trust") || activeNode.type.includes("eBPF") ? (
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              ) : (
                <Cpu className="w-5 h-5 text-[#00E5FF]" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-[#F8FAFC]">{activeNode.label}</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#242424] text-[#CBD5E1] border border-[#333333]">
                  {activeNode.type}
                </span>
              </div>
              <p className="text-xs font-mono text-[#94A3B8] mt-0.5">
                STATUS: <span className="text-[#10B981]">{activeNode.status}</span>
              </p>
            </div>
          </div>
          <div className="text-right font-mono">
            <span className="text-[10px] text-[#94A3B8] block uppercase">Live Telemetry</span>
            <span className="text-xs font-bold text-[#00E5FF]">{activeNode.metric}</span>
          </div>
        </div>
      )}
    </div>
  );
}
