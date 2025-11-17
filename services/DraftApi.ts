import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { PromoDraft, CreateDraftInput, UpdateDraftStatusInput } from "@/types/draft";
import { getItemsFromStorage, saveItemsToStorage } from "@/lib/helpers/storageHelpers";

const DRAFTS_STORAGE_KEY = 'promo_drafts';

// Helper functions for local storage
const getDraftsFromStorage = async (): Promise<PromoDraft[]> => {
  return getItemsFromStorage<PromoDraft>(DRAFTS_STORAGE_KEY);
};

const saveDraftsToStorage = async (drafts: PromoDraft[]): Promise<void> => {
  return saveItemsToStorage<PromoDraft>(DRAFTS_STORAGE_KEY, drafts);
};

export const DraftApi = createApi({
  reducerPath: "draftApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Drafts"],
  endpoints: (builder) => ({
    // Get all drafts
    getDrafts: builder.query<PromoDraft[], void>({
      async queryFn() {
        try {
          const drafts = await getDraftsFromStorage();
          // Sort by updatedAt descending (newest first)
          const sortedDrafts = drafts.sort(
            (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
          return { data: sortedDrafts };
        } catch (error) {
          return { error: { status: 'CUSTOM_ERROR', error: String(error) } };
        }
      },
      providesTags: (result) => [
        "Drafts",
        { type: "Drafts" as const, id: "LIST" },
        ...(result?.map((draft) => ({ type: "Drafts" as const, id: draft.id })) || [])
      ],
    }),

    // Get single draft by ID
    getDraftById: builder.query<PromoDraft | null, string>({
      async queryFn(id) {
        try {
          const drafts = await getDraftsFromStorage();
          const draft = drafts.find((d) => d.id === id);
          return { data: draft || null };
        } catch (error) {
          return { error: { status: 'CUSTOM_ERROR', error: String(error) } };
        }
      },
      providesTags: (result, error, id) => [{ type: "Drafts", id }],
    }),

    // Create or update draft
    saveDraft: builder.mutation<PromoDraft, CreateDraftInput>({
      async queryFn(draftData) {
        try {
          const drafts = await getDraftsFromStorage();
          const now = new Date().toISOString();
          let draft: PromoDraft;

          if (draftData.id) {
            // Update existing draft
            const index = drafts.findIndex((d) => d.id === draftData.id);
            if (index !== -1) {
              draft = {
                ...drafts[index],
                ...draftData,
                updatedAt: now,
              };
              drafts[index] = draft;
            } else {
              return { error: { status: 'NOT_FOUND', error: 'Draft not found' } };
            }
          } else {
            // Create new draft
            draft = {
              ...draftData,
              id: `draft_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
              createdAt: now,
              updatedAt: now,
            } as PromoDraft;
            drafts.push(draft);
          }

          // Sort drafts by updatedAt descending before saving
          const sortedDrafts = drafts.sort(
            (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
          
          await saveDraftsToStorage(sortedDrafts);
          
          
          return { data: draft };
        } catch (error) {
          return { error: { status: 'CUSTOM_ERROR', error: String(error) } };
        }
      },
      invalidatesTags: (result, error, arg) => [
        "Drafts",
        { type: "Drafts" as const, id: "LIST" },
        ...(arg.id ? [{ type: "Drafts" as const, id: arg.id }] : [])
      ],
    }),

    // Delete draft
    deleteDraft: builder.mutation<{ success: boolean; id: string }, string>({
      async queryFn(id) {
        try {
          const drafts = await getDraftsFromStorage();
          const filteredDrafts = drafts.filter((d) => d.id !== id);
          
          if (filteredDrafts.length === drafts.length) {
            return { error: { status: 'NOT_FOUND', error: 'Draft not found' } };
          }

          await saveDraftsToStorage(filteredDrafts);
          
          
          return { data: { success: true, id } };
        } catch (error) {
          return { error: { status: 'CUSTOM_ERROR', error: String(error) } };
        }
      },
      invalidatesTags: ["Drafts"],
    }),

    // Update draft status
    updateDraftStatus: builder.mutation<PromoDraft, UpdateDraftStatusInput>({
      async queryFn({ id, status }) {
        try {
          const drafts = await getDraftsFromStorage();
          const index = drafts.findIndex((d) => d.id === id);

          if (index === -1) {
            return { error: { status: 'NOT_FOUND', error: 'Draft not found' } };
          }

          const updatedDraft = {
            ...drafts[index],
            status,
            updatedAt: new Date().toISOString(),
          };

          drafts[index] = updatedDraft;
          await saveDraftsToStorage(drafts);
          

          return { data: updatedDraft };
        } catch (error) {
          return { error: { status: 'CUSTOM_ERROR', error: String(error) } };
        }
      },
      invalidatesTags: ["Drafts"],
    }),
  }),
});

export const {
  useGetDraftsQuery,
  useGetDraftByIdQuery,
  useSaveDraftMutation,
  useDeleteDraftMutation,
  useUpdateDraftStatusMutation,
} = DraftApi;
