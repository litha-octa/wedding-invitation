import Bride from "./assets/img/bride.jpeg";
import Groom from "./assets/img/groom.jpeg";

export interface Person {
  name: string;
  parents: {
    father: string;
    mother: string;
  };
  photo: string;
}

export interface StoryItem {
  title: string;
  date: string;
  description: string;
}

export interface EventItem {
  title: string;
  date: string;
  time: string;
  location: string;
  icon?: string;
  description?: string;
}

export interface WeddingData {
  couple: {
    groom: Person;
    bride: Person;
  };
  date: {
    weddingDate: string;
    displayDate: string;
  };
  story: StoryItem[];
  events: EventItem[];
}

export const weddingData: WeddingData = {
  couple: {
    groom: {
      name: "Maulana Ichsan",
      parents: {
        father: "Bpk. Enoh (Alm)",
        mother: "Ibu. Nilam",
      },
      photo: Groom,
    },
    bride: {
      name: "Litha Octa Delistia",
      parents: {
        father: "Bpk. Karso",
        mother: "Ibu. Senimah",
      },
      photo: Bride,
    },
  },

  date: {
    weddingDate: "2026-02-22T08:00:00",
    displayDate: "22 Februari 2026",
  },

  story: [
    {
      title: "Pertama Bertemu",
      date: "2016",
      description:
        "Kami pertama kali saling mengenal saat duduk di bangku SMK. Saat itu, kami hanya teman sekelas yang berbagi tawa dan cerita tanpa pernah menyangka akan menjadi bagian penting dalam hidup masing-masing.",
    },
    {
      title: "Mulai Menjalin Hubungan",
      date: "2024",
      description:
        "Beberapa tahun setelah lulus, takdir mempertemukan kami kembali. Dari pertemuan sederhana itu, rasa yang dulu samar mulai tumbuh kembali — kali ini dengan niat dan perasaan yang lebih matang.",
    },
    {
      title: "Lamaran",
      date: "Januari 2025",
      description:
        "Keluarga besar kami berkumpul dalam suasana penuh kebahagiaan untuk meresmikan niat kami menuju pernikahan.",
    },
  ],

  events: [
    {
      title: "Akad Nikah",
      date: "Sabtu, 20 Juli 2025",
      time: "08:00 - 10:00 WIB",
      location: "Masjid Agung Bandung",
      icon: "calendar",
      description: "Dilaksanakan dengan khidmat bersama keluarga dan kerabat terdekat.",
    },
    {
      title: "Resepsi",
      date: "Sabtu, 20 Juli 2025",
      time: "11:00 - 14:00 WIB",
      location: "Gedung Puri Ratna, Bandung",
      icon: "gift",
      description: "Perayaan bahagia bersama teman dan keluarga.",
    },
  ],
};
