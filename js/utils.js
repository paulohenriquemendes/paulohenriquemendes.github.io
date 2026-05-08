export const formatDate = (value) => {
  if (!value) return "--";

  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(new Date(value));
};

export const formatLiteralDate = (value) => {
  if (!value) return "";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
};

export const sanitize = (value) => {
  if (!value) return "";

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
};

export const truncateText = (value, limit) => {
  if (!value) return "";
  if (value.length <= limit) return value;

  return `${value.slice(0, limit - 3).trim()}...`;
};
