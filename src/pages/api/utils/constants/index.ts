export const Platforms = Object.freeze({
  LINUX: 3,
  NINTENDO_64: 4,
  WII: 5,
  PC: 6,
  PS: 7,
  PS2: 8,
  PS3: 9,
  XBOX: 11,
  XBOX360: 12,
  MAC: 14,
  C64: 15,
  AMIGA: 16,
  NES: 18,
  SNES: 19,
  DS: 20,
  GC: 21,
  GBC: 22,
  DC: 23,
  GBA: 24,
  MEGA_DRIVE: 29,
  SATURN: 32,
  GB: 33,
  ANDROID: 34,
  GAME_GEAR: 35,
  THREE_DS: 37,
  PSP: 38,
  IOS: 39,
  WII_U: 41,
  VITA: 46,
  PS4: 48,
  XBOX_ONE: 49,
  FAMICOM: 58,
  MASTER_SYSTEM: 64,
  ATARI: 65,
  SEGA_CD: 78,
  TURBO_GRAFX: 86,
  VB: 87,
  STEAM_OS: 92,
  SWITCH: 130,
  OCULUS_VR: 162,
  STEAM_VR: 163,
  PS_VR: 165,
  PS5: 167,
  XBOX_SERIES: 169,
  STADIA: 170,
});

export type GmKey = keyof typeof GenreMap;
export const GenreMap = Object.freeze({
  2: {
    id: 2,
    created_at: 1297555200,
    name: "Point-and-click",
    slug: "point-and-click",
    url: "https://www.igdb.com/genres/point-and-click",
    checksum: "ef2ff68a-f7bd-d2d0-76cb-c830bd6e3191",
    hashtag: "#PointAndClick",
  },
  4: {
    id: 4,
    created_at: 1297555200,
    name: "Fighting",
    slug: "fighting",
    url: "https://www.igdb.com/genres/fighting",
    checksum: "2ccc6572-bdde-6ed4-8843-25447ea40782",
    hashtag: "#Fighting",
  },
  5: {
    id: 5,
    created_at: 1297555200,
    name: "Shooter",
    slug: "shooter",
    url: "https://www.igdb.com/genres/shooter",
    checksum: "bb15fd3f-0f46-e5f3-2b40-d046cf9bd2ef",
    hashtag: "#Shooter",
  },
  7: {
    id: 7,
    created_at: 1297555200,
    name: "Music",
    slug: "music",
    url: "https://www.igdb.com/genres/music",
    checksum: "22d44a0d-89c7-580f-eef2-e06f178fdd47",
    hashtag: "#Music",
  },
  8: {
    id: 8,
    created_at: 1297555200,
    name: "Platform",
    slug: "platform",
    url: "https://www.igdb.com/genres/platform",
    checksum: "697fc5a4-b96f-a803-288a-498bd5dd1de1",
    hashtag: "#Platform",
  },
  9: {
    id: 9,
    created_at: 1297555200,
    name: "Puzzle",
    slug: "puzzle",
    url: "https://www.igdb.com/genres/puzzle",
    checksum: "616de9c3-8a00-0232-9df9-00014cfac51b",
    hashtag: "#Puzzle",
  },
  10: {
    id: 10,
    created_at: 1297555200,
    name: "Racing",
    slug: "racing",
    url: "https://www.igdb.com/genres/racing",
    checksum: "73c2653f-54d8-c1bd-d523-dd57fb753194",
    hashtag: "#Racing",
  },
  11: {
    id: 11,
    created_at: 1297555200,
    name: "Real Time Strategy (RTS)",
    slug: "real-time-strategy-rts",
    url: "https://www.igdb.com/genres/real-time-strategy-rts",
    checksum: "aaa36cbc-2258-8653-a461-1358df8ce445",
    hashtag: "#RTS",
  },
  12: {
    id: 12,
    created_at: 1297555200,
    name: "Role-playing (RPG)",
    slug: "role-playing-rpg",
    url: "https://www.igdb.com/genres/role-playing-rpg",
    checksum: "42dea3b2-7fe2-e734-91cd-f80ce62a14c3",
    hashtag: "#RPG",
  },
  13: {
    id: 13,
    created_at: 1297555200,
    name: "Simulator",
    slug: "simulator",
    url: "https://www.igdb.com/genres/simulator",
    checksum: "9779772a-f08f-9e8e-bd26-70c9eecc34e8",
    hashtag: "#Simulator",
  },
  14: {
    id: 14,
    created_at: 1297555200,
    name: "Sport",
    slug: "sport",
    url: "https://www.igdb.com/genres/sport",
    checksum: "e598c458-3e21-7a14-50a5-ea53733ab22f",
    hashtag: "#Sport",
  },
  15: {
    id: 15,
    created_at: 1297555200,
    name: "Strategy",
    slug: "strategy",
    url: "https://www.igdb.com/genres/strategy",
    checksum: "d7863f95-0f2c-0f2d-c1e9-29d06eaf3396",
    hashtag: "#Strategy",
  },
  16: {
    id: 16,
    created_at: 1297641600,
    name: "Turn-based strategy (TBS)",
    slug: "turn-based-strategy-tbs",
    url: "https://www.igdb.com/genres/turn-based-strategy-tbs",
    checksum: "af5d3ecd-2ebd-358b-70df-e9204b9761be",
    hashtag: "#TBS",
  },
  24: {
    id: 24,
    created_at: 1300924800,
    name: "Tactical",
    slug: "tactical",
    url: "https://www.igdb.com/genres/tactical",
    checksum: "6132b15f-289e-60ea-5957-7c78b97053a2",
    hashtag: "#Tactical",
  },
  26: {
    id: 26,
    created_at: 1301961600,
    name: "Quiz/Trivia",
    slug: "quiz-trivia",
    url: "https://www.igdb.com/genres/quiz-trivia",
    checksum: "256a99dd-dd06-bc0c-d53b-dc3098da4d49",
    hashtag: "#QuizTrivia",
  },
  25: {
    id: 25,
    created_at: 1301616000,
    name: "Hack and slash/Beat 'em up",
    slug: "hack-and-slash-beat-em-up",
    url: "https://www.igdb.com/genres/hack-and-slash-beat-em-up",
    checksum: "4bd95a5d-8fa1-1aee-4ea9-224b4b1312f7",
    hashtag: "#HackAndSlash",
  },
  30: {
    id: 30,
    created_at: 1320192000,
    name: "Pinball",
    slug: "pinball",
    url: "https://www.igdb.com/genres/pinball",
    checksum: "b5657d72-ee36-0851-58df-e8d2413283f8",
    hashtag: "#Pinball",
  },
  31: {
    id: 31,
    created_at: 1323561600,
    name: "Adventure",
    slug: "adventure",
    url: "https://www.igdb.com/genres/adventure",
    checksum: "a6d85192-8d11-bad3-cc5c-dd89e2f94a47",
    hashtag: "#Adventure",
  },
  33: {
    id: 33,
    created_at: 1380931200,
    name: "Arcade",
    slug: "arcade",
    url: "https://www.igdb.com/genres/arcade",
    checksum: "388cec36-d099-f4a1-31c3-f938fae9067b",
    hashtag: "#Arcade",
  },
  34: {
    id: 34,
    created_at: 1571788800,
    name: "Visual Novel",
    slug: "visual-novel",
    url: "https://www.igdb.com/genres/visual-novel",
    checksum: "137fe5c7-e4bc-1c30-4c7c-54596b47448f",
    hashtag: "#VisualNovel",
  },
  32: {
    id: 32,
    created_at: 1341360000,
    name: "Indie",
    slug: "indie",
    url: "https://www.igdb.com/genres/indie",
    checksum: "2522259f-2454-ec02-5dc0-84373e0508ed",
    hashtag: "#Indie",
  },
  35: {
    id: 35,
    created_at: 1588809600,
    name: "Card & Board Game",
    slug: "card-and-board-game",
    url: "https://www.igdb.com/genres/card-and-board-game",
    checksum: "137bcfbe-be08-0b36-b66e-1bfef14ca49a",
    hashtag: "#CardAndBoardGame",
  },
  36: {
    id: 36,
    created_at: 1588809600,
    name: "MOBA",
    slug: "moba",
    url: "https://www.igdb.com/genres/moba",
    checksum: "0f17b3a1-6d97-4c02-0997-850adf4dc624",
    hashtag: "#MOBA",
  },
});
