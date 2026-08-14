import QRCode from "qrcode";

/**
 * SVG QR for the distributor apply URL. Error correction Q matches the print
 * collateral (survives booth wear). Dark teal on white so it scans on paper.
 */
export async function distributorApplyQrSvg(url: string): Promise<string> {
  return QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "Q",
    margin: 4,
    width: 512,
    color: {
      dark: "#0a3d42",
      light: "#ffffff",
    },
  });
}
