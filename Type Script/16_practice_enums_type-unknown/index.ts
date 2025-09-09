/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

enum TypesOfMedia {
  Video = 'video',
  Audio = 'audio',
}

enum FormatsOfMedia {
  MP4 = '.mp4',
  MOV = '.mov',
  MKV = '.mkv',
  FLV = '.flv',
  WEBM = '.webM',
}

interface SomeMovies {
  name: string;
  type: TypesOfMedia;
  formate: FormatsOfMedia;
  subtitles?: string | undefined;
  marks?: unknown | undefined;
}
const playMedia = (
  { name, type, formate, subtitles, marks }: SomeMovies = {
    name: 'example',
    type: TypesOfMedia.Video,
    formate: FormatsOfMedia.MP4,
  }
): string => {
  let marksLong: string | unknown;
  if (Array.isArray(marks)) {
    marksLong = marks
      .reduce((acc, item) => `${acc}, ${item},`)
      .trim()
      .slice(0, -1);
  } else if (typeof marks === 'string') {
    marksLong = marks;
  } else {
    marksLong = 'error';
  }
  console.log(`Media ${name}${formate} is ${type}
    Marks: ${marksLong}.
    Subtitles: ${subtitles ?? 'none'}`);

  return 'Media Started';
};
playMedia({
  name: 'Wow',
  type: TypesOfMedia.Video,
  formate: FormatsOfMedia.MP4,
  subtitles: 'hmmmm, hmhmhm, doh.',
  marks: ['4.30', '5.40'],
});
