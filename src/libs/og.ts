type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};
export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = "https://neutrack-ai-cosmos.vercel.app/images/og/og-long.png",
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.neutrack-ai-cosmos.vercel.app/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ""}`;
}
