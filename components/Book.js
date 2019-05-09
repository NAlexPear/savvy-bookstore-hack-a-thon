export default (state) => `
<figure>
    <img src=${state.pictureUrl} alt="Photo wuz here">
    <figcaption>${state.name}</figcaption>
    <ul>
        <li>${state.sellingPoints[0]}</li>
        <li>${state.sellingPoints[1]}</li>
        <li>${state.sellingPoints[2]}</li>
    </ul>
</figure>
`;