export default function Navigation(state){
    return`
        <nav>    
            <ul class="links">
                <li>${state.navigation.links[0]}</li>
                <li>${state.navigation.links[1]}</li>
            </ul>
        </nav>
`;
}