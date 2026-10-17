const prologs = [
  "Dengarkan baik-baik pertanyaan berikut!",
  "Siap-siap, pertanyaan penting datang!",
  "Fokus! Ini pertanyaan penentu.",
  "Perhatikan dengan seksama.",
  "Waktunya membuktikan kemampuanmu!",
];

export function getRandomProlog(_index: number, person: string, _allPersons: string[]): string {
  const randomProlog = prologs[Math.floor(Math.random() * prologs.length)];
  return `${randomProlog} Pertanyaan untuk ${person}.`;
}