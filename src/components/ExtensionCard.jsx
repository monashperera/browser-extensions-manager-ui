import { useExtension } from '../contexts/ExtensionConProvider'
import InfoCard from './ui/InfoCard';


export default function ExtensionCard() {

    const { state, dispatch } = useExtension();

    const removeExtension = (removeId) => {
        dispatch({ type: "REMOVE", payload: removeId });
    }

    const handleChange = (e, checkId) => {
        const newCheckStatus = e.target.checked;
        dispatch({
            type: "Update_isActive",
            payload: {
                id: checkId,
                isActive: newCheckStatus,
            }
        });
    };

    return (
        <>

            {state.filterData && state.filterData.map((data) => (
                <article key={data.id}>
                    <div className="card-extension">
                        <div className="card-extension-body">
                            <div>
                                <img src={require(`../assets/images/${data.logo}`)} alt={data.logo} />
                            </div>
                            <div>
                                <h2 className="title">
                                    {data.name}
                                </h2>
                                <p className="description">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                        <div className="card-extension-footer">
                            <button
                                className="btn-remove"
                                onClick={() => removeExtension(data.id)}
                            >Remove</button>
                            <div className="toggle-container">
                                <input
                                    type="checkbox"
                                    className="toggle-checkbox"
                                    name={data.id}
                                    id={data.id}
                                    defaultChecked={data.isActive}
                                    aria-label="Card Status"
                                    onChange={(e) => handleChange(e, data.id)}
                                />
                                <label className="btn-toggle" htmlFor={data.id}></label>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
            {state.filterData.length === 0 ?

                <InfoCard>
                    We couldn't find any
                    <span>
                        {state.isFilter === 'ACTIVE' ? ' Active ' : state.isFilter === 'INACTIVE' ? ' Inactive ' : ' '}
                    </span>
                    extensions.
                </InfoCard>
                : ''
            }
        </>

    )
};