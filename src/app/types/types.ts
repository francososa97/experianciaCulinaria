import { StaticImageData } from "next/image";

export type Book = {
  id: number;
  titulo: string;
  descripcion: string;
  precio: string;
  categoria: string;
  portada: StaticImageData;
};

export type BooksSectionProps = {
  filteredBooks: Book[];
  isModalOpen: boolean;
  selectedBook: Book | null;
  closeModal: () => void;
  activeModalTab: string;
  setActiveModalTab: (tab: string) => void;
};

export type Testimonio = {
  id: number;
  nombre: string;
  cargo?: string;
  mensaje: string;
  fotoUrl?: string;
};

