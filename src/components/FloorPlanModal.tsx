import React, { useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ShieldCheck } from "lucide-react";
import { FloorPlan } from "../data/floorPlans";
import { trackEvent } from "../utils/analytics";

interface FloorPlanModalProps {
  plan: FloorPlan | null;
  onClose: () => void;
  onEnquire: (planName: string) => void;
}

export const FloorPlanModal: React.FC<FloorPlanModalProps> = ({ plan, onClose, onEnquire }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (!plan) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="floorplan-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-[#080909]/95 backdrop-blur-lg animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl h-[96vh] sm:h-[92vh] max-h-[850px] bg-[#101113] border border-[#2B2C2F] shadow-2xl flex flex-col overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222325] bg-[#141517]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A875] font-mono">
              Official Architectural Plan
            </span>
            <h2
              id="floorplan-title"
              className="text-lg sm:text-xl font-normal text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {plan.typeName}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#1E1F22] border border-[#2E3033] p-1">
              <button
                onClick={handleZoomOut}
                aria-label="Zoom out"
                className="p-1.5 text-[#A0A0A0] hover:text-[#F4F0E8] transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono px-2 text-[#C9A875]">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                aria-label="Zoom in"
                className="p-1.5 text-[#A0A0A0] hover:text-[#F4F0E8] transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                aria-label="Reset zoom and position"
                className="p-1.5 text-[#A0A0A0] hover:text-[#F4F0E8] transition-colors ml-1 border-l border-[#2E3033]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              aria-label="Close floor plan preview"
              className="p-2 text-[#888888] hover:text-[#F4F0E8] hover:bg-[#1E1F22] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Canvas Area */}
        <div
          className="relative flex-1 bg-[#090A0B] overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Architectural Blueprint Grid */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#C9A875 1px, transparent 1px), radial-gradient(#C9A875 1px, #090A0B 1px)",
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 20px 20px",
            }}
          />

          {/* Floorplan Vector Schematic Rendering */}
          <div
            style={{
              transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`,
              transition: isDragging ? "none" : "transform 0.15s ease-out",
            }}
            className="w-full max-w-2xl px-6 py-8 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-lg bg-[#141517] border border-[#2C2D30] p-4 sm:p-6 shadow-2xl">
              {/* Architectural Title Block */}
              <div className="flex items-center justify-between pb-3 border-b border-[#242528] mb-4 text-[10px] uppercase font-mono tracking-widest text-[#888888]">
                <span>SOBHA RIVANA · SECTOR 1</span>
                <span className="text-[#C9A875]">{plan.category}</span>
              </div>

              {/* Detailed Room Architecture Vector Layout */}
              <svg viewBox="0 0 500 380" className="w-full h-auto text-[#C9A875]" fill="none">
                {/* Outer Wall Boundary */}
                <rect x="20" y="20" width="460" height="340" stroke="#C9A875" strokeWidth="2.5" />
                
                {/* Master Bedroom Suite */}
                <rect x="25" y="25" width="200" height="150" stroke="#777777" strokeWidth="1.2" strokeDasharray="3 3" />
                <text x="45" y="70" fill="#F4F0E8" fontSize="12" fontFamily="Manrope">MASTER BEDROOM</text>
                <text x="45" y="90" fill="#C9A875" fontSize="10" fontFamily="Manrope">14&apos;0&quot; x 17&apos;6&quot;</text>
                
                {/* Master Walk-in Dressing & En-Suite */}
                <rect x="25" y="125" width="90" height="50" stroke="#555555" strokeWidth="1" />
                <text x="35" y="155" fill="#888888" fontSize="9" fontFamily="Manrope">DRESS / TOILET</text>

                {/* Living & Dining Grand Pavilion */}
                <rect x="230" y="25" width="245" height="210" stroke="#C9A875" strokeWidth="1.5" />
                <text x="270" y="90" fill="#F4F0E8" fontSize="13" fontWeight="bold" fontFamily="Manrope">
                  LIVING &amp; DINING PAVILION
                </text>
                <text x="270" y="115" fill="#C9A875" fontSize="10" fontFamily="Manrope">
                  23&apos;4&quot; x 15&apos;8&quot; · Cross Ventilated
                </text>

                {/* Panoramic River-Facing Balcony */}
                <rect x="330" y="238" width="145" height="117" stroke="#004D50" strokeWidth="1.5" fill="#004D50" fillOpacity="0.15" />
                <text x="345" y="285" fill="#F4F0E8" fontSize="11" fontFamily="Manrope">EXPANSIVE BALCONY</text>
                <text x="345" y="305" fill="#C9A875" fontSize="9" fontFamily="Manrope">7&apos;0&quot; Wide Riverdeck</text>

                {/* Bedroom 2 */}
                <rect x="25" y="180" width="190" height="120" stroke="#777777" strokeWidth="1.2" />
                <text x="45" y="225" fill="#F4F0E8" fontSize="11" fontFamily="Manrope">BEDROOM 02</text>
                <text x="45" y="245" fill="#C9A875" fontSize="10" fontFamily="Manrope">12&apos;0&quot; x 13&apos;6&quot;</text>

                {/* Kitchen with Utility Triangle & Scullery */}
                <rect x="220" y="238" width="105" height="117" stroke="#777777" strokeWidth="1.2" />
                <text x="230" y="280" fill="#F4F0E8" fontSize="10" fontFamily="Manrope">KITCHEN</text>
                <text x="230" y="298" fill="#888888" fontSize="9" fontFamily="Manrope">&amp; UTILITY</text>

                {/* Entry Foyer with Vastu Orientation */}
                <rect x="25" y="305" width="120" height="50" stroke="#C9A875" strokeWidth="1.2" />
                <text x="35" y="335" fill="#C9A875" fontSize="9" fontFamily="Manrope">VASTU FOYER</text>

                {/* Compass / Orientation */}
                <circle cx="450" cy="50" r="16" stroke="#C9A875" strokeWidth="0.8" />
                <text x="446" y="44" fill="#C9A875" fontSize="9" fontWeight="bold">N</text>
                <path d="M450 46 L450 56" stroke="#C9A875" strokeWidth="1.2" />
              </svg>

              {/* Area Breakdown Bar */}
              <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-[#242528] text-center">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#888888] block">Saleable Area</span>
                  <span className="text-xs font-mono font-medium text-[#F4F0E8]">{plan.saleableArea}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#888888] block">Carpet Area</span>
                  <span className="text-xs font-mono font-medium text-[#F4F0E8]">{plan.carpetArea}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#888888] block">Balcony + Utility</span>
                  <span className="text-xs font-mono font-medium text-[#C9A875]">{plan.balconyUtilityArea}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="px-6 py-4 bg-[#141517] border-t border-[#222325] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#888888]">
            <ShieldCheck className="w-4 h-4 text-[#C9A875]" />
            <span>Dimensions &amp; layouts verified against approved architectural plans.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                trackEvent("floor_plan_view", { action: "request_pdf", planId: plan.id });
                onEnquire(`Request Floor Plan PDF: ${plan.typeName}`);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider text-[#F4F0E8] border border-[#333333] hover:border-[#C9A875] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#C9A875]" />
              <span>REQUEST COMPLETE FLOOR PLAN PORTFOLIO</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(`Enquire for ${plan.typeName}`);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors"
            >
              REQUEST PRICE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
