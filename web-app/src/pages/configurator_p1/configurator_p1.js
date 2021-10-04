/* eslint-disable */
import { useHistory } from "react-router"
import AppHeader from "../../components/app-header"
import Basic_Options from "../../components/Basic_Options";
import Block_ford_cards from "../../components/Block_ford_cards"

export default function configurator_p1() {
    const history = useHistory();
    const hull_types = history.location.state.hull_types;
    return(
        <>
            <AppHeader /> 
            <Block_ford_cards hull_types={hull_types}/>
            <Basic_Options hull_types={hull_types.base_options}/>
        </>
    )
}