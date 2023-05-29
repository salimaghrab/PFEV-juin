import React from "react";

interface BanqueRowProps {
  banqueId: string;
  nomBanque: string;
}

const BanqueRow = ({ banqueId, nomBanque }: BanqueRowProps) => {
  return (
    <div>
      <span>{banqueId}</span>
      <span>{nomBanque}</span>
    </div>
  );
};

export default BanqueRow;
