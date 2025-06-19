import { createContext, useContext, useReducer } from 'react';
import initialData from '../data/data.json';

const initialState = {
    iniData: initialData,
    filterData: initialData,
    isFilter: 'ALL',
}

const extensionReducer = (state, action) => {
    switch (action.type) {
        case "ALL":
            return {
                ...state,
                filterData: state.iniData,
                isFilter: 'ALL'
            };
        case "ACTIVE":
            return {
                ...state,
                filterData: state.iniData.filter((filter) => filter.isActive === true),
                isFilter: 'ACTIVE'
            };
        case "INACTIVE":
            return {
                ...state,
                filterData: state.iniData.filter((filter) => filter.isActive === false),
                isFilter: 'INACTIVE'
            };
        case "Update_isActive":
            const { id, isActive } = action.payload;
            let updateData = state.iniData.map((item) =>
                item.id === id ? { ...item, isActive: isActive } : item
            );

            let updateFilterData;

            if (state.isFilter === 'ALL') {
                updateFilterData = updateData;
            } else if (state.isFilter === 'ACTIVE') {
                updateFilterData = updateData.filter((item) => item.isActive === true);
            } else if (state.isFilter === 'INACTIVE') {
                updateFilterData = updateData.filter((item) => item.isActive === false);
            }

            return {
                ...state,
                iniData: updateData,
                filterData: updateFilterData,
            };
        case "REMOVE":
            let removeData = state.iniData.filter((item) => item.id !== action.payload);
            let removeFilterData;
            if (state.isFilter === 'ALL') {
                removeFilterData = removeData;
            } else if (state.isFilter === 'ACTIVE') {
                removeFilterData = removeData.filter((item) => item.isActive === true);
            } else if (state.isFilter === 'INACTIVE') {
                removeFilterData = removeData.filter((item) => item.isActive === false);
            }
            return {
                ...state,
                iniData: removeData,
                filterData: removeFilterData,
            }
        default:
            return state;
    };

};

export const ExtensionContext = createContext({
    state: initialState,
    dispatch: () => { },
});

export default function ExtensionConProvider({ children }) {

    const [state, dispatch] = useReducer(extensionReducer, initialState);

    return (
        <ExtensionContext.Provider value={{ state, dispatch }}>
            {children}
        </ExtensionContext.Provider>
    );
};

export const useExtension = () => {
    return useContext(ExtensionContext);
};