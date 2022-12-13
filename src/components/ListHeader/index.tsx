import React from "react";

const ListHeader = () => {
  return (
    <div className="flex mb-2 p-4 justify-between items-center sticky top-0 bg-slate-600 z-50">
      <span className="flex-1 text-center font-bold text-slate-100">
        Add To Compare
      </span>
      <span className="flex-1 text-center font-bold text-slate-100">
        Mission Name
      </span>
      <span className="flex-1 text-center font-bold text-slate-100">
        Launch Site Name
      </span>
      <span className="flex-1 text-center font-bold text-slate-100">Ships</span>
      <span className="flex-1 text-center font-bold text-slate-100">
        Launch Date
      </span>
      <span className="flex-1 text-center font-bold text-slate-100">
        Launch Status
      </span>
      <span className="flex-1 text-center font-bold text-slate-100">Links</span>
    </div>
  );
};

export default ListHeader;
