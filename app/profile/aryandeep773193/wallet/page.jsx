"use client";

import Link from "next/link";
import { environment } from "../../../environment/environment";

export default function Profile() {
  return (
    <>
      <div>
        <div className="min-h-screen">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 px-16 pt-6 pb-6  border-b border-b-black/20">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm"
              style={{ background: "rgb(63, 132, 9)" }}
            >
              AD
            </div>
            <div>
              <h1 className="text-xl text-black">Aryan Deep</h1>
              <div className="flex items-center gap-4 text-sm text-black">
                <span>2 Credential</span>
                <span>1 Issuer</span>
              </div>
            </div>
          </div>
          <div className="flex ml-16 gap-4">
            {/* Card 1 */}
            <Link
              href={`${environment.apiBaseUrl}/ab8b3e1d-a62e-484b-84e3-01c0de9ab3f4`}
              className="transform transition-transform duration-300 hover:scale-100"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">
                <div className="bg-[#f4f5fa] py-4 px-2 flex items-center justify-center">
                  <img src="../../badge.png" className="w-60" />
                </div>
                <div className="p-4">
                  <h3 className="text-black mb-2">CFA Program Level II</h3>
                  <p className="text-sm text-black mb-1">October 10, 2024</p>
                  <p className="text-sm text-black">CFA Institute</p>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href={`${environment.apiBaseUrl}/66630e91-4afe-4341-99ff-1c178f7c398e`}
              className="transform transition-transform duration-300 hover:scale-100"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">
                <div className="bg-[#f4f5fa] py-4 px-2 flex items-center justify-center">
                  <img src="../../badge lvl1.png" className="w-60" />
                </div>
                <div className="p-4">
                  <h3 className="text-black mb-2">CFA Program Level I</h3>
                  <p className="text-sm text-black mb-1">October 10, 2024</p>
                  <p className="text-sm text-black">CFA Institute</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
