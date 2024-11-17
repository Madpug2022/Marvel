function getYearFromDate(dateString: string): number {
  const date = new Date(dateString);
  return date.getFullYear();
}

export default getYearFromDate;
