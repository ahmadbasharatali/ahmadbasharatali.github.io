export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(date);
}
