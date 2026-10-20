import { ref, computed } from 'vue';
import { getRequest, postRequest, putRequest, deleteRequest } from '../http';

export const storeModuleFactory = (moduleName) => {
    // Core starting state
    const state = ref({});

    const getters = {
        // Set up the local store
        all: computed(() => state.value),
        // Get entry with specific id
        getById: (id) => computed(() => state.value[id])
    };

    const setters = {
        // Transfer the items to the stored data without changing the items themselves
        setAll: (items) => {
            for (const item of items) state.value[item.id] = Object.freeze(item);
        },

        // Delete the stored data part based on its id
        deleteById: (id) => {
            delete state.value[id];
        }
    };

    const actions = {
        // Transfer the remote data to the local storage
        getAll: async () => {
            const { data } = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data);
        }, 

        // Transfer a new entry to the remote data storage
        create: async (item) => {
            const { data } = await postRequest(moduleName, item);
            if (!data) return;
            setters.setAll(data);
        },

        // Update a specific remote data entry
        update: async (id, item) => {
            const { data } = await putRequest(`${moduleName}/${id}`, item);
            if (!data) return;
            setters.setAll(data);
        },

        // Delete a specific remote data entry
        delete: async (id) => {
            await deleteRequest(`${moduleName}/${id}`);
            setters.deleteById(id);
        }
    };

    return { getters, setters, actions };
};