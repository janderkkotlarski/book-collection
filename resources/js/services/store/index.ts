import { Ref, ref, computed } from 'vue';
import { getRequest, postRequest, putRequest, deleteRequest } from '../http';

// More dedicated typing
type State<T extends {id: number}> = Ref<{[id: number]: Readonly<T>}>;

type New<T extends {id: number}> = Omit<T, 'id'>;

type Updatable<T extends {id: number}> = New<T> &{ id?: number; };

export const storeModuleFactory = <T extends {id: number}> (moduleName: string) => {
    // Core starting state, store setup
    const state: State<T> = ref({});

    const getters = {
        // Set up a local store and transferring all available relevant data into it
        // all: computed(() => Object.values(state.value)),
        all: computed(() => state.value),
        // Get entry with specific id
        byId: (id: number) => computed(() => state.value[id]),
    };

    const setters = {
        // Put each item into the local store without changing them
        setAll: (items: T[]) => {
            for (const item of items) state.value[item.id] = Object.freeze(item);
        },

        setById: (item: T) => {
            state.value[item.id] = Object.freeze(item);
        },

        // Delete the stored data part based on its id
        deleteById: (id: number) => {
            delete state.value[id];
        },
    };

    const actions = {
        // Transfer remote data to local storage
        getAll: async () => {
            const { data } = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data);
        },

        getById: async (id: number) => {
            const { data } = await getRequest(`${moduleName}/${id}`);
            if (!data) return;
            setters.setById(data);
        },

        // Transfer a new entry to remote data
        create: async (item: New<T>) => {
            const { data } = await postRequest(moduleName, item);
            if (!data) return;
            setters.setAll(data);
        },

        // Update a specific remote data entry
        update: async (id: number, item: Updatable<T>) => {
            const { data } = await putRequest(`${moduleName}/${id}`, item);
            if (!data) return;
            setters.setAll(data);
        },

        // Delete a specific remote data entry
        delete: async (id: number) => {
            await deleteRequest(`${moduleName}/${id}`);
            setters.deleteById(id);
        }
    };

    return { state, getters, setters, actions };
};