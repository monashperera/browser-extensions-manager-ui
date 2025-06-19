import FilterBtn from "./ui/FilterBtn";
import ExtensionCard from "./ExtensionCard";
import { useExtension } from "../contexts/ExtensionConProvider";

export default function Main() {

    const {state, dispatch} = useExtension();

    return (
        <main>
            <div className="container">
                <section>
                    <div className="container-filters">
                        <div>
                            <h1>Extensions List</h1>
                        </div>
                        <div>
                            <FilterBtn 
                                className={`btn-filter ${state.isFilter === 'ALL' ? 'btn-filter-active' : ''}`}
                                onClick={() => dispatch({type: 'ALL'})}
                            >
                                All
                            </FilterBtn>
                            <FilterBtn 
                                className={`btn-filter ${state.isFilter === 'ACTIVE' ? 'btn-filter-active' : ''}`}
                                onClick={() => dispatch({type: 'ACTIVE'})}
                            >
                                Active
                            </FilterBtn>
                            <FilterBtn 
                                className={`btn-filter ${state.isFilter === 'INACTIVE' ? 'btn-filter-active' : ''}`}
                                onClick={() => dispatch({type: 'INACTIVE'})}
                            >
                                Inactive
                            </FilterBtn>
                        </div>
                    </div>
                </section>
                <section aria-label="Extensions List Cards">
                    <div className="container-cards-list">
                        <ExtensionCard />
                    </div>
                </section>
            </div>
        </main>
    )
};