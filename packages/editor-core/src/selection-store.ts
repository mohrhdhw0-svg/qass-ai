import { create } from "zustand";
import { emptySelection, type EditorSelection } from "./selection";

interface SelectionState {
  selection: EditorSelection;
  setSelection: (selection: EditorSelection) => void;
  clearSelection: () => void;
}

export const useSelectionStore = create<SelectionState>((set) => ({
  selection: emptySelection,
  setSelection: (selection) => set({ selection }),
  clearSelection: () => set({ selection: emptySelection }),
}));
