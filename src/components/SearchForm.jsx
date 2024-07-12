import { search } from "react-icons-kit/feather/search";
import Icon from "react-icons-kit";

const SearchForm = ({handleCitySearch, city, setCity, loadings}) => {
    return (
        <form className="form" autoComplete="off" onSubmit={handleCitySearch}>
            <label className="form_label">
                <Icon icon={search} size={20} />
            </label>
            <input
                type="text"
                className="form_input form_input--city"
                placeholder="Enter City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                readOnly={loadings}
            />
            <button type="submit" className="btn btn--search">Search City</button>
        </form>
    )
}

export default SearchForm;