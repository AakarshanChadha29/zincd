import QRCode from "qrcode";
import type { QRCodeToStringOptions } from "qrcode";

/**
 * Error correction Q survives booth/brochure wear. Dark teal on white so it
 * scans on paper. Matches the existing apply-form QR.
 */
const printQrOptions: QRCodeToStringOptions = {
  type: "svg",
  errorCorrectionLevel: "Q",
  margin: 4,
  width: 512,
  color: {
    dark: "#0a3d42",
    light: "#ffffff",
  },
};

export async function qrSvg(url: string): Promise<string> {
  return QRCode.toString(url, printQrOptions);
}

/** @deprecated use qrSvg — kept so existing apply-QR imports keep working. */
export async function distributorApplyQrSvg(url: string): Promise<string> {
  return qrSvg(url);
}
