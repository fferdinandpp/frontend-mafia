export const formatRupiah = (value?: string | number) => {
  if (value === undefined || value === null) return "Rp 0"; // Hindari error jika `undefined` atau `null`

  // Pastikan `value` berupa string, lalu hapus karakter selain angka dan titik
  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ""));

  if (isNaN(numericValue)) return "Rp 0"; // Jika bukan angka valid, kembali Rp 0

  return `Rp ${numericValue.toLocaleString("id-ID", {
    maximumFractionDigits: 0,
  })}`;
};
