import { create } from "zustand";
import { z } from "zod";

export const NoteSchema = z.object({
  title: z.string().nonempty({ message: "Must provide a title" }),
  body: z.string().nonempty({ message: "Must provide a body" }),
  id: z.string().uuid(),
});

export const NotesSchema = z.object({
  notes: z.array(NoteSchema),
  addNote: z.function().args(NoteSchema).returns(z.void()),
  removeNote: z.function().args(NoteSchema).returns(z.void()),
});

export const UserSchema = z.object({
  username: z.string(),
  rename: z.function().args(z.string()).returns(z.void()),
  email: z.string().email(),
  getDone: z.function().args().returns(z.void()),
});

export type IUser = z.infer<typeof UserSchema>;
export type INote = z.infer<typeof NoteSchema>;
export type INotes = z.infer<typeof NotesSchema>;

export const useUser = create<IUser>((set) => ({
  username: "test",
  email: "test",
  rename: (name: string) => set(() => ({ username: name })),
  getDone: async () => {
    const test = await sleepyLog();
    alert(test);
  },
}));

export const useNotes = create<INotes>((set) => ({
  notes: [],
  addNote: (note: INote) => set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (note: INote) => set((state) => ({ notes: state.notes.filter((item) => item.id !== note.id) })),
}));

const sleepyLog = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("DONE !");
    }, 3000);
  });
