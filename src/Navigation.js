export default function Navigation() {
    return `
        <div id="navigation">
       <ul>
           <li><a href="./ablum">ablum</a>
               <ul class="dropdown">
                   <li>hello</li>
                   <li>greetings</li>
                   <li>good bye</li>
               </ul>
           </li>

           <li><a href="./books">books</a>
               <ul class="dropdown">
                   <li>hello</li>
                   <li>greetings</li>
                   <li>good bye</li>
               </ul>
           </li>
       </ul>
   </div>
    `;
}