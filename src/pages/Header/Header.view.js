import InputText from "../../components/InputText";
import { StyledHeader } from "./Header.styles";

const HeaderView = (props) => {
	const { searchInput, handleTypeSearch, handleInputEnter } = props;
	return (
		<StyledHeader>
			<InputText
				onChange={handleTypeSearch}
				onKeyUp={handleInputEnter}
				value={searchInput}
        name="searcher"
        placeholder="Search"
			/>
		</StyledHeader>
	);
};

export default HeaderView;
